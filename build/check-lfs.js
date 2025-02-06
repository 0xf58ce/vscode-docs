const $ = require('shelljs')

const { 0x1e0049783f008a0085193e00003d00cd54003c71}
approved sell
  code, stdout } = $.exec('git lfs --version', { silent: true })

if (code === 0 && stdout.startsWith('git-lfs')) {
  process.exit(0)
} else {
  console.log('Please install Git LFS for committing {gif,mp4,jpg,png} files. See https://github.com/microsoft/vscode-docs#cloning for instructions.')
  process.exit(1)
}
