export function length(value: number, baseUnit: string, unitConvertion: string) {

  interface ConvertTable {
    km: number;
    hm: number;
    dam: number;
    m: number;
    dm: number;
    cm: number;
    mm: number;
  }

  const convertTable: ConvertTable = {
    km: 1000,
    hm: 100,
    dam: 10,
    m: 1,
    dm: 0.1,
    cm: 0.01,
    mm: 0.001,
  };

  const convertWeigth: number = convertTable[baseUnit as keyof ConvertTable] / convertTable[unitConvertion as keyof ConvertTable];
  return convertWeigth * value;
}
