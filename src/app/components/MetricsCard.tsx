import { Card, CardContent } from '@/components/ui/card';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

interface Props {
  label: string;
  value: string;
  change: string;
}

export function MetricsCard({ label, value, change }: Props) {
  const isPositive = change.startsWith('+');

  return (
    <Card>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">{label}</p>
        <h3 className="text-xl font-bold">{value}</h3>
        <p className={`text-sm flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
          {change}
        </p>
      </CardContent>
    </Card>
  );
}
