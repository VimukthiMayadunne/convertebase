import {Command, flags} from '@oclif/command'
import {numberConverter} from './converter'

class Convertebase extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    // flag to get the input value
    name: flags.string({char: 'n', description: 'Input Number'}),
    inBase: flags.string({char: 'i', description: 'Input Base'}),
    outBase: flags.string({char: 'o', description: 'Output Base'}),
  }

  async run() {
    const {flags} = this.parse(Convertebase)
    const number = flags.name
    const inBase = flags.inBase
    const outBase = flags.outBase
    const response = numberConverter(number, inBase, outBase)
    if (response instanceof Error) {
      console.error(response.message)
    } else {
      console.info(response)
    }
  }
}

export = Convertebase
