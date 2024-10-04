import type { LayoutServerLoad } from "./$types";
import { LUMA_EVENT_ID, LUMA_EVENT_URL } from "$env/static/private";

export const load: LayoutServerLoad = () => {
  return {
    eventID: LUMA_EVENT_ID,
    eventURL: LUMA_EVENT_URL
  }
}
