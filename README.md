[![Build Status](https://www.travis-ci.com/lukasweidich/auction-template.svg?branch=master)](https://www.travis-ci.com/lukasweidich/auction-template)

# Generate eBay descriptions on the fly 🚀

## About Auction Template

Auction Template provides a free and easy to use way to create a consistent and professional look and feel for listings of eBay sellers.

Auction Template automatically generates attractive and customizable product descriptions for existing eBay listings. Unlike other solutions on the internet, the editor is fully automated and connected to official eBay interfaces, so there is no need for any manual maintenance of product information such as pictures or features.

## Our API

Feel free to use the api we provide at `/api/items/<itemId>` to retrieve item data in JSON format, or get an overview of all items of a specific seller at `/api/sellers/<sellerId>` in JSON format as well.

> Disclaimer: API is not tested yet and might not be publicly available for free in the future.

### Optional query parameters

Both API endpoints take `siteId` an as optional query parameter to specify the eBay country. Please include the siteId whenever possible to prevent any unwanted side effects. If not provided, `siteId` defaults to `0`. Refer to the [official eBay documentation](https://developer.ebay.com/DevZone/merchandising/docs/Concepts/SiteIDToGlobalID.html) for more information.

### Examples
#### `/api/items/402610080980?siteId=77`
> Retrieves information for a single listing.

Returns a JSON object containing following keys:
  - `item`: A JSON object containing the properties of the requested item. Click [here](https://developer.ebay.com/devzone/shopping/docs/callref/getsingleitem.html) for eBays documentation on the GetSingleItem endpoint.
  - `message`: A string containing a human readable description of the request result.
  - `status`: "Success" || "Warning" || "Failure"
  
#### `/api/sellers/trademax-24?siteId=77`
> Retrieves all active listings of a seller.

Returns a JSON object containing following keys:
  - `items`: An array of items. Be aware that this endpoint does not provide detailed information or pictures of the item, just a preview image and general information. Click [here](https://developer.ebay.com/DevZone/finding/CallRef/findItemsAdvanced.html) for eBays documentation on the FindItemsAdvanced endpoint.
  - `message`: A string containing a human readable description of the request result.
  - `status`: "Success" || "Warning" || "Failure"
