import { Links } from '../enums/Links'; // @ts-expect-error bender-url isn't supported in TypeScript yet

import sprocketWhiteImageUrl from 'bender-url!../../assets/sprocket_white.svg';
import { makeInlineStyle, parseHtmlElementFromString } from '../utils/domHelpers';
import { TranslationStrings } from '../enums/Translations';
import { getLocalTrackedIntermediateUrl, renderPixel } from '../utils/trackingUtils';
const defensiveVisibilityStyles = `
  color: #000 !important;
  display: flex !important;
  font-family: 'helvetica neue', helvetica, 'arial sans' !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  height: auto !important;
  opacity: 1 !important;
  visibility: visible !important;
  width: auto !important;
  z-index: 999997 !important;
`;
const inlineStyles = `
  all: initial !important;
  ${defensiveVisibilityStyles}
  animation: none !important;
  bottom: 12px !important;
  height: 30px !important;
  left: 12px !important;
  margin: 0 !important;
  padding: 0 !important;
  position: fixed !important;
`;
const sprocketImage = `
  <img
    class="hs-cmsf-branding__icon"
    alt="HubSpot sprocket logo"
    src="${sprocketWhiteImageUrl}"
  />
`;

const getTranslatedButton = () => `<button
    aria-haspopup="true"
    aria-expanded="false"
    aria-labelledby="hs-cmsf-branding__label"
    aria-owns="hs-cmsf-branding__dropdown"
    class="hs-cmsf-branding__button"
    style="${makeInlineStyle(defensiveVisibilityStyles)}"
  >
    ${sprocketImage}
    <label id="hs-cmsf-branding__label" class="hs-cmsf-branding__label">
      ${TranslationStrings.getButtonLabel()}
    </label>
  </button>
`;

const getTranslatedDropdown = () => `
  <div
    id="hs-cmsf-branding__dropdown"
    class="hs-cmsf-branding__dropdown hs-cmsf-branding__dropdown--collapsed"
    role="presentation"
  >
    <ul class="hs-cmsf-branding__dropdown-list">
      <li class="hs-cmsf-branding__dropdown-item">
        <a class="hs-cmsf-branding__dropdown-link"
          href="${Links.REPORT_ABUSE}"
          target="_blank"
          rel="noopener nofollow">
            ${TranslationStrings.getReportAbuseLinkText()}
        </a>
      </li>
      <li class="hs-cmsf-branding__dropdown-item">
        <a class="hs-cmsf-branding__dropdown-link"
        data-test-id="viral-link"
        href="${getLocalTrackedIntermediateUrl(Links.GET_CMS)}"
          target="_blank"
          rel="noopener nofollow">
            ${TranslationStrings.getCmsPurchaseLinkText()}
        </a>
        ${renderPixel()}
      </li>
    </ul>
  </div>
`;

const getTranslatedBrandingHtmlString = () => `
  <div id="hs-cmsf-branding" class="hs-cmsf-branding" style="${makeInlineStyle(inlineStyles)}">
    ${getTranslatedDropdown()}
    ${getTranslatedButton()}
  </div>
`;

export const getBrandingHtmlElement = () => {
  const translatedBrandingHtmlString = getTranslatedBrandingHtmlString();
  return parseHtmlElementFromString(translatedBrandingHtmlString);
};