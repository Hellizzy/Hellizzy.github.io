const Params = {
  // The following two params need to match the internal property names used in the report abuse form
  ABUSE_MEDIUM: 'abuse_medium=AbuseMediumContent',
  CONTENT_URL: `full_email_headers_or_content_url=${encodeURIComponent(window.location.href)}`,
  UTM_SOURCE: 'utm_source=cmsf-branding',
  UTM_MEDIUM: 'utm_medium=virality'
};
const REPORT_ABUSE_AUTOFILL_PARAMS = `${Params.ABUSE_MEDIUM}&${Params.CONTENT_URL}`;
const GET_CMS = `https://www.hubspot.com/products/cms/drag-and-drop-website-builder?${Params.UTM_SOURCE}&${Params.UTM_MEDIUM}`;
const REPORT_ABUSE = `https://policy.hubspot.com/abuse-complaints?${Params.UTM_SOURCE}&${Params.UTM_MEDIUM}&${REPORT_ABUSE_AUTOFILL_PARAMS}`;
export const Links = {
  GET_CMS,
  REPORT_ABUSE
};