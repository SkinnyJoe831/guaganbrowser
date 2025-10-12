# SynthAi Converter
This script converts your HD entry CSVs into enriched JSON/CSV with Yi Jing binary, waveform params, and a grammar-driven sentence per dimension.

## Run
```bash
python synthai_converter.py --in "synthai_entries_template (1).csv" "synthai_entries_template (2).csv" --out synthai_converted_output
```
Outputs:
- `synthai_converted_output.json`
- `synthai_converted_output.csv`

Notes:
- Yi Jing mapping currently includes a minimal set; unknown gates fall back to a 6-bit binary of gate%64. Replace `HEXAGRAM_BIN` with your canonical 1..64 mapping when ready.
- Center names are normalized (e.g., `G\n \nCenter` → `G`). Edit `CENTER_NORMALIZATION` to expand.
- Sentences draw from your uploaded grammar files if present.
