/**
 * DCC Kith character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Kith
 * @extends {DCCActorSheet}
 */
class ActorSheetKith extends DCCActorSheet {
  /** @override */
  async getData (options) {
    const data = await super.getData(options)
    this.options.template = 'modules/dcc-kith/templates/actor-sheet-kith.html'
    data.system.class.className = game.i18n.localize('Kith.ActorSheetKith')

    // Add in Kith specific data if missing
    if (!data.system.skills.tracking) {
      this.actor.update({
        'system.skills.tracking': {
          label: 'Kith.Tracking',
          value: '+1'
        }
      })
    }
    if (!data.system.skills.detectTraps) {
      this.actor.update({
        'system.skills.detectTraps': {
          label: 'Kith.DetectTraps',
          value: '+1'
        }
      })
    }
    if (!data.system.skills.detectHiddenFoes) {
      this.actor.update({
        'system.skills.detectHiddenFoes': {
          label: 'Kith.DetectHiddenFoes',
          value: '+1'
        }
      })
    }
    if (!data.system.skills.burnDie) {
      this.actor.update({
        'system.skills.burnDie': {
          label: 'Kith.BurnDie',
          die: '1d3'
        }
      })
    }

    if (data.system.details.sheetClass != 'Kith') {
      this.actor.update({
        'system.class.className': game.i18n.localize('Kith.ActorSheetKith'),
        'system.details.sheetClass': 'Kith'
      })
    }

    return data
  }
}

export {
  ActorSheetKith
}
