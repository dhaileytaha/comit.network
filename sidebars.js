/**
 * Sidebar configuration.
 */

module.exports = {
  main: {
    'Getting Started': ['getting-started/create-comit-app'],
    'Core Concepts': [],
    'Tutorials': [],
    'SDK': [
      'comit-sdk/index',
      {
        type: 'category',
        label: 'Modules',
        items: [
          "comit-sdk/modules/_action_to_http_request_",
          "comit-sdk/modules/_actor_",
          "comit-sdk/modules/_bitcoin_wallet_",
          "comit-sdk/modules/_cnd_",
          "comit-sdk/modules/_comit_client_",
          "comit-sdk/modules/_ethereum_wallet_",
          "comit-sdk/modules/_negotiation_execution_params_",
          "comit-sdk/modules/_negotiation_maker_negotiator_",
          "comit-sdk/modules/_negotiation_order_",
          "comit-sdk/modules/_negotiation_taker_negotiator_",
          "comit-sdk/modules/_siren_",
          "comit-sdk/modules/_swap_",
          "comit-sdk/modules/_timeout_promise_",
          "comit-sdk/modules/_tokens_definitions_",
          "comit-sdk/modules/_tokens_tokens_"
        ]
      },
      {
        type: 'category',
        label: 'Interfaces',
        items: [
          "comit-sdk/interfaces/_actor_.actor",
          "comit-sdk/interfaces/_bitcoin_wallet_.bitcoinwallet",
          "comit-sdk/interfaces/_cnd_.asset",
          "comit-sdk/interfaces/_cnd_.bitcoinbroadcastsignedtransactionpayload",
          "comit-sdk/interfaces/_cnd_.bitcoinsendamounttoaddresspayload",
          "comit-sdk/interfaces/_cnd_.ethereumcallcontractpayload",
          "comit-sdk/interfaces/_cnd_.ethereumdeploycontractpayload",
          "comit-sdk/interfaces/_cnd_.getinfo",
          "comit-sdk/interfaces/_cnd_.ledger",
          "comit-sdk/interfaces/_cnd_.peer",
          "comit-sdk/interfaces/_cnd_.swapdetails",
          "comit-sdk/interfaces/_cnd_.swapproperties",
          "comit-sdk/interfaces/_cnd_.swaprequest",
          "comit-sdk/interfaces/_cnd_.swapsubentity",
          "comit-sdk/interfaces/_negotiation_execution_params_.executionparams",
          "comit-sdk/interfaces/_negotiation_execution_params_.ledgerparams",
          "comit-sdk/interfaces/_negotiation_order_.order",
          "comit-sdk/interfaces/_negotiation_order_.orderasset",
          "comit-sdk/interfaces/_siren_.action",
          "comit-sdk/interfaces/_siren_.embeddedlinksubentity",
          "comit-sdk/interfaces/_siren_.entity",
          "comit-sdk/interfaces/_siren_.field",
          "comit-sdk/interfaces/_siren_.fieldvalueobject",
          "comit-sdk/interfaces/_siren_.link",
          "comit-sdk/interfaces/_timeout_promise_.tryparams",
          "comit-sdk/interfaces/_tokens_tokens_.token",
          "comit-sdk/interfaces/_actor_.actor",
          "comit-sdk/interfaces/_bitcoin_wallet_.bitcoinwallet",
          "comit-sdk/interfaces/_cnd_.asset",
          "comit-sdk/interfaces/_cnd_.bitcoinbroadcastsignedtransactionpayload",
          "comit-sdk/interfaces/_cnd_.bitcoinsendamounttoaddresspayload",
          "comit-sdk/interfaces/_cnd_.ethereumcallcontractpayload",
          "comit-sdk/interfaces/_cnd_.ethereumdeploycontractpayload",
          "comit-sdk/interfaces/_cnd_.getinfo",
          "comit-sdk/interfaces/_cnd_.ledger",
          "comit-sdk/interfaces/_cnd_.peer",
          "comit-sdk/interfaces/_cnd_.swapdetails",
          "comit-sdk/interfaces/_cnd_.swapproperties",
          "comit-sdk/interfaces/_cnd_.swaprequest",
          "comit-sdk/interfaces/_cnd_.swapsubentity",
          "comit-sdk/interfaces/_negotiation_execution_params_.executionparams",
          "comit-sdk/interfaces/_negotiation_execution_params_.ledgerparams",
          "comit-sdk/interfaces/_negotiation_order_.order",
          "comit-sdk/interfaces/_negotiation_order_.orderasset",
          "comit-sdk/interfaces/_siren_.action",
          "comit-sdk/interfaces/_siren_.embeddedlinksubentity",
          "comit-sdk/interfaces/_siren_.entity",
          "comit-sdk/interfaces/_siren_.field",
          "comit-sdk/interfaces/_siren_.fieldvalueobject",
          "comit-sdk/interfaces/_siren_.link",
          "comit-sdk/interfaces/_timeout_promise_.tryparams",
          "comit-sdk/interfaces/_tokens_tokens_.token"
        ]
      },
      {
        type: 'category',
        label: 'Classes',
        items: [
          "comit-sdk/classes/_bitcoin_wallet_.inmemorybitcoinwallet",
          "comit-sdk/classes/_cnd_.cnd",
          "comit-sdk/classes/_comit_client_.comitclient",
          "comit-sdk/classes/_ethereum_wallet_.ethereumwallet",
          "comit-sdk/classes/_negotiation_maker_negotiator_.makerhttpapi",
          "comit-sdk/classes/_negotiation_maker_negotiator_.makernegotiator",
          "comit-sdk/classes/_negotiation_taker_negotiator_.makerclient",
          "comit-sdk/classes/_negotiation_taker_negotiator_.takernegotiator",
          "comit-sdk/classes/_swap_.swap",
          "comit-sdk/classes/_bitcoin_wallet_.inmemorybitcoinwallet",
          "comit-sdk/classes/_cnd_.cnd",
          "comit-sdk/classes/_comit_client_.comitclient",
          "comit-sdk/classes/_ethereum_wallet_.ethereumwallet",
          "comit-sdk/classes/_negotiation_maker_negotiator_.makerhttpapi",
          "comit-sdk/classes/_negotiation_maker_negotiator_.makernegotiator",
          "comit-sdk/classes/_negotiation_taker_negotiator_.makerclient",
          "comit-sdk/classes/_negotiation_taker_negotiator_.takernegotiator",
          "comit-sdk/classes/_swap_.swap"
        ]
      },
      {
        type: 'category',
        label: 'Enums',
        items: [
          "comit-sdk/enums/_negotiation_execution_params_.networktype",
          "comit-sdk/enums/_negotiation_execution_params_.networktype"
        ]
      }
    ],
  },
};


