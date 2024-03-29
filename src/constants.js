﻿const CONSTANTS = {};

/**
 * CONSTANTS ENDPOINTS
 */

CONSTANTS.ENDPOINT = {};

CONSTANTS.ENDPOINT.COFFEESHOPS = "/api/coffeeshops";

CONSTANTS.ENDPOINT.GRID = "/api/grid";

CONSTANTS.ENDPOINT.LIST = "/api/list";

CONSTANTS.ENDPOINT.ORDER = "/api/order";

CONSTANTS.ENDPOINT.MASTERDETAIL = "/api/masterdetail";

/**
 * CONSTANTS ERROR MESSAGES
 */

CONSTANTS.ERROR_MESSAGE = {};

CONSTANTS.ERROR_MESSAGE.COFFEESHOPS_EMPTY_MESSAGE =
  "Please enter a valid coffee shop name";

CONSTANTS.ERROR_MESSAGE.COFFEESHOPS_ADD =
  "Request to register coffee shop failed:";

CONSTANTS.ERROR_MESSAGE.ORDER_SUBMIT_NAME_EMPTY_MESSAGE =
  "Please enter a valid full name";

CONSTANTS.ERROR_MESSAGE.ORDER_SUBMIT_OERDERS_EMPTY_MESSAGE =
  "Please enter valid orders";

CONSTANTS.ERROR_MESSAGE.GRID_GET = "Request to get grid text failed:";

CONSTANTS.ERROR_MESSAGE.LIST_DELETE = "Request to delete list item failed:";

CONSTANTS.ERROR_MESSAGE.LIST_ADD = "Request to add list item failed:";

CONSTANTS.ERROR_MESSAGE.LIST_GET = "Request to get list items failed:";

CONSTANTS.ERROR_MESSAGE.LIST_EMPTY_MESSAGE = "Please enter a valid message";

CONSTANTS.ERROR_MESSAGE.MASTERDETAIL_GET =
  "Request to get master detail text failed:";

export default CONSTANTS;
