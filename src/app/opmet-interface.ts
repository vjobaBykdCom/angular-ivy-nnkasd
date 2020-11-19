export interface OpmetData {
  reportTypes: string[];
  stations?: string[];
  countries?: string[];
}

export interface OpmetResponse {
  error: any;
  id: string;
  result: {
    placeId: string;
    queryType: string;
    receptionTime: string;
    refs: string[];
    reportTime: string;
    reportType: string;
    revision: string;
    stationId: string;
    text: string;
    textHTML: string;
  }[];
}
