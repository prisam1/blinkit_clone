import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from '@/components/ui/table';
  
  export function PlatformTable({ rows }: { rows: any[] }) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Platform</TableHead>
            <TableHead>Orders</TableHead>
            <TableHead>Revenue</TableHead>
            <TableHead>Change</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.platform}>
              <TableCell>{row.platform}</TableCell>
              <TableCell>{row.orders}</TableCell>
              <TableCell>{row.revenue}</TableCell>
              <TableCell className={row.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                {row.change}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  