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


## Version 0.1.0 &nbsp;-&nbsp; (2020-11-09)
* Initial commit