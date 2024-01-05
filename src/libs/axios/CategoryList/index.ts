export default async function getCategoryList(): Promise<ResponseCategoryListProps> {
  const res = await fetch("https://mock-api.arikmpt.com/api/category", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const repone = (await res.json()) as unknown;

  return repone as ResponseCategoryListProps;
}
// Generated by https://quicktype.io

export interface ResponseCategoryListProps {
  data: Datum[];
  current_page: number;
  total_item: number;
  total_page: number;
}

export interface Datum {
  id: string;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
