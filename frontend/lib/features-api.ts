import { fetchJson, HelloResponse } from "./utils";

export function getFeaturesHello() {
  return fetchJson<HelloResponse>('/api/features/hello');
}