/* global Actors */

import * as KithSheets from './actor-sheets-kith.js'

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */
Hooks.once('init', async function () {
  console.log(`DCC | Initializing Dungeon Crawl Classics System`)

  // Register sheet application classes
  Actors.registerSheet('dcc-kith', KithSheets.ActorSheetKith, { types: ['Player'] })
})

