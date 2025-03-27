# Adding New Switch Models to the Application

Follow these steps to add new switch models to the application and ensure they are displayed:

## 1. Update the `switches` Array
- Open the file `/src/App.tsx`.
- Locate the `switches` array at the top of the file.
- Add a new object to the array with the following properties:
  - `id`: A unique identifier for the switch (e.g., 7, 8, etc.).
  - `name`: The name of the switch model.
  - `portCount`: The number of ports (e.g., "24", "48").
  - `portSpeed`: The speed of the ports (e.g., "10M-1G", "1G/2.5G/5G/10G").
  - `uplinks`: The uplink configuration (e.g., "4x 25G").
  - `poe`: The PoE capabilities (e.g., "30W per port").
  - `datasheet`: A URL to the datasheet for the switch.
  - `zeroTrust`: A boolean indicating if the switch supports Zero Trust.
  - `stacking`: A boolean indicating if the switch supports stacking.
  - `macsec`: A boolean indicating if the switch supports MACsec.

### Example:
```javascript
{
  id: 7,
  name: "Arista 720XP-12XY",
  portCount: "12",
  portSpeed: "1G/10G",
  uplinks: "2x 25G",
  poe: "30W per port",
  datasheet: "https://example.com/datasheet.pdf",
  zeroTrust: true,
  stacking: false,
  macsec: true
}
```

## 2. Verify Filter Options
- Check the `filterOptions` object in `/src/App.tsx`.
- Ensure the new switch's properties (e.g., `portCount`, `portSpeed`, etc.) are included in the corresponding filter arrays.
- If a new value is missing, add it to the appropriate array.

### Example:
```javascript
portCount: ["All", "24", "48", "96", "12"], // Add "12" if the new switch has 12 ports
```

## 3. Save and Test
- Save the changes to `/src/App.tsx`.
- Run the application using `npm run dev` or `yarn dev`.
- Verify that the new switch model appears in the grid and can be filtered using the updated filter options.

## 4. Optional: Styling or Additional Features
- If needed, update the styling or add new features to better display the new switch model.
- Modify the JSX in the `filteredSwitches.map` section to include any additional details.

By following these steps, you can successfully add new switch models to the application and ensure they are displayed correctly.
