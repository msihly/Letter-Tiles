### Check out the [Letter Tiles web application](https://msihly.github.io/letter-tiles), an educational tool for teachers and parents of children studying phonics.

---
&nbsp;

# Changelog
## Version 0.2.0 &nbsp;-&nbsp; (2020-11-19)
* Added `FloatingMenu` component
    * Circle buttons toggle settings or open settings modals
    * Hover over buttons for explanation of functionality
    * Added "Delete All" button
    * Added "Eraser Mode" button
        * Click individual tiles in eraser mode to delete them
    * Added "Snap to Grid" button
        * Tiles will snap to an invisible simulated grid on drop
    * Added "Elkonin Boxes" button
        * Displays an 5-box-wide Elkonin overlay on the tile container for early education phonics
        * Enables and navigates to the "Elkonin" tiles tab, which contains 6 blank tiles of different colors
    * Added "Uppercase" button
    * Added "Color Settings" button
        * Select from preset themes or customize individual elements in the Page and Tiles tabs using HSL sliders
        * Settings saved in localStorage
        * HSL sliders will override aspects of themes
* Added `SideScroller` component for dynamic width horizontal containers
    * `SideScroller` integrated into `Tabs` component
* `Tile` component updated
    * Fixed drop position algorithim
    * Classes and inline-styles are now embedded into a tile on drop (prevents overwriting when changing source tile colors from the Color Settings menu)
* Tile character sets extracted from `TileBar` component
    * Converted to `Map` of arrays instead of objects, which allows for arbitrary separations instead of just "left" and "right"
    * Label attribute removed in favor of using the `Map` key in combination with the `entries()` method instead of the `values()` method for iteration
* SVGs converted from `img` tags to inline SVG React components for proper customization
    * Now exported from media folder as both direct links to the SVG and React component versions (signified by the SVG suffix) for nuanced use where appropriate
* Added custom hooks file in `utils` folder

## Version 0.1.0 &nbsp;-&nbsp; (2020-11-09)
* Initial commit