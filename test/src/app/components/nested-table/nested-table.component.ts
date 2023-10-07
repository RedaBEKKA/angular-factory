import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { TableRow } from './table-row';

@Component({
  selector: 'app-nested-table',
  templateUrl: './nested-table.component.html',
  styleUrls: ['./nested-table.component.css'],
})
export class NestedTableComponent implements OnInit {
  // Data for the table
  tableData: TableRow[] = [
    {
      name: 'red bek',
      type: 'Type 1',
      email: 'reda@outlok.com',
      phoneNumber: '+99786550021',
      companyName: 'Meta',
      expanded: false,
      selected: false, 
      children: [
        {
          name: 'Child 1',
          type: 'Type 2',
          email: 'child1@example.com',
          phoneNumber: '987-654-3210',
          companyName: 'Google',
          expanded: false,
          selected: false,
          children: [], 
        },
   
      ],
    },
    {
      name: 'REDA BEKKA',
      type: 'Type 3',
      email: 'jane.bekka@gmail.com',
      phoneNumber: '0560126905',
      companyName: 'Studi.fr',
      expanded: false,
      selected: false,
      children: [], 
    },
    {
      name: 'Moma ',
      type: 'Type 4',
      email: 'moma@gmail.com',
      phoneNumber: '0782205066',
      companyName: 'Factory digital',
      expanded: false,
      selected: false,
      children: [], 
    },
    
  ];

  
  selectAll: boolean = false;
  searchText: string = '';
  
  private searchTextChanged = new Subject<string>();
  
  constructor() {
    this.setupSearchTextSubscription();
  }
  
  private setupSearchTextSubscription(): void {
    this.searchTextChanged.pipe(debounceTime(300), distinctUntilChanged()).subscribe(() => {
      console.log('Search Text Changed:', this.searchText);
      this.filterRowsByName();
    });
  }

  ngOnInit() {
  }
  // Toggle row expansion
  toggleRow(row: any): void {
    row.expanded = !row.expanded;
  }

  // Select/deselect row
  toggleSelectRow(row: any): void {
    row.selected = !row.selected;
    this.updateDeleteButtonVisibility();
  }

  // Select/deselect all rows
  toggleSelectAll(): void {
    this.selectAll = !this.selectAll;
    // Update the selectedRows array based on selectAll status
    this.tableData.forEach((row) => (row.selected = this.selectAll));
    this.updateDeleteButtonVisibility();
  }

  // Check if any row is selected
  isAnyRowSelected(): boolean {
    return this.tableData.some((row) => row.selected);
  }

  // Update delete button visibility based on selected rows
  updateDeleteButtonVisibility(): void {
    const isAnySelected = this.isAnyRowSelected();
    if (isAnySelected) {
      // Hide buttons for hovering state when any row is selected
      const buttons = document.querySelectorAll('.hover-buttons');
      buttons.forEach((button: any) => {
        button.style.display = 'none';
      });
      const deleteMultipleButton = document.querySelector('.delete-multiple-button') as HTMLElement;
      if (deleteMultipleButton) {
        deleteMultipleButton.style.display = 'inline-block';
      }
    } else {
      // Show buttons for hovering state when no row is selected
      const buttons = document.querySelectorAll('.hover-buttons');
      buttons.forEach((button: any) => {
        button.style.display = 'inline-block';
      });
  
      // Implement the logic to hide "Delete multiple" button in your table header here
      // For example, you can hide it like this:
      const deleteMultipleButton = document.querySelector('.delete-multiple-button') as HTMLElement;
      if (deleteMultipleButton) {
        deleteMultipleButton.style.display = 'none';
      }
    }
  }
  
  onSearch(): void {
    this.searchTextChanged.next(this.searchText);
  }

  // Filter rows by name and show parents when children match the search string
  filterRowsByName(): void {
    const searchText = this.searchText.toLowerCase();
    this.tableData.forEach((row) => {
      const rowName = row.name.toLowerCase();
      row.hidden = searchText !== '' && !rowName.includes(searchText);
    });
  }
  

  deleteSelectedRows(): void {
    this.tableData = this.tableData.filter((row) => !row.selected);
    this.updateDeleteButtonVisibility();
  }
}
