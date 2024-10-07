import type { LayoutServerLoad } from "./$types";
import { LUMA_EVENT_URL } from "$env/static/private";

export const load: LayoutServerLoad = () => {
  return {
    eventURL: LUMA_EVENT_URL
  }
}
