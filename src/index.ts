import {Command, flags} from '@oclif/command'
import {numberConverter} from './converter'

class Convertebase extends Command {
  static description = 'Covert the given number to given base'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    // flag to get the input value
    num: flags.string({char: 'n', description: 'Input Number'}),
    inBase: flags.string({char: 'i', description: 'Input Base'}),
    outBase: flags.string({char: 'o', description: 'Output Base'}),
  }

  async run() {
    const {flags} = this.parse(Convertebase)
    const number = flags.num
    const inBase = flags.inBase || 10
    const outBase = flags.outBase
    const response = numberConverter(number, inBase, outBase)
    if (response instanceof Error) {
      this.log(response.message)
    } else {
      this.log(response)
    }
  }
}

export = Convertebase
