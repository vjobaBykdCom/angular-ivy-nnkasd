import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { OpmetResponse } from '../../opmet-interface';

interface TableData {
  stationId: string;
  types: {
    queryType: string;
    time: string;
    text: string;
  }[];
}

@Component({
  selector: 'app-opmet-table',
  templateUrl: './opmet-table.component.html',
  styleUrls: ['./opmet-table.component.scss'],
})
export class OpmetTableComponent implements OnChanges {
  @Input() data: OpmetResponse;
  tableData: TableData[] = [];
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data?.currentValue) {
      this.tableData = this.mapObject(this.data);
    }
  }

  mapObject(data: OpmetResponse): TableData[] {
    const tableData: TableData[] = data?.result?.reduce((acc, cur) => {
      if (!acc.find((x) => x.stationId === cur.stationId)) {
        acc.push({ stationId: cur.stationId, types: [] });
      }

      const opmItem = acc.find((x) => x.stationId === cur.stationId);
      opmItem.types.push({
        queryType: cur.queryType,
        time: this.toLocaleTime(cur.reportTime),
        text: this.reportBodyParse(data.result[0].text),
      });
      return acc;
    }, [] as TableData[]);
    return tableData;
  }

  toLocaleTime(dateTime: string): string {
    return new Date(dateTime).toLocaleString('sk-SK', {
      timeZone: 'Europe/Bratislava',
    });
  }

  reportBodyParse(text: string): string {
    const chunks = text.split(' ');
    for (let i = 0; i < chunks.length; i++) {
      if (/^(BNK[0-9]{3}|FEW[0-9]{3}|SCT[0-9]{3})$/.exec(chunks[i])) {
        const numVal = Number.parseInt(chunks[i].substr(3), 10);
        if (numVal <= 30) {
          chunks[i] = `<span class="opmetBlue">${chunks[i]}</span>`;
        } else {
          chunks[i] = `<span class="opmetRed">${chunks[i]}</span>`;
        }
      }
    }
    return chunks.join(' ');
  }
}
