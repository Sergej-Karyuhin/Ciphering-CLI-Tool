# Ciphering-CLI-Tool
### Installation and Usage
- use git-clone and go to the folder
- checkout to branch `task1`
- use npm i (optional, for prettier)
- use cli (see arguments below)

### Arguments
1.  **-c, --config**: config for ciphers
Config is a string with pattern `{XY(-)}n`, where:
  * `X` is a cipher mark:
    * `C` is for Caesar cipher (with shift 1)
    * `A` is for Atbash cipher
    * `R` is for ROT-8 cipher
  * `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
    * `1` is for encoding
    * `0` is for decoding
2.  **-i, --input**: a path to input file
3.  **-o, --output**: a path to output file

### Examples
- node src/index -c "C1-C1-R0-A" -i "./text/input.txt" -o "./text/output.txt"
- node src/index -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./text/input.txt" -o "./text/output.txt"
- node src/index -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./text/input.txt" -o "./text/output.txt"
- node src/index -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./text/input.txt" -o "./text/output.txt"
