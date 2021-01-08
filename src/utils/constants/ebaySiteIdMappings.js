const eBaySiteIdMappings = [
  { siteId: 0, siteName: "eBay United States", globalId: "EBAY-US" },
  { siteId: 2, siteName: "eBay Canada (English)", globalId: "EBAY-ENCA" },
  { siteId: 3, siteName: "eBay UK", globalId: "EBAY-GB" },
  { siteId: 15, siteName: "eBay Australia", globalId: "EBAY-AU" },
  { siteId: 16, siteName: "eBay Austria", globalId: "EBAY-AT" },
  { siteId: 23, siteName: "eBay Belgium (French)", globalId: "EBAY-FRBE" },
  { siteId: 71, siteName: "eBay France", globalId: "EBAY-FR" },
  { siteId: 77, siteName: "eBay Germany", globalId: "EBAY-DE" },
  { siteId: 100, siteName: "eBay Motors", globalId: "EBAY-MOTOR" },
  { siteId: 101, siteName: "eBay Italy", globalId: "EBAY-IT" },
  { siteId: 123, siteName: "eBay Belgium (Dutch)", globalId: "EBAY-NLBE" },
  { siteId: 146, siteName: "eBay Netherlands", globalId: "EBAY-NL" },
  { siteId: 186, siteName: "eBay Spain", globalId: "EBAY-ES" },
  { siteId: 193, siteName: "eBay Switzerland", globalId: "EBAY-CH" },
  { siteId: 201, siteName: "eBay Hong Kong", globalId: "EBAY-HK" },
  { siteId: 203, siteName: "eBay India", globalId: "EBAY-IN" },
  { siteId: 205, siteName: "eBay Ireland", globalId: "EBAY-IE" },
  { siteId: 207, siteName: "eBay Malaysia", globalId: "EBAY-MY" },
  { siteId: 210, siteName: "eBay Canada (French)", globalId: "EBAY-FRCA" },
  { siteId: 211, siteName: "eBay Philippines", globalId: "EBAY-PH" },
  { siteId: 212, siteName: "eBay Poland", globalId: "EBAY-PL" },
  { siteId: 216, siteName: "eBay Singapore", globalId: "EBAY-SG" },
];

export const getMappingFromSiteId = (siteId) => {
  return eBaySiteIdMappings.filter(
    (eBaySiteIdMapping) => eBaySiteIdMapping.siteId === siteId
  )[0];
};

export default eBaySiteIdMappings;
