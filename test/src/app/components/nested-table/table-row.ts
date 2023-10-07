export interface TableRow {
    name: string;
    type: string;
    email: string;
    phoneNumber: string;
    companyName: string;
    expanded: boolean;
    selected: boolean;
    children: TableRow[];
    hidden?: boolean;
}
