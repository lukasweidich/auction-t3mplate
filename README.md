[![Build Status](https://travis-ci.org/lukasweidich/auction-t3mplate.svg?branch=master)](https://travis-ci.org/lukasweidich/auction-t3mplate)

# Generate eBay descriptions on the fly 🚀

## About Auction Template

With Auction Template, anybody can create an attractive product description for their eBay listings. In contrast to many other available solutions online, Auction Template is fully automated (no manual entries needed, since we get the data directly from eBay), completely free and easy to use.

## Our API

Feel free to use the api we provide at `/api/items/<itemId>` to retrieve item data in JSON format, or get an overview of all items of a specific seller at `/api/sellers/<sellerId>` in JSON format as well.

> Disclaimer: API is not tested yet and might not be publicly available for free in the future.

### Optional query parameters

Both API endpoints take `siteId` an as optional query parameter to specify the eBay country. Please include the siteId whenever possible to prevent any unwanted side effects. If not provided, `siteId` defaults to `0`. Refer to the [official eBay documentation](https://developer.ebay.com/DevZone/merchandising/docs/Concepts/SiteIDToGlobalID.html) for more information.

> Examples: `/api/items/123456789?siteId=77` and `/api/sellers/dem-it?siteId=77`
