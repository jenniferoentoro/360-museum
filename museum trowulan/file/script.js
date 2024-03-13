(function(){
    var script = {
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer"
 ],
 "scrollBarVisible": "rollOver",
 "start": "this.init()",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "definitions": [{
 "initialPosition": {
  "yaw": 7.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1412D0D6_9F75_8442_418E_85595AC1A577"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "67",
 "hfovMin": "150%",
 "id": "panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E",
 "overlays": [
  "this.overlay_CC07394E_9FD7_8442_41E2_DC6AE17580B8",
  "this.overlay_CB9CAF27_9FD5_7DC1_41C1_06522E8B6272",
  "this.overlay_C40D341C_9FB5_83C7_41DE_DD95DDBD8E6F",
  "this.overlay_C13E4FC0_9FB2_BCBE_41E1_4FFB84F859D6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -83.54,
   "class": "AdjacentPanorama",
   "backwardYaw": 53.05,
   "panorama": "this.panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1",
   "distance": 1
  },
  {
   "yaw": 5.07,
   "class": "AdjacentPanorama",
   "backwardYaw": 114.27,
   "panorama": "this.panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64",
   "distance": 1
  },
  {
   "yaw": 101.37,
   "class": "AdjacentPanorama",
   "backwardYaw": 63.48,
   "panorama": "this.panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4",
   "distance": 1
  },
  {
   "yaw": -165.9,
   "class": "AdjacentPanorama",
   "backwardYaw": -7.49,
   "panorama": "this.panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 132.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_180ADE01_9F75_9FBE_41C9_7746CF06AB82"
},
{
 "initialPosition": {
  "yaw": 35.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12FAC1A2_9F75_84C3_41E2_8C3F6EC71DE8"
},
{
 "initialPosition": {
  "yaw": 99.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_184C7DD7_9F75_9C42_41DF_F3B1CE6DE376"
},
{
 "initialPosition": {
  "yaw": -9.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_15EFEF82_9F75_9CC2_41DB_A095C0922964"
},
{
 "initialPosition": {
  "yaw": 10.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16706F22_9F75_9DC2_41C1_27B67C1EFE78"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_camera"
},
{
 "initialPosition": {
  "yaw": 16.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1A4D1C72_9F75_9C42_41E0_C274113FB7DF"
},
{
 "initialPosition": {
  "yaw": -12.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1509901D_9F75_83C1_41BD_1D9081C201C8"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "masukKanan4",
 "hfovMin": "150%",
 "id": "panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6",
 "overlays": [
  "this.overlay_8E8277FD_9F53_8C41_41D0_F0ABC63479FA",
  "this.overlay_8D7A83A4_9F52_84C6_41D9_C06E18A8AC1D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 12.96,
   "class": "AdjacentPanorama",
   "backwardYaw": 73.57,
   "panorama": "this.panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D",
   "distance": 1
  },
  {
   "yaw": -54.85,
   "class": "AdjacentPanorama",
   "backwardYaw": -130.14,
   "panorama": "this.panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "76",
 "hfovMin": "150%",
 "id": "panorama_D5CD106C_9FDE_8446_41DC_15020D28732C",
 "overlays": [
  "this.overlay_FB6AA5CA_9FB6_8C42_41E3_9F310386EEE7",
  "this.overlay_FA18E32B_9FB5_85C2_41D2_3F0FD6479098",
  "this.overlay_FB7E9D8C_9FB3_9CC6_41C8_50492B97EE21"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -80.66,
   "class": "AdjacentPanorama",
   "backwardYaw": 94.5,
   "panorama": "this.panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42",
   "distance": 1
  },
  {
   "yaw": 71.51,
   "class": "AdjacentPanorama",
   "backwardYaw": 58.61,
   "panorama": "this.panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "depan3",
 "hfovMin": "150%",
 "id": "panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2",
 "overlays": [
  "this.overlay_913959B0_9EE5_89E6_41C7_57BA25B2FF73",
  "this.overlay_8E722671_9E1D_FB67_41D2_367CE8435DEA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -6.26,
   "class": "AdjacentPanorama",
   "backwardYaw": -6.6,
   "panorama": "this.panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785",
   "distance": 1
  },
  {
   "yaw": -100.22,
   "class": "AdjacentPanorama",
   "backwardYaw": -6.8,
   "panorama": "this.panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 61.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1A3B3C93_9F75_9CC2_41A2_B2C2AF11CD1A"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "75",
 "hfovMin": "150%",
 "id": "panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C",
 "overlays": [
  "this.overlay_C432C825_9FB3_83C6_41C2_8622ED43E454",
  "this.overlay_C04918DD_9FBE_8446_41CD_976CF5D6AA09",
  "this.overlay_C0E32679_9FBD_8C4E_41D5_6B3D43758138",
  "this.overlay_FCED455D_9FB2_8C46_41A8_85647165860A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 156.14,
   "class": "AdjacentPanorama",
   "backwardYaw": -62.19,
   "panorama": "this.panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6",
   "distance": 1
  },
  {
   "yaw": -112.64,
   "class": "AdjacentPanorama",
   "backwardYaw": -163.02,
   "panorama": "this.panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3",
   "distance": 1
  },
  {
   "yaw": 95.26,
   "class": "AdjacentPanorama",
   "backwardYaw": -109,
   "panorama": "this.panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6",
   "distance": 1
  },
  {
   "yaw": -7.49,
   "class": "AdjacentPanorama",
   "backwardYaw": -165.9,
   "panorama": "this.panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 67.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_15AA4FB1_9F75_9CDE_41BD_68F721BBFA05"
},
{
 "initialPosition": {
  "yaw": -19.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C3F1B15_9F75_85C6_41DA_60485B5D7774"
},
{
 "initialPosition": {
  "yaw": -24.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1487A073_9F75_8442_41E3_16EC298E6FCE"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_camera"
},
{
 "initialPosition": {
  "yaw": -101.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_18BE1DA4_9F75_9CC6_41E2_363C4EE016EF"
},
{
 "initialPosition": {
  "yaw": 14.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1A2DEC88_9F75_9CCE_41DC_FAB8C8907510"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "50",
 "hfovMin": "150%",
 "id": "panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36",
 "overlays": [
  "this.overlay_AA50AE74_9FD7_9C46_41CD_623C494CECD9",
  "this.overlay_AA8CDC8E_9FD2_BCC2_41E2_25524478D240"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -29.52,
   "class": "AdjacentPanorama",
   "backwardYaw": 168.63,
   "panorama": "this.panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61",
   "distance": 1
  },
  {
   "yaw": 170.21,
   "class": "AdjacentPanorama",
   "backwardYaw": -20.87,
   "panorama": "this.panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 114.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_188F4DAE_9F75_9CC2_41D5_4A31E9AB14A2"
},
{
 "initialPosition": {
  "yaw": -85.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17554E8E_9F75_9CC2_41DE_BB7B95F52028"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "48",
 "hfovMin": "150%",
 "id": "panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E",
 "overlays": [
  "this.overlay_ACE9D1A5_9FD5_84C6_41D5_176EB6BC8C00",
  "this.overlay_AB99C38D_9FD6_84C6_41E2_FF7A1706BC6A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -20.87,
   "class": "AdjacentPanorama",
   "backwardYaw": 170.21,
   "panorama": "this.panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36",
   "distance": 1
  },
  {
   "yaw": 161.9,
   "class": "AdjacentPanorama",
   "backwardYaw": -68.3,
   "panorama": "this.panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_camera"
},
{
 "initialPosition": {
  "yaw": 111.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_15FFDF8D_9F75_9CC6_41B5_BEE5014C30E4"
},
{
 "initialPosition": {
  "yaw": 81.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17C9CE2E_9F75_9FC2_41DC_A738F6C3C029"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "46",
 "hfovMin": "150%",
 "id": "panorama_AE9092FC_9FD2_8446_41E0_29143638D68B",
 "overlays": [
  "this.overlay_AF25D7EA_9FDF_8C42_41BF_724FE4BEE503",
  "this.overlay_AEA159FF_9FD2_8442_41DF_7093E5DD354D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -167.07,
   "class": "AdjacentPanorama",
   "backwardYaw": 115.58,
   "panorama": "this.panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2",
   "distance": 1
  },
  {
   "yaw": -10.51,
   "class": "AdjacentPanorama",
   "backwardYaw": 113.86,
   "panorama": "this.panorama_91927E47_9E1C_8AAA_41DC_163183D563B1",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 94.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16415F2E_9F75_9DC2_41D4_AFB3BBD2B81C"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_camera"
},
{
 "initialPosition": {
  "yaw": -106.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_140330CB_9F75_8442_41A2_F31BE25AC558"
},
{
 "initialPosition": {
  "yaw": 91.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_11D55264_9F75_8446_41DC_5093D2CE0526"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "51",
 "hfovMin": "150%",
 "id": "panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61",
 "overlays": [
  "this.overlay_AA814AC7_9FD3_8442_41E0_A526FEE7300B",
  "this.overlay_A8683C95_9FCE_9CC6_41DC_7E57C1B4FF88",
  "this.overlay_A91B1E74_9FCF_7C46_41B1_A3BD2402808D",
  "this.overlay_A71B872F_9FCF_8DC2_41E3_D6F02F5D3842"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -65.28,
   "class": "AdjacentPanorama",
   "backwardYaw": -23.28,
   "panorama": "this.panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64",
   "distance": 1
  },
  {
   "yaw": 58.61,
   "class": "AdjacentPanorama",
   "backwardYaw": 71.51,
   "panorama": "this.panorama_D5CD106C_9FDE_8446_41DC_15020D28732C",
   "distance": 1
  },
  {
   "yaw": 168.63,
   "class": "AdjacentPanorama",
   "backwardYaw": -29.52,
   "panorama": "this.panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36",
   "distance": 1
  },
  {
   "yaw": -3.3,
   "class": "AdjacentPanorama",
   "backwardYaw": 118.05,
   "panorama": "this.panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -22.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_159ACFD1_9F75_9C5E_41D7_CB1150B4F626"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "55",
 "hfovMin": "150%",
 "id": "panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D",
 "overlays": [
  "this.overlay_DFDB8CB5_9FF5_BCC6_41C0_9172A815E2E9",
  "this.overlay_A5D122EB_9FF2_8442_41E2_55DE8CFCBF45",
  "this.overlay_A18B3DD4_9FF2_BC46_41DC_F433EC6F1B28",
  "this.overlay_DA194D27_9FCE_BDC2_41D7_015516371863"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -101.59,
   "class": "AdjacentPanorama",
   "backwardYaw": -96.31,
   "panorama": "this.panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293",
   "distance": 1
  },
  {
   "yaw": 78.58,
   "class": "AdjacentPanorama",
   "backwardYaw": -86.15,
   "panorama": "this.panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5",
   "distance": 1
  },
  {
   "yaw": -7.08,
   "class": "AdjacentPanorama",
   "backwardYaw": -91.09,
   "panorama": "this.panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520",
   "distance": 1
  },
  {
   "yaw": 159.57,
   "class": "AdjacentPanorama",
   "backwardYaw": 167.26,
   "panorama": "this.panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 71.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_181B0E0D_9F75_9FC6_41D6_34EA3BE3AF13"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "64",
 "hfovMin": "150%",
 "id": "panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F",
 "overlays": [
  "this.overlay_D6DB90F9_9FD6_844E_41D2_AAE3A0325518",
  "this.overlay_D3D1F060_9FD5_847E_41C4_EEA4B9772499"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 11.04,
   "class": "AdjacentPanorama",
   "backwardYaw": 171.72,
   "panorama": "this.panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64",
   "distance": 1
  },
  {
   "yaw": -169.06,
   "class": "AdjacentPanorama",
   "backwardYaw": 173.71,
   "panorama": "this.panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "66",
 "hfovMin": "150%",
 "id": "panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64",
 "overlays": [
  "this.overlay_D3C41217_9FD3_87C2_41E1_71B776985425",
  "this.overlay_D274B413_9FD5_83C2_41E0_393B098A21E1",
  "this.overlay_D1CDEA15_9FD6_87C6_41B0_223F4DFBE469"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4"
  },
  {
   "yaw": -23.28,
   "class": "AdjacentPanorama",
   "backwardYaw": -65.28,
   "panorama": "this.panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61",
   "distance": 1
  },
  {
   "yaw": 114.27,
   "class": "AdjacentPanorama",
   "backwardYaw": 5.07,
   "panorama": "this.panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_camera"
},
{
 "initialPosition": {
  "yaw": -120.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_14B7B068_9F75_844E_41C1_5CCF0399F54E"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "depanPintuDepan",
 "hfovMin": "150%",
 "id": "panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531",
 "overlays": [
  "this.overlay_91697C43_9E1F_8EAB_41C5_D567439EC541",
  "this.overlay_91389EB9_9E1D_8BE7_41DD_2E2C405BA849"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -6.8,
   "class": "AdjacentPanorama",
   "backwardYaw": -100.22,
   "panorama": "this.panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2",
   "distance": 1
  },
  {
   "yaw": 145.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -71.05,
   "panorama": "this.panorama_91927E47_9E1C_8AAA_41DC_163183D563B1",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 16.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13D17103_9F75_85C2_41E3_1BE0FEB77CC5"
},
{
 "initialPosition": {
  "yaw": 65.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1A1A8CA8_9F75_9CCE_41CD_E5B4EEBF5888"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "20",
 "hfovMin": "150%",
 "id": "panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3",
 "overlays": [
  "this.overlay_890BA84A_9F76_8442_41DA_AFB96AF29222",
  "this.overlay_8998493A_9F75_85C2_41D8_63A7B3C8CE6C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -28.56,
   "class": "AdjacentPanorama",
   "backwardYaw": -10.17,
   "panorama": "this.panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444",
   "distance": 1
  },
  {
   "yaw": 70.34,
   "class": "AdjacentPanorama",
   "backwardYaw": 138.98,
   "panorama": "this.panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "43",
 "hfovMin": "150%",
 "id": "panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B",
 "overlays": [
  "this.overlay_B23DBBC1_9FCE_84BE_41D4_4D4D914A988E",
  "this.overlay_B25A13AD_9FCD_84C6_41DC_BEC1E167A60D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -94.45,
   "class": "AdjacentPanorama",
   "backwardYaw": 76.66,
   "panorama": "this.panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05",
   "distance": 1
  },
  {
   "yaw": 84,
   "class": "AdjacentPanorama",
   "backwardYaw": -100.7,
   "panorama": "this.panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 173.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_182D1DEC_9F75_9C46_41C0_FBE4CF65EAAA"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "30",
 "hfovMin": "150%",
 "id": "panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC",
 "overlays": [
  "this.overlay_807CE8CC_9F53_8446_41DC_FE93318F23A7",
  "this.overlay_80079819_9F52_83CE_41E2_BF36E9CCD384"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 74.53,
   "class": "AdjacentPanorama",
   "backwardYaw": 77.21,
   "panorama": "this.panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A",
   "distance": 1
  },
  {
   "yaw": -110.86,
   "class": "AdjacentPanorama",
   "backwardYaw": -110.45,
   "panorama": "this.panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 170.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_158DCFC7_9F75_9C42_41D7_CD17AE0F55A6"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "masukKanan5",
 "hfovMin": "150%",
 "id": "panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E",
 "overlays": [
  "this.overlay_8E06EAA2_9F5D_84C2_41E3_2A7A2C15C195",
  "this.overlay_8E509A1A_9F52_87C2_41D8_AAF3F47A8FA5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 76.31,
   "class": "AdjacentPanorama",
   "backwardYaw": -131.79,
   "panorama": "this.panorama_916C0B01_9F55_85BE_41DB_67A2726334FF",
   "distance": 1
  },
  {
   "yaw": -130.14,
   "class": "AdjacentPanorama",
   "backwardYaw": -54.85,
   "panorama": "this.panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 48.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12CBB1AD_9F75_84C6_41E0_4BA65E948F82"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "33",
 "hfovMin": "150%",
 "id": "panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149",
 "overlays": [
  "this.overlay_BEA8605E_9FB7_8442_41C7_6B0674CA1173",
  "this.overlay_BDF21D07_9FB5_7DC2_41C3_F7D29936FB26",
  "this.overlay_BE66C684_9FB2_8CC6_41BF_AF627530F6AD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -98.85,
   "class": "AdjacentPanorama",
   "backwardYaw": 4.18,
   "panorama": "this.panorama_8DC16922_9F72_85C2_41B5_473076A000E6",
   "distance": 1
  },
  {
   "yaw": 0.68,
   "class": "AdjacentPanorama",
   "backwardYaw": 115.3,
   "panorama": "this.panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1",
   "distance": 1
  },
  {
   "yaw": 111.39,
   "class": "AdjacentPanorama",
   "backwardYaw": 125.73,
   "panorama": "this.panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -22.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16B06EF6_9F75_9C42_41BB_1E5F91AD37D4"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC09E63_9F72_9C42_41D4_483C11411846_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC09E63_9F72_9C42_41D4_483C11411846_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC09E63_9F72_9C42_41D4_483C11411846_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC09E63_9F72_9C42_41D4_483C11411846_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC09E63_9F72_9C42_41D4_483C11411846_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC09E63_9F72_9C42_41D4_483C11411846_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC09E63_9F72_9C42_41D4_483C11411846_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC09E63_9F72_9C42_41D4_483C11411846_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC09E63_9F72_9C42_41D4_483C11411846_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC09E63_9F72_9C42_41D4_483C11411846_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC09E63_9F72_9C42_41D4_483C11411846_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC09E63_9F72_9C42_41D4_483C11411846_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC09E63_9F72_9C42_41D4_483C11411846_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "28",
 "hfovMin": "150%",
 "id": "panorama_8DC09E63_9F72_9C42_41D4_483C11411846",
 "overlays": [
  "this.overlay_82F0048D_9F53_8CC6_41D8_4F1C072F441F",
  "this.overlay_81038898_9F52_84CE_41DF_5A4EB4F0671A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 66.91,
   "class": "AdjacentPanorama",
   "backwardYaw": -89.03,
   "panorama": "this.panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A",
   "distance": 1
  },
  {
   "yaw": -105.5,
   "class": "AdjacentPanorama",
   "backwardYaw": -134.54,
   "panorama": "this.panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC09E63_9F72_9C42_41D4_483C11411846_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 45.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1631FF51_9F75_9C5E_41E0_D20B45B2EC3B"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_camera"
},
{
 "initialPosition": {
  "yaw": -142.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_156A7FDC_9F75_9C46_41B4_A2A64507AB85"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_camera"
},
{
 "initialPosition": {
  "yaw": 141.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_14D67053_9F75_8442_41D9_50250D80B3A4"
},
{
 "initialPosition": {
  "yaw": -103.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17D96E39_9F75_9FCE_4197_00926B24F1BD"
},
{
 "initialPosition": {
  "yaw": -130.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C0EEB20_9F75_85FE_4197_84D6704869FB"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "54",
 "hfovMin": "150%",
 "id": "panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520",
 "overlays": [
  "this.overlay_A6F4414B_9FF6_8442_41E3_CE6E32DEF0B3",
  "this.overlay_A763C4D6_9FF7_8C42_41D6_9402646ED2A7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -91.09,
   "class": "AdjacentPanorama",
   "backwardYaw": -7.08,
   "panorama": "this.panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D",
   "distance": 1
  },
  {
   "yaw": 90.66,
   "class": "AdjacentPanorama",
   "backwardYaw": -39.41,
   "panorama": "this.panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -84.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_14C70049_9F75_844E_41C4_BC70D4CF1293"
},
{
 "initialPosition": {
  "yaw": 83.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_157BBFE7_9F75_9C42_41D0_DE7F0251108F"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "depan1",
 "hfovMin": "150%",
 "id": "panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6",
 "overlays": [
  "this.overlay_9182E052_9EEC_96A5_41C1_2B6EA1EE184F",
  "this.overlay_91D8A31C_9EEC_9ADE_41D7_9C216F33B92D",
  "this.overlay_91A20356_9EEC_9AAA_41B3_64D792CC54B6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -7.63,
   "class": "AdjacentPanorama",
   "backwardYaw": -33.44,
   "panorama": "this.panorama_92881847_9EE4_96AB_41C8_82F990447AB3",
   "distance": 1
  },
  {
   "yaw": 59.09,
   "class": "AdjacentPanorama",
   "backwardYaw": 169.71,
   "panorama": "this.panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B",
   "distance": 1
  },
  {
   "yaw": 172.48,
   "class": "AdjacentPanorama",
   "backwardYaw": 167.81,
   "panorama": "this.panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -54.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_161E9F75_9F75_9C46_41D9_768968AFBAAC"
},
{
 "initialPosition": {
  "yaw": 12.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_14E9C034_9F75_83C7_41D3_2641C02CE35E"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_camera"
},
{
 "initialPosition": {
  "yaw": 128.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C53EAF4_9F75_8446_41D4_B20A2152F8FC"
},
{
 "initialPosition": {
  "yaw": -94.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13BE8123_9F75_85C2_41D7_D50548C60D50"
},
{
 "initialPosition": {
  "yaw": -10.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1AF33C05_9F75_83C6_41C9_4AABDAE1205B"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "19",
 "hfovMin": "150%",
 "id": "panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8",
 "overlays": [
  "this.overlay_8A06EEAA_9F7D_9CC2_41DC_9DFD4A14D829",
  "this.overlay_887FFF4B_9F72_FC41_41DC_08B31D1EC85B",
  "this.overlay_B73F638A_9FB5_84C2_41D2_DD7112753BE8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 138.98,
   "class": "AdjacentPanorama",
   "backwardYaw": 70.34,
   "panorama": "this.panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3",
   "distance": 1
  },
  {
   "yaw": -36.8,
   "class": "AdjacentPanorama",
   "backwardYaw": 81.46,
   "panorama": "this.panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA",
   "distance": 1
  },
  {
   "yaw": 54.08,
   "class": "AdjacentPanorama",
   "backwardYaw": 163.07,
   "panorama": "this.panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 179.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1494E07E_9F75_8442_41E0_85895E8D1C8D"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_camera"
},
{
 "initialPosition": {
  "yaw": -7.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1B05CBE4_9F75_8446_4194_6E82DA173146"
},
{
 "initialPosition": {
  "yaw": 173.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16F27ECD_9F75_9C46_41E3_8402AC8CCB2A"
},
{
 "initialPosition": {
  "yaw": 10.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17673E6E_9F75_9C42_41C5_F487D14BC3E4"
},
{
 "initialPosition": {
  "yaw": 90.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1621AF45_9F75_9C46_41C9_34E909698BD6"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC16922_9F72_85C2_41B5_473076A000E6_camera"
},
{
 "initialPosition": {
  "yaw": -14.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12AB31C4_9F75_8446_41C3_796F7226D755"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "80",
 "hfovMin": "150%",
 "id": "panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672",
 "overlays": [
  "this.overlay_F657A020_9F52_83FE_41D0_9DBA149C2721"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 157.1,
   "class": "AdjacentPanorama",
   "backwardYaw": -61.44,
   "panorama": "this.panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -64.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_160ECF69_9F75_9C4E_41E3_CC485EDD8240"
},
{
 "initialPosition": {
  "yaw": 79.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D681A14_9F75_87C6_41B1_4C5D4DD3EDBF"
},
{
 "initialPosition": {
  "yaw": -106.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_139F3138_9F75_85CE_41E3_303340B99895"
},
{
 "initialPosition": {
  "yaw": 127.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1B8BCB7E_9F75_8442_41D8_3082EEC3A081"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_camera"
},
{
 "initialPosition": {
  "yaw": 89.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_15BDEFBC_9F75_9CC6_41BB_587C71A907AB"
},
{
 "initialPosition": {
  "yaw": -21.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1391D12E_9F75_85C2_41DA_9C3542CD11CD"
},
{
 "initialPosition": {
  "yaw": 151.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1A6FFC5C_9F75_9C46_41D8_C71D2206B72B"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_camera"
},
{
 "initialPosition": {
  "yaw": 83.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_15589FFC_9F75_9C46_41E2_66EF3349FE10"
},
{
 "initialPosition": {
  "yaw": 10.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1BDA6B57_9F75_8442_41D9_B68A41E3C038"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "34",
 "hfovMin": "150%",
 "id": "panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1",
 "overlays": [
  "this.overlay_BDC0D572_9FB3_8C42_4195_709253C8BEDC",
  "this.overlay_BD568DC5_9FB2_9C46_41CB_9EDEB221CC8D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -49.7,
   "class": "AdjacentPanorama",
   "backwardYaw": -88.34,
   "panorama": "this.panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736",
   "distance": 1
  },
  {
   "yaw": 115.3,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.68,
   "panorama": "this.panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -101.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D7E7A2B_9F75_87C2_41D2_6C1F92D23D5B"
},
{
 "initialPosition": {
  "yaw": -42.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_130A5182_9F75_84C2_41E0_846A292E5EFC"
},
{
 "initialPosition": {
  "yaw": -101.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1477F094_9F75_84C6_41CA_62E23E24689D"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "82",
 "hfovMin": "150%",
 "id": "panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A",
 "overlays": [
  "this.overlay_F2167820_9F55_83FE_41E3_210A8416CE34",
  "this.overlay_EE00C54F_9F52_8C42_4138_D37A673EBE3A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -34.88,
   "class": "AdjacentPanorama",
   "backwardYaw": 12.14,
   "panorama": "this.panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C",
   "distance": 1
  },
  {
   "yaw": -144.08,
   "class": "AdjacentPanorama",
   "backwardYaw": 29.23,
   "panorama": "this.panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "masukKanan6",
 "hfovMin": "150%",
 "id": "panorama_916C0B01_9F55_85BE_41DB_67A2726334FF",
 "overlays": [
  "this.overlay_8FF402AD_9F5E_84C6_41D7_590DEDDE199B",
  "this.overlay_8FEC3C08_9F5E_83CE_41BD_8A1B3236B91D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 64.58,
   "class": "AdjacentPanorama",
   "backwardYaw": 18.32,
   "panorama": "this.panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575",
   "distance": 1
  },
  {
   "yaw": -131.79,
   "class": "AdjacentPanorama",
   "backwardYaw": 76.31,
   "panorama": "this.panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 173.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_14643089_9F75_84CE_41DF_C9D98F9E3BF1"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "58",
 "hfovMin": "150%",
 "id": "panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE",
 "overlays": [
  "this.overlay_A30A0012_9FF2_83C2_41C4_335C5CBA77DB",
  "this.overlay_A233A9EA_9FF3_8442_41DE_22C4FE9A1B61",
  "this.overlay_DE5ABFA4_9FF5_9CC6_41E0_A039C8786533"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 13.72,
   "class": "AdjacentPanorama",
   "backwardYaw": -112.99,
   "panorama": "this.panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E",
   "distance": 1
  },
  {
   "yaw": 148.66,
   "class": "AdjacentPanorama",
   "backwardYaw": -90.13,
   "panorama": "this.panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB",
   "distance": 1
  },
  {
   "yaw": -98.23,
   "class": "AdjacentPanorama",
   "backwardYaw": -9.21,
   "panorama": "this.panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 176.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16912F0D_9F75_9DC6_41E1_E90150B76D0A"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "depanGerbang",
 "hfovMin": "150%",
 "id": "panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B",
 "overlays": [
  "this.overlay_9304B54E_9EE4_9EBA_41BC_1CB672EEB3DB",
  "this.overlay_91AD0D7D_9EFB_895F_41A2_33DD143F92A4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -92.6,
   "class": "AdjacentPanorama",
   "backwardYaw": 149.96,
   "panorama": "this.panorama_92881847_9EE4_96AB_41C8_82F990447AB3",
   "distance": 1
  },
  {
   "yaw": 169.71,
   "class": "AdjacentPanorama",
   "backwardYaw": 59.09,
   "panorama": "this.panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 159.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_132DB16C_9F75_8446_4187_902A77658849"
},
{
 "initialPosition": {
  "yaw": -121.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1B477BB4_9F75_84C6_41C0_94B30D762747"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "31",
 "hfovMin": "150%",
 "id": "panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423",
 "overlays": [
  "this.overlay_BF52B94C_9F4D_8446_41DE_0DED26B411B6",
  "this.overlay_80CD2376_9F4E_8443_4191_B011FF56F4D5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -110.45,
   "class": "AdjacentPanorama",
   "backwardYaw": -110.86,
   "panorama": "this.panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC",
   "distance": 1
  },
  {
   "yaw": 49.75,
   "class": "AdjacentPanorama",
   "backwardYaw": -22.52,
   "panorama": "this.panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 93.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_15286007_9F75_83C2_41E3_4E0B54AB99AD"
},
{
 "initialPosition": {
  "yaw": 57.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1660CF18_9F75_9DCE_41D2_FA4D971CDCB2"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_camera"
},
{
 "initialPosition": {
  "yaw": 169.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1CB41AAB_9F75_84C2_41D4_3F257380C940"
},
{
 "initialPosition": {
  "yaw": 79.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17A68E44_9F75_9C46_41DB_583E86D2CAE5"
},
{
 "initialPosition": {
  "yaw": -170.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1CA67AA1_9F75_84FE_41D8_A1ADEEBF1184"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_camera"
},
{
 "initialPosition": {
  "yaw": -167.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C620AD0_9F75_845E_41BF_B2825A751D44"
},
{
 "initialPosition": {
  "yaw": -95.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_15DCAFA6_9F75_9CC2_4154_69081FE1B2C6"
},
{
 "initialPosition": {
  "yaw": 169.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1934DD45_9F75_9C41_41DC_CF176F4FDD6B"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "32",
 "hfovMin": "150%",
 "id": "panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF",
 "overlays": [
  "this.overlay_BE735E47_9F4F_BC42_41D9_561F0165D5A6",
  "this.overlay_B90A0902_9FB5_85C2_41D8_17EE16B58C0D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 72.2,
   "class": "AdjacentPanorama",
   "backwardYaw": 160.12,
   "panorama": "this.panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5",
   "distance": 1
  },
  {
   "yaw": -22.52,
   "class": "AdjacentPanorama",
   "backwardYaw": 49.75,
   "panorama": "this.panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_camera"
},
{
 "initialPosition": {
  "yaw": -105.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_134CC157_9F75_8442_41DC_B1036118DD97"
},
{
 "initialPosition": {
  "yaw": 74.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D3D0A56_9F75_8443_41DA_9EEB34E9D583"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "68",
 "hfovMin": "150%",
 "id": "panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1",
 "overlays": [
  "this.overlay_CEEE58A3_9FD5_84C2_41C6_8026DF4B7BCB",
  "this.overlay_CD0F1B10_9FD3_85DE_41E0_B1A12A867D68"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 137.06,
   "class": "AdjacentPanorama",
   "backwardYaw": 109.33,
   "panorama": "this.panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3",
   "distance": 1
  },
  {
   "yaw": 53.05,
   "class": "AdjacentPanorama",
   "backwardYaw": -83.54,
   "panorama": "this.panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_camera"
},
{
 "initialPosition": {
  "yaw": 139.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_14F9C03E_9F75_83C2_41E0_E78B65D812CF"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "44",
 "hfovMin": "150%",
 "id": "panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05",
 "overlays": [
  "this.overlay_B1BFD592_9FD2_8CC2_41C2_4C12B0597498",
  "this.overlay_B147C4D3_9FD3_8C42_41E2_648AA2FE0B4B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -106.95,
   "class": "AdjacentPanorama",
   "backwardYaw": -96.86,
   "panorama": "this.panorama_8DC16922_9F72_85C2_41B5_473076A000E6",
   "distance": 1
  },
  {
   "yaw": 76.66,
   "class": "AdjacentPanorama",
   "backwardYaw": -94.45,
   "panorama": "this.panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_camera"
},
{
 "initialPosition": {
  "yaw": -20.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1CC65A8C_9F75_84C6_41DD_334B26839216"
},
{
 "initialPosition": {
  "yaw": 67.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_131DF18D_9F75_84C6_41BD_79C3812D7175"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "85",
 "hfovMin": "150%",
 "id": "panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC",
 "overlays": [
  "this.overlay_ED69354F_9F5E_8C42_41E2_EB67455D509F",
  "this.overlay_E9CF66D7_9F5D_8C42_41B3_92870DC87759"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 167.33,
   "class": "AdjacentPanorama",
   "backwardYaw": -101.52,
   "panorama": "this.panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "35",
 "hfovMin": "150%",
 "id": "panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736",
 "overlays": [
  "this.overlay_BCFE514C_9FBD_8446_41CD_6C2A635BA5FC",
  "this.overlay_BACC2A9E_9FBE_84C2_4168_BA3E66C7CF62"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 94.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -92.46,
   "panorama": "this.panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A",
   "distance": 1
  },
  {
   "yaw": -88.34,
   "class": "AdjacentPanorama",
   "backwardYaw": -49.7,
   "panorama": "this.panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_camera"
},
{
 "initialPosition": {
  "yaw": -116.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12366225_9F75_87C6_41CB_7B6CD54F434C"
},
{
 "initialPosition": {
  "yaw": -85.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1B777BA6_9F75_84C2_4197_F92334B5689A"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "57",
 "hfovMin": "150%",
 "id": "panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E",
 "overlays": [
  "this.overlay_A2871C04_9FF2_83C6_41DF_C8A17A171932",
  "this.overlay_A3EF68BE_9FFE_84C2_41DA_50405AE5A219"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -12.02,
   "class": "AdjacentPanorama",
   "backwardYaw": 161.97,
   "panorama": "this.panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5",
   "distance": 1
  },
  {
   "yaw": -112.99,
   "class": "AdjacentPanorama",
   "backwardYaw": 13.72,
   "panorama": "this.panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 91.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17740E79_9F75_9C4E_41DE_5F466CAEDCA6"
},
{
 "initialPosition": {
  "yaw": -23.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17867E58_9F75_9C4E_41CF_3973AB13958A"
},
{
 "initialPosition": {
  "yaw": -68.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D0ACA60_9F75_847E_41C9_4020B77E8894"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_camera"
},
{
 "initialPosition": {
  "yaw": -70.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1422A0B6_9F75_84C2_41D3_92906C24BE5B"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_camera"
},
{
 "initialPosition": {
  "yaw": -30.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_14A6305E_9F75_8442_41E2_BAEBCF3A3443"
},
{
 "initialPosition": {
  "yaw": 87.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1AD11C1B_9F75_83C2_41E1_F7A3769372ED"
},
{
 "items": [
  {
   "media": "this.panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_camera"
  },
  {
   "media": "this.panorama_92881847_9EE4_96AB_41C8_82F990447AB3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_92881847_9EE4_96AB_41C8_82F990447AB3_camera"
  },
  {
   "media": "this.panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_camera"
  },
  {
   "media": "this.panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_camera"
  },
  {
   "media": "this.panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_camera"
  },
  {
   "media": "this.panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_camera"
  },
  {
   "media": "this.panorama_91927E47_9E1C_8AAA_41DC_163183D563B1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_camera"
  },
  {
   "media": "this.panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_camera"
  },
  {
   "media": "this.panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_camera"
  },
  {
   "media": "this.panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E_camera"
  },
  {
   "media": "this.panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_camera"
  },
  {
   "media": "this.panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_camera"
  },
  {
   "media": "this.panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_camera"
  },
  {
   "media": "this.panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_camera"
  },
  {
   "media": "this.panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_camera"
  },
  {
   "media": "this.panorama_916C0B01_9F55_85BE_41DB_67A2726334FF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_camera"
  },
  {
   "media": "this.panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_camera"
  },
  {
   "media": "this.panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_camera"
  },
  {
   "media": "this.panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_camera"
  },
  {
   "media": "this.panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_camera"
  },
  {
   "media": "this.panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_camera"
  },
  {
   "media": "this.panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_camera"
  },
  {
   "media": "this.panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_camera"
  },
  {
   "media": "this.panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_camera"
  },
  {
   "media": "this.panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_camera"
  },
  {
   "media": "this.panorama_8DC09E63_9F72_9C42_41D4_483C11411846",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC09E63_9F72_9C42_41D4_483C11411846_camera"
  },
  {
   "media": "this.panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_camera"
  },
  {
   "media": "this.panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_camera"
  },
  {
   "media": "this.panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_camera"
  },
  {
   "media": "this.panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_camera"
  },
  {
   "media": "this.panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_camera"
  },
  {
   "media": "this.panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_camera"
  },
  {
   "media": "this.panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_camera"
  },
  {
   "media": "this.panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_camera"
  },
  {
   "media": "this.panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_camera"
  },
  {
   "media": "this.panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_camera"
  },
  {
   "media": "this.panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_camera"
  },
  {
   "media": "this.panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_camera"
  },
  {
   "media": "this.panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_camera"
  },
  {
   "media": "this.panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_camera"
  },
  {
   "media": "this.panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_camera"
  },
  {
   "media": "this.panorama_8DC16922_9F72_85C2_41B5_473076A000E6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC16922_9F72_85C2_41B5_473076A000E6_camera"
  },
  {
   "media": "this.panorama_AE9092FC_9FD2_8446_41E0_29143638D68B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_camera"
  },
  {
   "media": "this.panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_camera"
  },
  {
   "media": "this.panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_camera"
  },
  {
   "media": "this.panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_camera"
  },
  {
   "media": "this.panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_camera"
  },
  {
   "media": "this.panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_camera"
  },
  {
   "media": "this.panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_camera"
  },
  {
   "media": "this.panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_camera"
  },
  {
   "media": "this.panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_camera"
  },
  {
   "media": "this.panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_camera"
  },
  {
   "media": "this.panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 53)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_camera"
  },
  {
   "media": "this.panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 53, 54)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_camera"
  },
  {
   "media": "this.panorama_B0B2967D_9FD2_8C46_41D8_250940324901",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 54, 55)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0B2967D_9FD2_8C46_41D8_250940324901_camera"
  },
  {
   "media": "this.panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 55, 56)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_camera"
  },
  {
   "media": "this.panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 56, 57)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_camera"
  },
  {
   "media": "this.panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 57, 58)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_camera"
  },
  {
   "media": "this.panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 58, 59)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_camera"
  },
  {
   "media": "this.panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 59, 60)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C_camera"
  },
  {
   "media": "this.panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 60, 61)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_camera"
  },
  {
   "media": "this.panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 61, 62)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_camera"
  },
  {
   "media": "this.panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 62, 63)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_camera"
  },
  {
   "media": "this.panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 63, 64)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_camera"
  },
  {
   "media": "this.panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 64, 65)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_camera"
  },
  {
   "media": "this.panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 65, 66)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_camera"
  },
  {
   "media": "this.panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 66, 67)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_camera"
  },
  {
   "media": "this.panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 67, 68)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_camera"
  },
  {
   "media": "this.panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 68, 69)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_camera"
  },
  {
   "media": "this.panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 69, 70)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_camera"
  },
  {
   "media": "this.panorama_D5CD106C_9FDE_8446_41DC_15020D28732C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 70, 71)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_camera"
  },
  {
   "media": "this.panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 71, 72)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_camera"
  },
  {
   "media": "this.panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 72, 73)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_camera"
  },
  {
   "media": "this.panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 73, 74)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_camera"
  },
  {
   "media": "this.panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 74, 75)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672_camera"
  },
  {
   "media": "this.panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 75, 76)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_camera"
  },
  {
   "media": "this.panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 76, 77)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_camera"
  },
  {
   "media": "this.panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 77, 78)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_camera"
  },
  {
   "media": "this.panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 78, 79)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_camera"
  },
  {
   "media": "this.panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 79, 80)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_camera"
  },
  {
   "media": "this.panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 80, 81)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_camera"
  },
  {
   "media": "this.panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 81, 82)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_camera"
  },
  {
   "media": "this.panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 82, 83)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_camera"
  },
  {
   "media": "this.panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 83, 84)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_camera"
  },
  {
   "media": "this.panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 84, 85)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_camera"
  },
  {
   "media": "this.panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 85, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "depan2",
 "hfovMin": "150%",
 "id": "panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785",
 "overlays": [
  "this.overlay_8E899C44_9EE5_8EAE_41DD_94AD0089CE2A",
  "this.overlay_9142CD3E_9EE7_8EDA_41B8_F89341FD285F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -6.6,
   "class": "AdjacentPanorama",
   "backwardYaw": -6.26,
   "panorama": "this.panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2",
   "distance": 1
  },
  {
   "yaw": 167.81,
   "class": "AdjacentPanorama",
   "backwardYaw": 172.48,
   "panorama": "this.panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "42",
 "hfovMin": "150%",
 "id": "panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259",
 "overlays": [
  "this.overlay_B3934714_9FCF_8DC6_41D2_5BD2AC2CCC13",
  "this.overlay_B01AA3D2_9FCE_8442_41C5_819BE2935376"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 73.64,
   "class": "AdjacentPanorama",
   "backwardYaw": -137.83,
   "panorama": "this.panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74",
   "distance": 1
  },
  {
   "yaw": -100.7,
   "class": "AdjacentPanorama",
   "backwardYaw": 84,
   "panorama": "this.panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 81.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1CD65A96_9F75_84C2_41C0_AC63940C24DD"
},
{
 "initialPosition": {
  "yaw": 96.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_143200C1_9F75_84BE_41C1_5A59A8794D78"
},
{
 "initialPosition": {
  "yaw": -18.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C1F1B2B_9F75_85C2_41BC_B7F59B28EF7A"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "masukKanan3",
 "hfovMin": "150%",
 "id": "panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D",
 "overlays": [
  "this.overlay_8D68CE81_9F55_9CBE_41DA_5B17250D1318",
  "this.overlay_8C71F0ED_9F55_8446_41E3_706F949F62CB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -108.04,
   "class": "AdjacentPanorama",
   "backwardYaw": -142.43,
   "panorama": "this.panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6",
   "distance": 1
  },
  {
   "yaw": 73.57,
   "class": "AdjacentPanorama",
   "backwardYaw": 12.96,
   "panorama": "this.panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_92881847_9EE4_96AB_41C8_82F990447AB3_camera"
},
{
 "initialPosition": {
  "yaw": -106.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1268E1EF_9F75_8442_41D4_55295BB5656B"
},
{
 "initialPosition": {
  "yaw": 108.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D752A20_9F75_87FE_41C3_02C9963EEDA7"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "74",
 "hfovMin": "150%",
 "id": "panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4",
 "overlays": [
  "this.overlay_FD2D0ABD_9FB6_84C6_41D8_A4A8CA9897FD",
  "this.overlay_C4D27C69_9FB6_9C4E_4182_1CB8FBBC7D67"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -40.23,
   "class": "AdjacentPanorama",
   "backwardYaw": -19.98,
   "panorama": "this.panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6",
   "distance": 1
  },
  {
   "yaw": 63.48,
   "class": "AdjacentPanorama",
   "backwardYaw": 101.37,
   "panorama": "this.panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_camera"
},
{
 "initialPosition": {
  "yaw": 179.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1454E0AA_9F75_84C2_41B0_BDEE066CC6F3"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "27",
 "hfovMin": "150%",
 "id": "panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69",
 "overlays": [
  "this.overlay_830DC5B0_9F5D_8CDE_41C0_ED87E74B076D",
  "this.overlay_831DCE88_9F5F_9CCE_41E0_9C7D8BEC2DAF",
  "this.overlay_8251C8CD_9F52_8446_41D7_ECD9EC85905A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -134.54,
   "class": "AdjacentPanorama",
   "backwardYaw": -105.5,
   "panorama": "this.panorama_8DC09E63_9F72_9C42_41D4_483C11411846",
   "distance": 1
  },
  {
   "yaw": 125.73,
   "class": "AdjacentPanorama",
   "backwardYaw": 111.39,
   "panorama": "this.panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149",
   "distance": 1
  },
  {
   "yaw": -52.45,
   "class": "AdjacentPanorama",
   "backwardYaw": -9.96,
   "panorama": "this.panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_camera"
},
{
 "initialPosition": {
  "yaw": -166.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1BEC7B36_9F75_85C2_41DC_C4E7B8E9B582"
},
{
 "initialPosition": {
  "yaw": -11.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_135A1162_9F75_8442_41E0_F5CF219BA9C3"
},
{
 "initialPosition": {
  "yaw": -102.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1CE87A76_9F75_8442_41BD_5BF7E3909B0D"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "38",
 "hfovMin": "150%",
 "id": "panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5",
 "overlays": [
  "this.overlay_B95EF9E5_9FB3_8446_41D8_300715F8A478",
  "this.overlay_B99CFCD5_9FB2_BC46_41C9_901681A89C8D",
  "this.overlay_B9530C89_9FB6_9CCE_4190_52527B53BFFB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 160.12,
   "class": "AdjacentPanorama",
   "backwardYaw": 72.2,
   "panorama": "this.panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF",
   "distance": 1
  },
  {
   "yaw": -86.42,
   "class": "AdjacentPanorama",
   "backwardYaw": 85.31,
   "panorama": "this.panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A",
   "distance": 1
  },
  {
   "yaw": 73.78,
   "class": "AdjacentPanorama",
   "backwardYaw": 158.95,
   "panorama": "this.panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B0B2967D_9FD2_8C46_41D8_250940324901_camera"
},
{
 "initialPosition": {
  "yaw": 125.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12DB51B8_9F75_84CE_41E3_C7CF40EE3F64"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "23",
 "hfovMin": "150%",
 "id": "panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A",
 "overlays": [
  "this.overlay_8604242E_9F52_83C2_41DD_AA926E8F6FFA",
  "this.overlay_8558C219_9F55_87CE_41D9_7C3FF60FE50D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -163.16,
   "class": "AdjacentPanorama",
   "backwardYaw": 60.12,
   "panorama": "this.panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C",
   "distance": 1
  },
  {
   "yaw": 12.21,
   "class": "AdjacentPanorama",
   "backwardYaw": -139.69,
   "panorama": "this.panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 170.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D1AFA6B_9F75_8442_41DA_6D1DD945986D"
},
{
 "initialPosition": {
  "yaw": 88.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_153BF013_9F75_83C2_41C3_37FC80A01CB0"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "40",
 "hfovMin": "150%",
 "id": "panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67",
 "overlays": [
  "this.overlay_B6339300_9FB2_85BE_41CF_9A8CE5A7426C",
  "this.overlay_B5130597_9FCD_8CC2_41C9_A40C20A2D2EB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 74.94,
   "class": "AdjacentPanorama",
   "backwardYaw": -88.07,
   "panorama": "this.panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA",
   "distance": 1
  },
  {
   "yaw": -172.08,
   "class": "AdjacentPanorama",
   "backwardYaw": 32.73,
   "panorama": "this.panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -61.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_19D8ACD1_9F75_9C5E_4167_90961B433F2B"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "26",
 "hfovMin": "150%",
 "id": "panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571",
 "overlays": [
  "this.overlay_842A960E_9F53_8FC2_41C3_8BC83EB7A097",
  "this.overlay_8430864F_9F52_8C42_41A1_E1CFD6661C82"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 84.35,
   "class": "AdjacentPanorama",
   "backwardYaw": 33.62,
   "panorama": "this.panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9",
   "distance": 1
  },
  {
   "yaw": -9.96,
   "class": "AdjacentPanorama",
   "backwardYaw": -52.45,
   "panorama": "this.panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -109.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_11F7C24F_9F75_8442_41A5_36D5788040C2"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC16922_9F72_85C2_41B5_473076A000E6_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC16922_9F72_85C2_41B5_473076A000E6_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC16922_9F72_85C2_41B5_473076A000E6_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC16922_9F72_85C2_41B5_473076A000E6_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC16922_9F72_85C2_41B5_473076A000E6_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC16922_9F72_85C2_41B5_473076A000E6_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC16922_9F72_85C2_41B5_473076A000E6_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC16922_9F72_85C2_41B5_473076A000E6_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC16922_9F72_85C2_41B5_473076A000E6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC16922_9F72_85C2_41B5_473076A000E6_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC16922_9F72_85C2_41B5_473076A000E6_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC16922_9F72_85C2_41B5_473076A000E6_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC16922_9F72_85C2_41B5_473076A000E6_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "45",
 "hfovMin": "150%",
 "id": "panorama_8DC16922_9F72_85C2_41B5_473076A000E6",
 "overlays": [
  "this.overlay_B013ED0D_9FD2_9DC6_41CE_C137AA4F0FBC",
  "this.overlay_B0183BCD_9FD5_8446_41D5_BCA6DAB3497D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -96.86,
   "class": "AdjacentPanorama",
   "backwardYaw": -106.95,
   "panorama": "this.panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05",
   "distance": 1
  },
  {
   "yaw": 4.18,
   "class": "AdjacentPanorama",
   "backwardYaw": -98.85,
   "panorama": "this.panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC16922_9F72_85C2_41B5_473076A000E6_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "91",
 "hfovMin": "150%",
 "id": "panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E",
 "overlays": [
  "this.overlay_1D9F6FA2_9F4D_9CC2_41E1_6BC9177EBD3F",
  "this.overlay_E224E95F_9F4D_8442_41C3_65D4F9FCEF26"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -29.87,
   "class": "AdjacentPanorama",
   "backwardYaw": 157.1,
   "panorama": "this.panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB",
   "distance": 1
  },
  {
   "yaw": -118.68,
   "class": "AdjacentPanorama",
   "backwardYaw": 37.12,
   "panorama": "this.panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -177.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1A0ADC9D_9F75_9CC6_41DE_FB1357E24084"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "71",
 "hfovMin": "150%",
 "id": "panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6",
 "overlays": [
  "this.overlay_C5695344_9FCE_8446_41E1_8B650B3A9684",
  "this.overlay_CA7DFFFA_9FCD_9C42_41D4_F69B3E6801B7",
  "this.overlay_C07D390A_9FB2_85C2_41D0_4A97A953F429"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -149.43,
   "class": "AdjacentPanorama",
   "backwardYaw": -104.75,
   "panorama": "this.panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650",
   "distance": 1
  },
  {
   "yaw": -62.19,
   "class": "AdjacentPanorama",
   "backwardYaw": 156.14,
   "panorama": "this.panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C",
   "distance": 1
  },
  {
   "yaw": 15.5,
   "class": "AdjacentPanorama",
   "backwardYaw": -144.35,
   "panorama": "this.panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_camera"
},
{
 "initialPosition": {
  "yaw": -32.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13A1510E_9F75_85C2_41BE_3229E98EDDE9"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "65",
 "hfovMin": "150%",
 "id": "panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C",
 "overlays": [
  "this.overlay_D557E82E_9FD2_83C2_41DC_97CF589C94AF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 173.71,
   "class": "AdjacentPanorama",
   "backwardYaw": -169.06,
   "panorama": "this.panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 117.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1A7D4C67_9F75_9C42_41D3_D87059605B85"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_camera"
},
{
 "initialPosition": {
  "yaw": -115.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1445109E_9F75_84C2_41DA_5B6B4565139F"
},
{
 "initialPosition": {
  "yaw": 150.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_19C8ACC7_9F75_9C42_41D0_8D1C759B00C7"
},
{
 "initialPosition": {
  "yaw": -12.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1AC11C10_9F75_83DE_41E2_B007A35EE6E6"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_camera"
},
{
 "initialPosition": {
  "yaw": -112.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_11C7C259_9F75_844E_41B4_A8D05F6ACC82"
},
{
 "initialPosition": {
  "yaw": 30.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_185D9DE1_9F75_9C7E_41C7_39B40CADBCD3"
},
{
 "initialPosition": {
  "yaw": -31.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1B244BCC_9F75_8447_41D1_336789E565E2"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "18",
 "hfovMin": "150%",
 "id": "panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE",
 "overlays": [
  "this.overlay_8BF46A77_9F7F_8442_41E3_C3F6233F496E",
  "this.overlay_8A03D65C_9F7E_8C46_41BA_AABC0932B437"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -3.72,
   "class": "AdjacentPanorama",
   "backwardYaw": 149.96,
   "panorama": "this.panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3",
   "distance": 1
  },
  {
   "yaw": 163.07,
   "class": "AdjacentPanorama",
   "backwardYaw": 54.08,
   "panorama": "this.panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -98.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13F000EC_9F75_8446_41E1_76475765D649"
},
{
 "initialPosition": {
  "yaw": 78.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_19A65CDC_9F75_9C46_41CE_C4107A79DF7B"
},
{
 "initialPosition": {
  "yaw": 71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1A5A0C7D_9F75_9C46_41A8_C783DDE185BB"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "masukKiri2",
 "hfovMin": "150%",
 "id": "panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E",
 "overlays": [
  "this.overlay_9034429F_9F57_84C2_41DE_778E2BEA768F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 67.6,
   "class": "AdjacentPanorama",
   "backwardYaw": -126.64,
   "panorama": "this.panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -16.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13C3C0F8_9F75_844E_41E2_F16163DA1181"
},
{
 "initialPosition": {
  "yaw": 42.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_18E01D65_9F75_9C46_41B0_A255F7690AE6"
},
{
 "initialPosition": {
  "yaw": -161.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1BFC4B40_9F75_85BE_41CE_69F0377010AD"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_camera"
},
{
 "initialPosition": {
  "yaw": -174.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_189F2DB8_9F75_9CCE_41E2_0783E5D8C960"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "41",
 "hfovMin": "150%",
 "id": "panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74",
 "overlays": [
  "this.overlay_B498734B_9FCD_8442_41E1_7FA3ECD169AB",
  "this.overlay_B392C5EA_9FCE_8C42_41CC_2BCD81F98C4A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -137.83,
   "class": "AdjacentPanorama",
   "backwardYaw": 73.64,
   "panorama": "this.panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259",
   "distance": 1
  },
  {
   "yaw": 32.73,
   "class": "AdjacentPanorama",
   "backwardYaw": -172.08,
   "panorama": "this.panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -179.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1924DD3A_9F75_9DC3_41E0_8E81CF05933C"
},
{
 "initialPosition": {
  "yaw": -28.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_133D3177_9F75_8442_41A7_570EB36E071D"
},
{
 "initialPosition": {
  "yaw": -56.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_19120D5A_9F75_9C42_41C7_53C53A9F5DCB"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_camera"
},
{
 "initialPosition": {
  "yaw": -134.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12EAF198_9F75_84CE_41B1_EA25D18542F7"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "69",
 "hfovMin": "150%",
 "id": "panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3",
 "overlays": [
  "this.overlay_CD114856_9FD2_8442_41DB_5D1EEB976392",
  "this.overlay_CAAB7744_9FD2_8C46_41B0_88056A186BDB",
  "this.overlay_C1B44548_9FBD_8C4E_41E1_298B756CDD73"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -80.11,
   "class": "AdjacentPanorama",
   "backwardYaw": 151.61,
   "panorama": "this.panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650",
   "distance": 1
  },
  {
   "yaw": 109.33,
   "class": "AdjacentPanorama",
   "backwardYaw": 137.06,
   "panorama": "this.panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1",
   "distance": 1
  },
  {
   "yaw": -163.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -112.64,
   "panorama": "this.panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -34.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_19024D50_9F75_9C5E_41E3_86D6BCF1510F"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "53",
 "hfovMin": "150%",
 "id": "panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4",
 "overlays": [
  "this.overlay_A6CFC3AB_9FF3_84C2_41E1_46D046D13D17",
  "this.overlay_A7519058_9FF5_844E_41E2_F508CB1CCE16"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -39.41,
   "class": "AdjacentPanorama",
   "backwardYaw": 90.66,
   "panorama": "this.panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520",
   "distance": 1
  },
  {
   "yaw": 118.05,
   "class": "AdjacentPanorama",
   "backwardYaw": -3.3,
   "panorama": "this.panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "masukKanan2",
 "hfovMin": "150%",
 "id": "panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575",
 "overlays": [
  "this.overlay_909A233B_9F5D_85C2_41B5_7EB1EB794A10",
  "this.overlay_90E43E49_9F5E_FC4E_41D4_EAE78AD34246"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 18.32,
   "class": "AdjacentPanorama",
   "backwardYaw": 64.58,
   "panorama": "this.panorama_916C0B01_9F55_85BE_41DB_67A2726334FF",
   "distance": 1
  },
  {
   "yaw": -47.71,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.7,
   "panorama": "this.panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 49.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_136F5143_9F75_8442_41D0_F224ED9283D5"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "77",
 "hfovMin": "150%",
 "id": "panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42",
 "overlays": [
  "this.overlay_F79E25BB_9FB2_8CC2_41DD_D2FE6F131CC0",
  "this.overlay_F92E0CD1_9F4D_BC5E_41C0_C41D95C2D094"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 94.5,
   "class": "AdjacentPanorama",
   "backwardYaw": -80.66,
   "panorama": "this.panorama_D5CD106C_9FDE_8446_41DC_15020D28732C",
   "distance": 1
  },
  {
   "yaw": -85.32,
   "class": "AdjacentPanorama",
   "backwardYaw": 169.66,
   "panorama": "this.panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_camera"
},
{
 "initialPosition": {
  "yaw": -107.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13AEC118_9F75_85CE_41D9_ED5E5196FF5E"
},
{
 "initialPosition": {
  "yaw": -119.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16C38ED7_9F75_9C42_41BB_D45AC2DE0B60"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "88",
 "hfovMin": "150%",
 "id": "panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C",
 "overlays": [
  "this.overlay_E9D655F2_9F55_8C42_41DF_848A9839277A",
  "this.overlay_E3FDA150_9F56_845F_41CB_F97E07824686",
  "this.overlay_1EBDEA9F_9F56_84C2_41DF_F86AD15736D4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 37.12,
   "class": "AdjacentPanorama",
   "backwardYaw": -118.68,
   "panorama": "this.panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E",
   "distance": 1
  },
  {
   "yaw": 165.34,
   "class": "AdjacentPanorama",
   "backwardYaw": 2.39,
   "panorama": "this.panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411",
   "distance": 1
  },
  {
   "yaw": -62.95,
   "class": "AdjacentPanorama",
   "backwardYaw": -114.15,
   "panorama": "this.panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E_camera"
},
{
 "initialPosition": {
  "yaw": 156.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12B891CF_9F75_8442_41E3_D5C05A2FE7D2"
},
{
 "initialPosition": {
  "yaw": 130.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1ABEBC3B_9F75_83C2_41E3_CEFEC93C6A5D"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_camera"
},
{
 "initialPosition": {
  "yaw": 73.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17F85E23_9F75_9FC2_41D7_B73DB2D2D575"
},
{
 "initialPosition": {
  "yaw": 143.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_127861FA_9F75_8442_41D3_7CD67DAEA266"
},
{
 "initialPosition": {
  "yaw": -103.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1BCA2B4B_9F75_8442_41D1_A05868C44F46"
},
{
 "initialPosition": {
  "yaw": -30.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1B997B8B_9F75_84C2_41E3_4B859AB094B2"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "37",
 "hfovMin": "150%",
 "id": "panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A",
 "overlays": [
  "this.overlay_BA38B2F2_9FBD_8442_41DA_5A7D37972997",
  "this.overlay_B9C8ECFA_9FB2_FC42_41B1_97A2D990F9DF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -92.46,
   "class": "AdjacentPanorama",
   "backwardYaw": 94.02,
   "panorama": "this.panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736",
   "distance": 1
  },
  {
   "yaw": 85.31,
   "class": "AdjacentPanorama",
   "backwardYaw": -86.42,
   "panorama": "this.panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -147.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_11A5026E_9F75_8442_41DF_1FEBDCF94BB0"
},
{
 "initialPosition": {
  "yaw": -96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_18F3AD70_9F75_9C5E_41DB_4F1246695CBB"
},
{
 "initialPosition": {
  "yaw": -167.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_18C10D7A_9F75_9C42_41D1_C2D72816169D"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_camera"
},
{
 "initialPosition": {
  "yaw": 172.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1207E22F_9F75_87C2_41BD_07DC7C3D3423"
},
{
 "initialPosition": {
  "yaw": -66.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1954BD2F_9F75_9DC2_41C1_A6C480FA3508"
},
{
 "initialPosition": {
  "yaw": -64.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_19472D23_9F75_9DC2_41D9_91E605454549"
},
{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "initialPosition": {
  "yaw": 164.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_18A02D8F_9F75_9CC2_41E1_69BCEB02A412"
},
{
 "initialPosition": {
  "yaw": 87.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1AAEFC30_9F75_83DE_41D7_F6F31459B50A"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "61",
 "hfovMin": "150%",
 "id": "panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293",
 "overlays": [
  "this.overlay_DB45B127_9FCF_85C2_41CC_7B2E0232E930",
  "this.overlay_D9FD07CB_9FCD_8C42_41DA_389FC11691F2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -96.31,
   "class": "AdjacentPanorama",
   "backwardYaw": -101.59,
   "panorama": "this.panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D",
   "distance": 1
  },
  {
   "yaw": -0.63,
   "class": "AdjacentPanorama",
   "backwardYaw": -70.77,
   "panorama": "this.panorama_B0B2967D_9FD2_8C46_41D8_250940324901",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -8.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_19899CF0_9F75_9C5E_41E0_5DAD6968B79B"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_camera"
},
{
 "initialPosition": {
  "yaw": 93.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17253E98_9F75_9CCE_4191_D54A95044BED"
},
{
 "initialPosition": {
  "yaw": -86.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1B546BC1_9F75_8441_41D4_05121C832A82"
},
{
 "initialPosition": {
  "yaw": -108.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_19FBBCBC_9F75_9CC6_41A3_5C0EAC3FB717"
},
{
 "initialPosition": {
  "yaw": -113.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_137D014D_9F75_8446_41C6_EE9BAC45782A"
},
{
 "initialPosition": {
  "yaw": 167.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D4F7A36_9F75_87C2_41E3_6A089905F96E"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "81",
 "hfovMin": "150%",
 "id": "panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C",
 "overlays": [
  "this.overlay_F110E863_9F56_8441_41D8_636E47D03DEA",
  "this.overlay_F35D81DF_9F57_8442_41E2_38F4D9F43DB8",
  "this.overlay_F2D449AC_9F56_84C6_41DE_34A710A5DE0A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 103.56,
   "class": "AdjacentPanorama",
   "backwardYaw": -63.64,
   "panorama": "this.panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B",
   "distance": 1
  },
  {
   "yaw": 12.14,
   "class": "AdjacentPanorama",
   "backwardYaw": -34.88,
   "panorama": "this.panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A",
   "distance": 1
  },
  {
   "yaw": -122.84,
   "class": "AdjacentPanorama",
   "backwardYaw": -6.32,
   "panorama": "this.panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -10.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_129981E5_9F75_8446_41A2_45C9A0A028B0"
},
{
 "initialPosition": {
  "yaw": 4.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D605A09_9F75_87CE_41D5_B402958172A0"
},
{
 "initialPosition": {
  "yaw": 173.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_183ADDF6_9F75_9C42_41D4_02416E3B152E"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_camera"
},
{
 "initialPosition": {
  "yaw": -18.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_11E67244_9F75_8446_41CB_4FFF600D389A"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "78",
 "hfovMin": "150%",
 "id": "panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0",
 "overlays": [
  "this.overlay_F91C1554_9F4E_8C46_41C7_45EAD45676AF",
  "this.overlay_F8494E9A_9F4F_BCC2_41CE_108CCB6AACFE",
  "this.overlay_F5DF6669_9F55_8C41_41A2_130F5E4AC2B8",
  "this.overlay_ED9AD995_9F5F_84C6_41D4_9185390AA176"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -6.32,
   "class": "AdjacentPanorama",
   "backwardYaw": -122.84,
   "panorama": "this.panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C",
   "distance": 1
  },
  {
   "yaw": 84.35,
   "class": "AdjacentPanorama",
   "backwardYaw": -169.2,
   "panorama": "this.panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC",
   "distance": 1
  },
  {
   "yaw": 169.66,
   "class": "AdjacentPanorama",
   "backwardYaw": -85.32,
   "panorama": "this.panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42",
   "distance": 1
  },
  {
   "yaw": -101.52,
   "class": "AdjacentPanorama",
   "backwardYaw": 167.33,
   "panorama": "this.panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -12.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1650CF3A_9F75_9DC2_41C1_3043C182D6AC"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "62",
 "hfovMin": "150%",
 "id": "panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604",
 "overlays": [
  "this.overlay_DD92D1F9_9FF2_844E_41DB_344399259DD6",
  "this.overlay_DDE01555_9FF3_8C46_41E3_A0274B993971",
  "this.overlay_D8E7F91B_9FD2_85C2_41DA_3E66D00AEBF0",
  "this.overlay_D8314C46_9FD3_FC42_41D6_6AF91557DEBF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 167.26,
   "class": "AdjacentPanorama",
   "backwardYaw": 159.57,
   "panorama": "this.panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D",
   "distance": 1
  },
  {
   "yaw": -9.21,
   "class": "AdjacentPanorama",
   "backwardYaw": -98.23,
   "panorama": "this.panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5"
  },
  {
   "yaw": 78.03,
   "class": "AdjacentPanorama",
   "backwardYaw": 9.67,
   "panorama": "this.panorama_B0B2967D_9FD2_8C46_41D8_250940324901",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -109.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_13E290E0_9F75_847E_41DC_6E8577881BDE"
},
{
 "initialPosition": {
  "yaw": 35.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17976E63_9F75_9C42_41E1_3881D44AE8FE"
},
{
 "initialPosition": {
  "yaw": -76.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C217AFF_9F75_8442_41C8_BF6810F277A4"
},
{
 "initialPosition": {
  "yaw": 173.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1B344BD9_9F75_8441_41C7_E4EF75D2970B"
},
{
 "initialPosition": {
  "yaw": 65.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D2D3A4B_9F75_8441_41DB_8D3275B68900"
},
{
 "initialPosition": {
  "yaw": 140.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C43DAE8_9F75_844E_41DC_CE7DECA9F6C7"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "56",
 "hfovMin": "150%",
 "id": "panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5",
 "overlays": [
  "this.overlay_A5382337_9FF3_85C2_41DA_712EE4829799",
  "this.overlay_A2A58A07_9FF3_87C2_41CB_64CBFE9C1B81"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -86.15,
   "class": "AdjacentPanorama",
   "backwardYaw": 78.58,
   "panorama": "this.panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D",
   "distance": 1
  },
  {
   "yaw": 161.97,
   "class": "AdjacentPanorama",
   "backwardYaw": -12.02,
   "panorama": "this.panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 69.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_186EFDC3_9F75_9C42_41DD_7D9CFCADB237"
},
{
 "initialPosition": {
  "yaw": 145.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16E2FEC2_9F75_9C42_41CB_E5B1EA42F3B3"
},
{
 "initialPosition": {
  "yaw": 99.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_128821DA_9F75_8442_41B9_237E1D075F0B"
},
{
 "initialPosition": {
  "yaw": 9.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17E86E18_9F75_9FCE_41CF_21494B926B25"
},
{
 "initialPosition": {
  "yaw": -18.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_15195029_9F75_83C1_41E2_D809405526CB"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_camera"
},
{
 "initialPosition": {
  "yaw": 160.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17350EA3_9F75_9CC2_41E1_4C9AB34AF110"
},
{
 "initialPosition": {
  "yaw": 163.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1966AD07_9F75_9DC2_41E2_B3E0B418556C"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_camera"
},
{
 "initialPosition": {
  "yaw": 40.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16D3DEE1_9F75_9C7E_41DC_293036D2D677"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "72",
 "hfovMin": "150%",
 "id": "panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428",
 "overlays": [
  "this.overlay_C48BE04A_9FB2_8442_41D6_9D06270B1834",
  "this.overlay_C8627582_9FB3_8CC3_41E1_2CC769AC8320"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -144.35,
   "class": "AdjacentPanorama",
   "backwardYaw": 15.5,
   "panorama": "this.panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6",
   "distance": 1
  },
  {
   "yaw": -38.31,
   "class": "AdjacentPanorama",
   "backwardYaw": 161.9,
   "panorama": "this.panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -126.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1259B210_9F75_87DE_41D0_B9457B4CB60A"
},
{
 "initialPosition": {
  "yaw": 85.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_154B0FF2_9F75_9C42_419B_5AEE4A39A6A2"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "pintuDepan",
 "hfovMin": "150%",
 "id": "panorama_91927E47_9E1C_8AAA_41DC_163183D563B1",
 "overlays": [
  "this.overlay_8E613823_9E1B_F6EB_41CC_92746CD12360",
  "this.overlay_8F1A262D_9E25_9AFE_41CF_22666B736A95",
  "this.overlay_8E06BF43_9E2F_8AAA_41DA_246F2D0A3A2C",
  "this.overlay_AE836E6C_9FDD_BC46_41DC_6F9524982816"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 78.24,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.33,
   "panorama": "this.panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3",
   "distance": 1
  },
  {
   "yaw": 113.86,
   "class": "AdjacentPanorama",
   "backwardYaw": -10.51,
   "panorama": "this.panorama_AE9092FC_9FD2_8446_41E0_29143638D68B",
   "distance": 1
  },
  {
   "yaw": -71.05,
   "class": "AdjacentPanorama",
   "backwardYaw": 145.02,
   "panorama": "this.panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531",
   "distance": 1
  },
  {
   "yaw": -170.18,
   "class": "AdjacentPanorama",
   "backwardYaw": 123.33,
   "panorama": "this.panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "22",
 "hfovMin": "150%",
 "id": "panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C",
 "overlays": [
  "this.overlay_87FA5251_9F52_845E_41D3_3B0A19C99805",
  "this.overlay_8637B326_9F53_85C2_41DE_0038071D9D17"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 60.12,
   "class": "AdjacentPanorama",
   "backwardYaw": -163.16,
   "panorama": "this.panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A",
   "distance": 1
  },
  {
   "yaw": -116.76,
   "class": "AdjacentPanorama",
   "backwardYaw": 147.42,
   "panorama": "this.panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 172.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C727ADC_9F75_8446_4191_5ECFBE2F6CF7"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "90",
 "hfovMin": "150%",
 "id": "panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB",
 "overlays": [
  "this.overlay_E48C8FDE_9F53_BC42_41D2_4E68BEBBA027",
  "this.overlay_E2A80522_9F52_8DC2_41E1_B47E7BC26F2E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 157.1,
   "class": "AdjacentPanorama",
   "backwardYaw": -29.87,
   "panorama": "this.panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E",
   "distance": 1
  },
  {
   "yaw": -16.83,
   "class": "AdjacentPanorama",
   "backwardYaw": -114.15,
   "panorama": "this.panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "60",
 "hfovMin": "150%",
 "id": "panorama_B0B2967D_9FD2_8C46_41D8_250940324901",
 "overlays": [
  "this.overlay_DC35316F_9FF2_8442_41D3_691AC3A3F340",
  "this.overlay_DB02F922_9FCD_85C2_41BB_70086BE90C24",
  "this.overlay_DB420CD0_9FCE_BC5E_41CF_0FB602709351",
  "this.overlay_D84F4D5F_9FD6_BC42_41E0_D47DADCD1414"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 93.54,
   "class": "AdjacentPanorama",
   "backwardYaw": 155.38,
   "panorama": "this.panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB",
   "distance": 1
  },
  {
   "yaw": -70.77,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.63,
   "panorama": "this.panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293",
   "distance": 1
  },
  {
   "yaw": -169.1,
   "class": "AdjacentPanorama",
   "backwardYaw": -6.6,
   "panorama": "this.panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64",
   "distance": 1
  },
  {
   "yaw": 9.67,
   "class": "AdjacentPanorama",
   "backwardYaw": 78.03,
   "panorama": "this.panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "47",
 "hfovMin": "150%",
 "id": "panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2",
 "overlays": [
  "this.overlay_ADB3C582_9FD3_8CC2_41CF_84A6EAB0AD53",
  "this.overlay_AD718ACA_9FD2_8443_41D7_13284862B1D1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -68.3,
   "class": "AdjacentPanorama",
   "backwardYaw": 161.9,
   "panorama": "this.panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E",
   "distance": 1
  },
  {
   "yaw": 115.58,
   "class": "AdjacentPanorama",
   "backwardYaw": -167.07,
   "panorama": "this.panorama_AE9092FC_9FD2_8446_41E0_29143638D68B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -146.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1BBBFB72_9F75_8442_41C0_E356A4EDEE6E"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "73",
 "hfovMin": "150%",
 "id": "panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6",
 "overlays": [
  "this.overlay_C822F766_9FB2_8C42_41CB_158CD581F481",
  "this.overlay_C741EC75_9FB5_9C46_41B8_AF0614E486AA",
  "this.overlay_FFD73904_9FBF_85C6_41A9_DA984BC21115"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -19.98,
   "class": "AdjacentPanorama",
   "backwardYaw": -40.23,
   "panorama": "this.panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4",
   "distance": 1
  },
  {
   "yaw": -109,
   "class": "AdjacentPanorama",
   "backwardYaw": 95.26,
   "panorama": "this.panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C",
   "distance": 1
  },
  {
   "yaw": 161.9,
   "class": "AdjacentPanorama",
   "backwardYaw": -38.31,
   "panorama": "this.panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "63",
 "hfovMin": "150%",
 "id": "panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64",
 "overlays": [
  "this.overlay_D745AAF0_9FD7_845E_41C4_46F818115348",
  "this.overlay_D6B7E16B_9FD7_8442_41A4_2252184AD8FD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -6.6,
   "class": "AdjacentPanorama",
   "backwardYaw": -169.1,
   "panorama": "this.panorama_B0B2967D_9FD2_8C46_41D8_250940324901",
   "distance": 1
  },
  {
   "yaw": 171.72,
   "class": "AdjacentPanorama",
   "backwardYaw": 11.04,
   "panorama": "this.panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_camera"
},
{
 "initialPosition": {
  "yaw": 75.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17B6BE4E_9F75_9C42_41D4_8B3601682012"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92881847_9EE4_96AB_41C8_82F990447AB3_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_92881847_9EE4_96AB_41C8_82F990447AB3_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92881847_9EE4_96AB_41C8_82F990447AB3_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_92881847_9EE4_96AB_41C8_82F990447AB3_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92881847_9EE4_96AB_41C8_82F990447AB3_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_92881847_9EE4_96AB_41C8_82F990447AB3_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92881847_9EE4_96AB_41C8_82F990447AB3_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_92881847_9EE4_96AB_41C8_82F990447AB3_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_92881847_9EE4_96AB_41C8_82F990447AB3_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92881847_9EE4_96AB_41C8_82F990447AB3_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_92881847_9EE4_96AB_41C8_82F990447AB3_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92881847_9EE4_96AB_41C8_82F990447AB3_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_92881847_9EE4_96AB_41C8_82F990447AB3_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "depanSamping",
 "hfovMin": "150%",
 "id": "panorama_92881847_9EE4_96AB_41C8_82F990447AB3",
 "overlays": [
  "this.overlay_91894429_9EEB_BEE7_41E1_6B4056AF1235",
  "this.overlay_8ED13EAB_9EFD_8BFB_41BC_E65EF5A27B02"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 149.96,
   "class": "AdjacentPanorama",
   "backwardYaw": -92.6,
   "panorama": "this.panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B",
   "distance": 1
  },
  {
   "yaw": -33.44,
   "class": "AdjacentPanorama",
   "backwardYaw": -7.63,
   "panorama": "this.panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_92881847_9EE4_96AB_41C8_82F990447AB3_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -65.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1226B21A_9F75_87C2_41D7_C8EC27BEEC86"
},
{
 "initialPosition": {
  "yaw": 63.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1A9FCC51_9F75_9C5E_41D5_37DBEEDFD8B1"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "29",
 "hfovMin": "150%",
 "id": "panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A",
 "overlays": [
  "this.overlay_812545BD_9F52_8CC6_41E2_FDEA56515368",
  "this.overlay_81CF39A7_9F52_84C2_41C3_9DCA3DF4DFCB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -89.03,
   "class": "AdjacentPanorama",
   "backwardYaw": 66.91,
   "panorama": "this.panorama_8DC09E63_9F72_9C42_41D4_483C11411846",
   "distance": 1
  },
  {
   "yaw": 77.21,
   "class": "AdjacentPanorama",
   "backwardYaw": 74.53,
   "panorama": "this.panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -89.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16800F01_9F75_9DBE_41D6_43C52B26B3FD"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "masukDepan1",
 "hfovMin": "150%",
 "id": "panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3",
 "overlays": [
  "this.overlay_8E5690F1_9E2C_9767_41E2_D10C795BC060",
  "this.overlay_8E53C8EC_9E3F_B77D_41C1_743731B81603",
  "this.overlay_8B4924A7_9F7D_8CC2_41D9_11099227C1BC",
  "this.overlay_AFE2E4E0_9FDE_8C7E_41DC_D53828DF7DB3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 70.82,
   "class": "AdjacentPanorama",
   "backwardYaw": -15.18,
   "panorama": "this.panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AE9092FC_9FD2_8446_41E0_29143638D68B"
  },
  {
   "yaw": 149.96,
   "class": "AdjacentPanorama",
   "backwardYaw": -3.72,
   "panorama": "this.panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE",
   "distance": 1
  },
  {
   "yaw": 0.33,
   "class": "AdjacentPanorama",
   "backwardYaw": 78.24,
   "panorama": "this.panorama_91927E47_9E1C_8AAA_41DC_163183D563B1",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_camera"
},
{
 "initialPosition": {
  "yaw": 157.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_187C5DCD_9F75_9C46_41D7_809077C0B9D0"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_camera"
},
{
 "initialPosition": {
  "yaw": 118.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1B123BEF_9F75_8442_41DA_18F08DF9F73E"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "70",
 "hfovMin": "150%",
 "id": "panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650",
 "overlays": [
  "this.overlay_CB7B74B3_9FCD_8CC2_41D0_A2C77065B9BE",
  "this.overlay_CB1DD3E1_9FCE_847E_41D0_24CC9A2529B3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 151.61,
   "class": "AdjacentPanorama",
   "backwardYaw": -80.11,
   "panorama": "this.panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3",
   "distance": 1
  },
  {
   "yaw": -104.75,
   "class": "AdjacentPanorama",
   "backwardYaw": -149.43,
   "panorama": "this.panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "83",
 "hfovMin": "150%",
 "id": "panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D",
 "overlays": [
  "this.overlay_EFFA4D94_9F53_BCC6_41DB_B93CB6A7DFA3",
  "this.overlay_EB78D187_9F52_84C2_41DB_8FABB4A42933"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -51.28,
   "class": "AdjacentPanorama",
   "backwardYaw": 45.09,
   "panorama": "this.panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B",
   "distance": 1
  },
  {
   "yaw": 29.23,
   "class": "AdjacentPanorama",
   "backwardYaw": -144.08,
   "panorama": "this.panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "masukKanan1",
 "hfovMin": "150%",
 "id": "panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6",
 "overlays": [
  "this.overlay_9012C14D_9F53_8446_41DB_BAD4F2C9F478",
  "this.overlay_8D359AE3_9F56_8442_41DB_B1890C1A79AF",
  "this.overlay_8DBFF70A_9F56_8DC2_41E3_34D3C808990C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -0.7,
   "class": "AdjacentPanorama",
   "backwardYaw": -47.71,
   "panorama": "this.panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575",
   "distance": 1
  },
  {
   "yaw": -142.43,
   "class": "AdjacentPanorama",
   "backwardYaw": -108.04,
   "panorama": "this.panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D",
   "distance": 1
  },
  {
   "yaw": 123.33,
   "class": "AdjacentPanorama",
   "backwardYaw": -170.18,
   "panorama": "this.panorama_91927E47_9E1C_8AAA_41DC_163183D563B1",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 146.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1AE31BFA_9F75_8442_41C3_2DF35B03783E"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_camera"
},
{
 "initialPosition": {
  "yaw": 69.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1CF8BA81_9F75_84BE_418A_757BF717FE7A"
},
{
 "initialPosition": {
  "yaw": -41.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C87FAB8_9F75_84CE_41CE_5B864117CF76"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "86",
 "hfovMin": "150%",
 "id": "panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945",
 "overlays": [
  "this.overlay_EB776A12_9F52_87C2_41A3_F98DAAB432E3",
  "this.overlay_EBD608E6_9F53_8442_4197_7C8E32BA4157"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -23.07,
   "class": "AdjacentPanorama",
   "backwardYaw": -175.03,
   "panorama": "this.panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC09E63_9F72_9C42_41D4_483C11411846_camera"
},
{
 "initialPosition": {
  "yaw": 109.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_19B9CCE6_9F75_9C42_41DC_8AEB013FBA9C"
},
{
 "initialPosition": {
  "yaw": 172.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1AA17C25_9F75_83C6_41BA_0158F1FC6D8E"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "24",
 "hfovMin": "150%",
 "id": "panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9",
 "overlays": [
  "this.overlay_85F6E40C_9F56_83C6_41D6_A7249EF5ED87",
  "this.overlay_8457E6A8_9F57_8CCE_41D6_8D4AD16E0031"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -139.69,
   "class": "AdjacentPanorama",
   "backwardYaw": 12.21,
   "panorama": "this.panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A",
   "distance": 1
  },
  {
   "yaw": 33.62,
   "class": "AdjacentPanorama",
   "backwardYaw": 84.35,
   "panorama": "this.panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -150.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_18D07D85_9F75_9CC6_41BC_C8C531E9DE7F"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_camera"
},
{
 "initialPosition": {
  "yaw": -164.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_12174239_9F75_87CE_41E3_C1E15CAA0A26"
},
{
 "initialPosition": {
  "yaw": 156.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_19EBECB2_9F75_9CC2_41BF_CADC1EB4AACC"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "59",
 "hfovMin": "150%",
 "id": "panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB",
 "overlays": [
  "this.overlay_A00B4E6D_9FF6_BC46_41D2_6315FD343C18",
  "this.overlay_DDE97A0E_9FF7_87C2_41DB_D7C836878C2B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 155.38,
   "class": "AdjacentPanorama",
   "backwardYaw": 93.54,
   "panorama": "this.panorama_B0B2967D_9FD2_8C46_41D8_250940324901",
   "distance": 1
  },
  {
   "yaw": -90.13,
   "class": "AdjacentPanorama",
   "backwardYaw": 148.66,
   "panorama": "this.panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_camera"
},
{
 "initialPosition": {
  "yaw": -168.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1BABDB66_9F75_8442_41E3_8144DA526379"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "84",
 "hfovMin": "150%",
 "id": "panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B",
 "overlays": [
  "this.overlay_EE6A92BB_9F5D_84C2_41A9_CB8B726D606F",
  "this.overlay_EED20709_9F5E_8DCE_419C_B5967D9118B8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 45.09,
   "class": "AdjacentPanorama",
   "backwardYaw": -51.28,
   "panorama": "this.panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D",
   "distance": 1
  },
  {
   "yaw": -63.64,
   "class": "AdjacentPanorama",
   "backwardYaw": 103.56,
   "panorama": "this.panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "masukKiriDepan",
 "hfovMin": "150%",
 "id": "panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57",
 "overlays": [
  "this.overlay_8F84D735_9E3C_9AEE_41DA_31916375AC97",
  "this.overlay_92A09886_9F56_84C2_41B3_3406711ADD67"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -15.18,
   "class": "AdjacentPanorama",
   "backwardYaw": 70.82,
   "panorama": "this.panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3",
   "distance": 1
  },
  {
   "yaw": -126.64,
   "class": "AdjacentPanorama",
   "backwardYaw": 67.6,
   "panorama": "this.panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -6.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1996ECFB_9F75_9C42_41E2_DE565B1CFCCD"
},
{
 "initialPosition": {
  "yaw": -125.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1B698B99_9F75_84CE_41E2_945CBF400284"
},
{
 "initialPosition": {
  "yaw": 37.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C95DAC4_9F75_8446_4167_B23BA122C15D"
},
{
 "initialPosition": {
  "yaw": -105.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1249F205_9F75_87C6_41C0_D7D86B48ABDE"
},
{
 "initialPosition": {
  "yaw": 176.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_18B1DD9A_9F75_9CC2_41DA_10B14125C195"
},
{
 "initialPosition": {
  "yaw": -95.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16A33EEC_9F75_9C46_41D8_D79554134D6E"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_camera"
},
{
 "initialPosition": {
  "yaw": -179.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1747CE83_9F75_9CC2_41D2_1CAAEC68D8A3"
},
{
 "initialPosition": {
  "yaw": 53.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1C311B0B_9F75_85C2_41CB_24FFAA4E76B2"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "79",
 "hfovMin": "150%",
 "id": "panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC",
 "overlays": [
  "this.overlay_F40669E0_9F4E_847E_41B3_59090318E18C",
  "this.overlay_F6B6D1A5_9F4D_84C6_41BC_433F0FD476D2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -169.2,
   "class": "AdjacentPanorama",
   "backwardYaw": 84.35,
   "panorama": "this.panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0",
   "distance": 1
  },
  {
   "yaw": -61.44,
   "class": "AdjacentPanorama",
   "backwardYaw": 157.1,
   "panorama": "this.panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 116.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1715DEB7_9F75_9CC1_41E1_24D6564A5B3E"
},
{
 "initialPosition": {
  "yaw": 117.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1977ED17_9F75_9DC2_41AA_AFCB8CDA5EAA"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "21",
 "hfovMin": "150%",
 "id": "panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444",
 "overlays": [
  "this.overlay_88185229_9F4E_87CE_41E2_93158AF9970E",
  "this.overlay_87225FD3_9F4D_FC42_41E1_82B03A6E18D3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 147.42,
   "class": "AdjacentPanorama",
   "backwardYaw": -116.76,
   "panorama": "this.panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C",
   "distance": 1
  },
  {
   "yaw": -10.17,
   "class": "AdjacentPanorama",
   "backwardYaw": -28.56,
   "panorama": "this.panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -175.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_163F5F5D_9F75_9C46_41D5_D9170C6B560F"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "87",
 "hfovMin": "150%",
 "id": "panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411",
 "overlays": [
  "this.overlay_E7C8C778_9F52_8C4E_41D8_0E2350A8A045",
  "this.overlay_EA321140_9F52_85BE_41C3_BE08D445E499"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 2.39,
   "class": "AdjacentPanorama",
   "backwardYaw": 165.34,
   "panorama": "this.panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C",
   "distance": 1
  },
  {
   "yaw": -175.03,
   "class": "AdjacentPanorama",
   "backwardYaw": -23.07,
   "panorama": "this.panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 150.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1D5D1A41_9F75_87BE_41E0_8ABDD384D11E"
},
{
 "initialPosition": {
  "yaw": -167.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_15CD0F9A_9F75_9CC2_41DE_9D05A941A3B0"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "39",
 "hfovMin": "150%",
 "id": "panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA",
 "overlays": [
  "this.overlay_B87CB1C4_9FB6_8446_41BD_FA448EED736B",
  "this.overlay_B737203E_9FB2_83C2_41D6_3DCE07E9FA08",
  "this.overlay_B628F35D_9FB3_8446_41D3_97088AB18597"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 158.95,
   "class": "AdjacentPanorama",
   "backwardYaw": 73.78,
   "panorama": "this.panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5",
   "distance": 1
  },
  {
   "yaw": 81.46,
   "class": "AdjacentPanorama",
   "backwardYaw": -36.8,
   "panorama": "this.panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8",
   "distance": 1
  },
  {
   "yaw": -88.07,
   "class": "AdjacentPanorama",
   "backwardYaw": 74.94,
   "panorama": "this.panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "89",
 "hfovMin": "150%",
 "id": "panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485",
 "overlays": [
  "this.overlay_E6145CC8_9F55_7C4E_41D5_651CD6293449",
  "this.overlay_E3AAE006_9F52_83C2_41BD_4C44E7DA4D03"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -114.15,
   "class": "AdjacentPanorama",
   "backwardYaw": -16.83,
   "panorama": "this.panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB",
   "distance": 1
  },
  {
   "yaw": -114.15,
   "class": "AdjacentPanorama",
   "backwardYaw": -62.95,
   "panorama": "this.panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -78.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17023EAC_9F75_9CC7_41D6_F870A8232B03"
},
{
 "initialPosition": {
  "yaw": 78.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1A8C2C46_9F75_9C42_41E1_72F26C48ACE5"
},
{
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.23,
   "yaw": 5.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64, this.camera_1226B21A_9F75_87C2_41D7_C8EC27BEEC86); this.mainPlayList.set('selectedIndex', 60)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E39C9A6_9F75_84C2_41D4_2CA30F8DB41B",
   "pitch": -20.14,
   "hfov": 10.23,
   "yaw": 5.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CC07394E_9FD7_8442_41E2_DC6AE17580B8",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.27,
   "yaw": -83.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1, this.camera_1259B210_9F75_87DE_41D0_B9457B4CB60A); this.mainPlayList.set('selectedIndex', 62)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3939A7_9F75_84C2_41DE_B13666A0F76D",
   "pitch": -31.67,
   "hfov": 9.27,
   "yaw": -83.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CB9CAF27_9FD5_7DC1_41C1_06522E8B6272",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.51,
   "yaw": 101.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4, this.camera_12366225_9F75_87C6_41CB_7B6CD54F434C); this.mainPlayList.set('selectedIndex', 68)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3889A7_9F75_84C2_41CB_2DFC93B3A50E",
   "pitch": -29.2,
   "hfov": 9.51,
   "yaw": 101.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C40D341C_9FB5_83C7_41DE_DD95DDBD8E6F",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.04,
   "yaw": -165.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C, this.camera_1207E22F_9F75_87C2_41BD_07DC7C3D3423); this.mainPlayList.set('selectedIndex', 69)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3819A7_9F75_84C2_41D0_9715A322CC92",
   "pitch": -22.89,
   "hfov": 10.04,
   "yaw": -165.9,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C13E4FC0_9FB2_BCBE_41E1_4FFB84F859D6",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.84,
   "yaw": -54.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E, this.camera_136F5143_9F75_8442_41D0_F224ED9283D5); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842A02CB_9F73_8442_41D8_4C0369154D47",
   "pitch": -35.79,
   "hfov": 8.84,
   "yaw": -54.85,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8E8277FD_9F53_8C41_41D0_F0ABC63479FA",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.65,
   "yaw": 12.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D, this.camera_139F3138_9F75_85CE_41E3_303340B99895); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842BA2CB_9F73_8442_41DE_12D190B08816",
   "pitch": -37.44,
   "hfov": 8.65,
   "yaw": 12.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8D7A83A4_9F52_84C6_41D9_C06E18A8AC1D",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.83,
   "yaw": 71.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61, this.camera_1B477BB4_9F75_84C6_41C0_94B30D762747); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0789AF_9F75_84C2_41E0_00D1284D43AF",
   "pitch": -25.5,
   "hfov": 9.83,
   "yaw": 71.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FB6AA5CA_9FB6_8C42_41E3_9F310386EEE7",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.81,
   "yaw": 119.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0719B0_9F75_84DE_41CC_73C441756EC4",
   "pitch": -25.84,
   "hfov": 9.81,
   "yaw": 119.49,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FA18E32B_9FB5_85C2_41D2_3F0FD6479098",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.32,
   "yaw": -80.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42, this.camera_1B777BA6_9F75_84C2_4197_F92334B5689A); this.mainPlayList.set('selectedIndex', 71)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0689B0_9F75_84DE_41D1_53E3D20682EB",
   "pitch": -18.63,
   "hfov": 10.32,
   "yaw": -80.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FB7E9D8C_9FB3_9CC6_41C8_50492B97EE21",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.37,
   "yaw": -6.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785, this.camera_182D1DEC_9F75_9C46_41C0_FBE4CF65EAAA); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_90EFE241_9F4F_87BE_41D2_3B5581E56858",
   "pitch": -17.88,
   "hfov": 10.37,
   "yaw": -6.26,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_913959B0_9EE5_89E6_41C7_57BA25B2FF73",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.52,
   "yaw": -100.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531, this.camera_183ADDF6_9F75_9C42_41D4_02416E3B152E); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_90EFA241_9F4F_87BE_41D9_EEB48FA11EE4",
   "pitch": -14.99,
   "hfov": 10.52,
   "yaw": -100.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8E722671_9E1D_FB67_41D2_367CE8435DEA",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.43,
   "yaw": -7.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E, this.camera_1A2DEC88_9F75_9CCE_41DC_FAB8C8907510); this.mainPlayList.set('selectedIndex', 61)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E04B9AE_9F75_84C2_41DA_4589857E49DA",
   "pitch": -16.85,
   "hfov": 10.43,
   "yaw": -7.49,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C432C825_9FB3_83C6_41C2_8622ED43E454",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.79,
   "yaw": -112.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3, this.camera_1A4D1C72_9F75_9C42_41E0_C274113FB7DF); this.mainPlayList.set('selectedIndex', 63)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E07E9AE_9F75_84C2_41CC_C370A358CC48",
   "pitch": -25.98,
   "hfov": 9.79,
   "yaw": -112.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C04918DD_9FBE_8446_41CD_976CF5D6AA09",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.96,
   "yaw": 95.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6, this.camera_1A5A0C7D_9F75_9C46_41A8_C783DDE185BB); this.mainPlayList.set('selectedIndex', 67)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0759AF_9F75_84C2_41D7_9CBBCE07268C",
   "pitch": -23.92,
   "hfov": 9.96,
   "yaw": 95.26,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C0E32679_9FBD_8C4E_41D5_6B3D43758138",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.54,
   "yaw": 156.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6, this.camera_1A7D4C67_9F75_9C42_41D3_D87059605B85); this.mainPlayList.set('selectedIndex', 65)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0459AF_9F75_84C2_41D6_58D0EC85B12A",
   "pitch": -28.93,
   "hfov": 9.54,
   "yaw": 156.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FCED455D_9FB2_8C46_41A8_85647165860A",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.51,
   "yaw": 170.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E, this.camera_132DB16C_9F75_8446_4187_902A77658849); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E25C99A_9F75_84C2_41C8_AE9EE270277A",
   "pitch": -29.2,
   "hfov": 9.51,
   "yaw": 170.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_AA50AE74_9FD7_9C46_41CD_623C494CECD9",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.77,
   "yaw": -29.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61, this.camera_135A1162_9F75_8442_41E0_F5CF219BA9C3); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E25599A_9F75_84C2_41D0_7F3E6702DC8D",
   "pitch": -26.25,
   "hfov": 9.77,
   "yaw": -29.52,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_AA8CDC8E_9FD2_BCC2_41E2_25524478D240",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.69,
   "yaw": 161.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2, this.camera_15FFDF8D_9F75_9CC6_41B5_BEE5014C30E4); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E22F999_9F75_84CE_41E3_E7D8E0AB1DF8",
   "pitch": -27.21,
   "hfov": 9.69,
   "yaw": 161.9,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_ACE9D1A5_9FD5_84C6_41D5_176EB6BC8C00",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.18,
   "yaw": -20.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36, this.camera_15EFEF82_9F75_9CC2_41DB_A095C0922964); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E224999_9F75_84CE_41D1_5DD944B33BDF",
   "pitch": -20.83,
   "hfov": 10.18,
   "yaw": -20.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_AB99C38D_9FD6_84C6_41E2_FF7A1706BC6A",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.8,
   "yaw": -10.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_91927E47_9E1C_8AAA_41DC_163183D563B1, this.camera_1954BD2F_9F75_9DC2_41C1_A6C480FA3508); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E20D998_9F75_84CE_41CF_02781DBBC29E",
   "pitch": -25.91,
   "hfov": 9.8,
   "yaw": -10.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_AF25D7EA_9FDF_8C42_41BF_724FE4BEE503",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.33,
   "yaw": -167.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2, this.camera_19472D23_9F75_9DC2_41D9_91E605454549); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E207998_9F75_84CE_41C8_EFA41F7D9687",
   "pitch": -40.11,
   "hfov": 8.33,
   "yaw": -167.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_AEA159FF_9FD2_8442_41DF_7093E5DD354D",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.35,
   "yaw": 168.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36, this.camera_19C8ACC7_9F75_9C42_41D0_8D1C759B00C7); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E24D99A_9F75_84C2_41D5_3FB6150AD22B",
   "pitch": -30.85,
   "hfov": 9.35,
   "yaw": 168.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_AA814AC7_9FD3_8442_41E0_A526FEE7300B",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.51,
   "yaw": -3.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4, this.camera_19D8ACD1_9F75_9C5E_4167_90961B433F2B); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E24299A_9F75_84C2_41D1_C612CC8E3D38",
   "pitch": -29.2,
   "hfov": 9.51,
   "yaw": -3.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A8683C95_9FCE_9CC6_41DC_7E57C1B4FF88",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.37,
   "yaw": 58.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CD106C_9FDE_8446_41DC_15020D28732C, this.camera_19FBBCBC_9F75_9CC6_41A3_5C0EAC3FB717); this.mainPlayList.set('selectedIndex', 70)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E27A99B_9F75_84C2_41BE_CDEB51CE0E38",
   "pitch": -17.88,
   "hfov": 10.37,
   "yaw": 58.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A91B1E74_9FCF_7C46_41B1_A3BD2402808D",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.36,
   "yaw": -65.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64, this.camera_19EBECB2_9F75_9CC2_41BF_CADC1EB4AACC); this.mainPlayList.set('selectedIndex', 60)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E27099B_9F75_84C2_41D3_E6C4D2D5E8D5",
   "pitch": -18.08,
   "hfov": 10.36,
   "yaw": -65.28,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A71B872F_9FCF_8DC2_41E3_D6F02F5D3842",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.19,
   "yaw": -7.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520, this.camera_153BF013_9F75_83C2_41C3_37FC80A01CB0); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E28599C_9F75_84C6_41DE_CFA095E5FB6C",
   "pitch": -20.69,
   "hfov": 10.19,
   "yaw": -7.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DFDB8CB5_9FF5_BCC6_41C0_9172A815E2E9",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.93,
   "yaw": 78.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5, this.camera_15286007_9F75_83C2_41E3_4E0B54AB99AD); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E2BD99D_9F75_84C6_41E0_4FB5E956EB19",
   "pitch": -24.26,
   "hfov": 9.93,
   "yaw": 78.58,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A5D122EB_9FF2_8442_41E2_55DE8CFCBF45",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.82,
   "yaw": 159.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604, this.camera_1509901D_9F75_83C1_41BD_1D9081C201C8); this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E2B299D_9F75_84C6_41D9_A9A6867657DC",
   "pitch": -25.63,
   "hfov": 9.82,
   "yaw": 159.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A18B3DD4_9FF2_BC46_41DC_F433EC6F1B28",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.89,
   "yaw": -101.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293, this.camera_15589FFC_9F75_9C46_41E2_66EF3349FE10); this.mainPlayList.set('selectedIndex', 55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E2AB99E_9F75_84C2_41E1_783AB818FD24",
   "pitch": -24.81,
   "hfov": 9.89,
   "yaw": -101.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DA194D27_9FCE_BDC2_41D7_015516371863",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.82,
   "yaw": 11.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -51.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64, this.camera_19899CF0_9F75_9C5E_41E0_5DAD6968B79B); this.mainPlayList.set('selectedIndex', 57)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E37A9A4_9F75_84C6_41CB_81A6B7A338DF",
   "pitch": -51.23,
   "hfov": 6.82,
   "yaw": 11.04,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6DB90F9_9FD6_844E_41D2_AAE3A0325518",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.76,
   "yaw": -169.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C, this.camera_1996ECFB_9F75_9C42_41E2_DE565B1CFCCD); this.mainPlayList.set('selectedIndex', 59)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3739A5_9F75_84C6_41DB_417BE9A26702",
   "pitch": -44.58,
   "hfov": 7.76,
   "yaw": -169.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D3D1F060_9FD5_847E_41C4_EEA4B9772499",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.73,
   "yaw": -23.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61, this.camera_188F4DAE_9F75_9CC2_41D5_4A31E9AB14A2); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E39E9A5_9F75_84C6_41CD_177F9B136231",
   "pitch": -26.73,
   "hfov": 9.73,
   "yaw": -23.28,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D3C41217_9FD3_87C2_41E1_71B776985425",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.71,
   "yaw": -108.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3979A6_9F75_84C2_41E1_9259E0668E1D",
   "pitch": -27.01,
   "hfov": 9.71,
   "yaw": -108.8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D274B413_9FD5_83C2_41E0_393B098A21E1",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.85,
   "yaw": 114.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E, this.camera_189F2DB8_9F75_9CCE_41E2_0783E5D8C960); this.mainPlayList.set('selectedIndex', 61)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3679A6_9F75_84C2_41D0_78EEE9F25DFD",
   "pitch": -25.36,
   "hfov": 9.85,
   "yaw": 114.27,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D1CDEA15_9FD6_87C6_41B0_223F4DFBE469",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.6,
   "yaw": -6.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2, this.camera_1D681A14_9F75_87C6_41B1_4C5D4DD3EDBF); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_90EF0241_9F4F_87BE_41D3_80C2F19B4DCF",
   "pitch": -37.85,
   "hfov": 8.6,
   "yaw": -6.8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_91697C43_9E1F_8EAB_41C5_D567439EC541",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.07,
   "yaw": 145.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_91927E47_9E1C_8AAA_41DC_163183D563B1, this.camera_1D752A20_9F75_87FE_41C3_02C9963EEDA7); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_90ECF241_9F4F_87BE_41DD_44A31C07B729",
   "pitch": -22.41,
   "hfov": 10.07,
   "yaw": 145.02,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_91389EB9_9E1D_8BE7_41DD_2E2C405BA849",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.56,
   "yaw": 70.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -52.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8, this.camera_1C87FAB8_9F75_84CE_41CE_5B864117CF76); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_8426F2CB_9F73_8442_41DE_EF3094F7648A",
   "pitch": -52.95,
   "hfov": 6.56,
   "yaw": 70.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_890BA84A_9F76_8442_41DA_AFB96AF29222",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.06,
   "yaw": -28.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444, this.camera_1CB41AAB_9F75_84C2_41D4_3F257380C940); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842612CB_9F73_8442_41D4_9A2756E96E27",
   "pitch": -42.31,
   "hfov": 8.06,
   "yaw": -28.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8998493A_9F75_85C2_41D8_63A7B3C8CE6C",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.02,
   "yaw": 84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259, this.camera_17A68E44_9F75_9C46_41DB_583E86D2CAE5); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E5E3997_9F75_84C2_41B3_A2E609A480E8",
   "pitch": -23.09,
   "hfov": 10.02,
   "yaw": 84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B23DBBC1_9FCE_84BE_41D4_4D4D914A988E",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.02,
   "yaw": -94.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05, this.camera_17D96E39_9F75_9FCE_4197_00926B24F1BD); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E219997_9F75_84C2_41B9_F619BE1B6466",
   "pitch": -34.07,
   "hfov": 9.02,
   "yaw": -94.45,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B25A13AD_9FCD_84C6_41DC_BEC1E167A60D",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.93,
   "yaw": 74.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A, this.camera_1CE87A76_9F75_8442_41BD_5BF7E3909B0D); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E54D990_9F75_84DE_41DB_FFD510780D30",
   "pitch": -24.33,
   "hfov": 9.93,
   "yaw": 74.53,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_807CE8CC_9F53_8446_41DC_FE93318F23A7",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.44,
   "yaw": -110.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423, this.camera_1CF8BA81_9F75_84BE_418A_757BF717FE7A); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E547990_9F75_84DE_41C7_69EE3E0953A2",
   "pitch": -29.96,
   "hfov": 9.44,
   "yaw": -110.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_80079819_9F52_83CE_41E2_BF36E9CCD384",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.83,
   "yaw": 76.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_916C0B01_9F55_85BE_41DB_67A2726334FF, this.camera_12CBB1AD_9F75_84C6_41E0_4BA65E948F82); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842BD2CB_9F73_8442_41C8_942F86BA0E9A",
   "pitch": -44.03,
   "hfov": 7.83,
   "yaw": 76.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8E06EAA2_9F5D_84C2_41E3_2A7A2C15C195",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.93,
   "yaw": -130.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6, this.camera_12DB51B8_9F75_84CE_41E3_C7CF40EE3F64); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842B62CB_9F73_8442_41DA_E95C58FC5FC5",
   "pitch": -43.27,
   "hfov": 7.93,
   "yaw": -130.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8E509A1A_9F52_87C2_41D8_AAF3F47A8FA5",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.99,
   "yaw": 111.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69, this.camera_161E9F75_9F75_9C46_41D9_768968AFBAAC); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E57C992_9F75_84C2_41D6_D2BF14E7520F",
   "pitch": -42.79,
   "hfov": 7.99,
   "yaw": 111.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BEA8605E_9FB7_8442_41C7_6B0674CA1173",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.43,
   "yaw": 0.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1, this.camera_160ECF69_9F75_9C4E_41E3_CC485EDD8240); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E574992_9F75_84C2_41E0_02A315FF406E",
   "pitch": -30.09,
   "hfov": 9.43,
   "yaw": 0.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BDF21D07_9FB5_7DC2_41C3_F7D29936FB26",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.15,
   "yaw": -98.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC16922_9F72_85C2_41B5_473076A000E6, this.camera_163F5F5D_9F75_9C46_41D5_D9170C6B560F); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E56F992_9F75_84C2_41E0_5B886574C618",
   "pitch": -32.91,
   "hfov": 9.15,
   "yaw": -98.85,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BE66C684_9FB2_8CC6_41BF_AF627530F6AD",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.48,
   "yaw": -105.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC09E63_9F72_9C42_41D4_483C11411846_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69, this.camera_1631FF51_9F75_9C5E_41E0_D20B45B2EC3B); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E52698F_9F75_84C2_41E3_858F95E5AD93",
   "pitch": -29.48,
   "hfov": 9.48,
   "yaw": -105.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_82F0048D_9F53_8CC6_41D8_4F1C072F441F",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.77,
   "yaw": 66.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC09E63_9F72_9C42_41D4_483C11411846_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A, this.camera_1621AF45_9F75_9C46_41C9_34E909698BD6); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E52198F_9F75_84C2_41CC_076801297CF4",
   "pitch": -36.41,
   "hfov": 8.77,
   "yaw": 66.91,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_81038898_9F52_84CE_41DF_5A4EB4F0671A",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.35,
   "yaw": 90.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4, this.camera_1C43DAE8_9F75_844E_41DC_CE7DECA9F6C7); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E29499C_9F75_84C6_41E2_AF7E74CAC21D",
   "pitch": -30.85,
   "hfov": 9.35,
   "yaw": 90.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A6F4414B_9FF6_8442_41E3_CE6E32DEF0B3",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.11,
   "yaw": -91.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D, this.camera_1C727ADC_9F75_8446_4191_5ECFBE2F6CF7); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E28C99C_9F75_84C6_41D3_04EAC7711C8C",
   "pitch": -21.93,
   "hfov": 10.11,
   "yaw": -91.09,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A763C4D6_9FF7_8C42_41D6_9402646ED2A7",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.55,
   "yaw": -7.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_92881847_9EE4_96AB_41C8_82F990447AB3, this.camera_1AE31BFA_9F75_8442_41C3_2DF35B03783E); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_90D14241_9F4F_87BE_41C6_981B10EB3C77",
   "pitch": -14.38,
   "hfov": 10.55,
   "yaw": -7.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9182E052_9EEC_96A5_41C1_2B6EA1EE184F",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.5,
   "yaw": 59.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B, this.camera_1AF33C05_9F75_83C6_41C9_4AABDAE1205B); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_90D12241_9F4F_87BE_41C2_72D4B55D85BA",
   "pitch": -15.47,
   "hfov": 10.5,
   "yaw": 59.09,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_91D8A31C_9EEC_9ADE_41D7_9C216F33B92D",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.23,
   "yaw": 172.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785, this.camera_1AC11C10_9F75_83DE_41E2_B007A35EE6E6); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_90EEF241_9F4F_87BE_41D3_5A09C20CBE64",
   "pitch": -20.14,
   "hfov": 10.23,
   "yaw": 172.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_91A20356_9EEC_9AAA_41B3_64D792CC54B6",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.06,
   "yaw": 54.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE, this.camera_13C3C0F8_9F75_844E_41E2_F16163DA1181); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842532CB_9F73_8442_4181_FB98FCC46FB7",
   "pitch": -33.73,
   "hfov": 9.06,
   "yaw": 54.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8A06EEAA_9F7D_9CC2_41DC_9DFD4A14D829",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.94,
   "yaw": 138.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3, this.camera_13E290E0_9F75_847E_41DC_6E8577881BDE); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842552CB_9F73_8442_41E1_7293D676F9CF",
   "pitch": -34.9,
   "hfov": 8.94,
   "yaw": 138.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_887FFF4B_9F72_FC41_41DC_08B31D1EC85B",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.87,
   "yaw": -36.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA, this.camera_13F000EC_9F75_8446_41E1_76475765D649); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E4CE98C_9F75_84C6_41D2_A193BCB04429",
   "pitch": -25.01,
   "hfov": 9.87,
   "yaw": -36.8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B73F638A_9FB5_84C2_41D2_DD7112753BE8",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.36,
   "yaw": 157.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC, this.camera_1B123BEF_9F75_8442_41DA_18F08DF9F73E); this.mainPlayList.set('selectedIndex', 73)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0C89B3_9F75_84C2_41D5_A0893D4A8323",
   "pitch": -39.91,
   "hfov": 8.36,
   "yaw": 157.1,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F657A020_9F52_83FE_41D0_9DBA149C2721",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.96,
   "yaw": 115.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149, this.camera_1747CE83_9F75_9CC2_41D2_1CAAEC68D8A3); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E567992_9F75_84C2_41CB_A03185E66C26",
   "pitch": -34.69,
   "hfov": 8.96,
   "yaw": 115.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BDC0D572_9FB3_8C42_4195_709253C8BEDC",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.74,
   "yaw": -49.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736, this.camera_17740E79_9F75_9C4E_41DE_5F466CAEDCA6); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E561992_9F75_84C2_41B4_E1EAE95A59DB",
   "pitch": -26.59,
   "hfov": 9.74,
   "yaw": -49.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BD568DC5_9FB2_9C46_41CB_9EDEB221CC8D",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.5,
   "yaw": -34.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C, this.camera_18C10D7A_9F75_9C42_41D1_C2D72816169D); this.mainPlayList.set('selectedIndex', 75)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E11D9B5_9F75_84C6_41D5_BEA59ADB7D3E",
   "pitch": -38.74,
   "hfov": 8.5,
   "yaw": -34.88,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F2167820_9F55_83FE_41E3_210A8416CE34",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.98,
   "yaw": -144.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D, this.camera_18D07D85_9F75_9CC6_41BC_C8C531E9DE7F); this.mainPlayList.set('selectedIndex', 77)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E1129B5_9F75_84C6_41DF_746567873210",
   "pitch": -42.93,
   "hfov": 7.98,
   "yaw": -144.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EE00C54F_9F52_8C42_4138_D37A673EBE3A",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.26,
   "yaw": 64.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -48.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575, this.camera_1BFC4B40_9F75_85BE_41CE_69F0377010AD); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842482CB_9F73_8442_4192_B764A2FC4A80",
   "pitch": -48.21,
   "hfov": 7.26,
   "yaw": 64.58,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8FF402AD_9F5E_84C6_41D7_590DEDDE199B",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.02,
   "yaw": -131.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E, this.camera_1BCA2B4B_9F75_8442_41D1_A05868C44F46); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842432CB_9F73_8442_41DD_A5E16209B7A8",
   "pitch": -42.59,
   "hfov": 8.02,
   "yaw": -131.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8FEC3C08_9F5E_83CE_41BD_8A1B3236B91D",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.06,
   "yaw": 13.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E, this.camera_15AA4FB1_9F75_9CDE_41BD_68F721BBFA05); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E2D499F_9F75_84C2_41E1_145C172BD984",
   "pitch": -33.73,
   "hfov": 9.06,
   "yaw": 13.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A30A0012_9FF2_83C2_41C4_335C5CBA77DB",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.39,
   "yaw": 148.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB, this.camera_15BDEFBC_9F75_9CC6_41BB_587C71A907AB); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E2CC9A0_9F75_84FE_41D6_318D8A804562",
   "pitch": -30.51,
   "hfov": 9.39,
   "yaw": 148.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A233A9EA_9FF3_8442_41DE_22C4FE9A1B61",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.98,
   "yaw": -98.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604, this.camera_158DCFC7_9F75_9C42_41D7_CD17AE0F55A6); this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E2C49A0_9F75_84FE_41E3_F55287969AB5",
   "pitch": -23.71,
   "hfov": 9.98,
   "yaw": -98.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DE5ABFA4_9FF5_9CC6_41E0_A039C8786533",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.78,
   "yaw": -92.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_92881847_9EE4_96AB_41C8_82F990447AB3, this.camera_14A6305E_9F75_8442_41E2_BAEBCF3A3443); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_91A3E206_9EED_9AAA_41DF_8D45866BB3CF",
   "pitch": -8.34,
   "hfov": 10.78,
   "yaw": -92.6,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9304B54E_9EE4_9EBA_41BC_1CB672EEB3DB",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.34,
   "yaw": 169.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6, this.camera_14B7B068_9F75_844E_41C1_5CCF0399F54E); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_90D06241_9F4F_87BE_41DC_E6BA1426FAE8",
   "pitch": -18.43,
   "hfov": 10.34,
   "yaw": 169.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_91AD0D7D_9EFB_895F_41A2_33DD143F92A4",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.43,
   "yaw": -110.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC, this.camera_186EFDC3_9F75_9C42_41DD_7D9CFCADB237); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E57E991_9F75_84DE_41E1_0A7C34432479",
   "pitch": -30.03,
   "hfov": 9.43,
   "yaw": -110.45,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BF52B94C_9F4D_8446_41DE_0DED26B411B6",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.79,
   "yaw": 49.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF, this.camera_187C5DCD_9F75_9C46_41D7_809077C0B9D0); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E578991_9F75_84DE_41D2_646A225FE91F",
   "pitch": -36.2,
   "hfov": 8.79,
   "yaw": 49.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_80CD2376_9F4E_8443_4191_B011FF56F4D5",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9,
   "yaw": -22.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423, this.camera_1C0EEB20_9F75_85FE_4197_84D6704869FB); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E570991_9F75_84DE_41D1_2D48976C417E",
   "pitch": -34.32,
   "hfov": 9,
   "yaw": -22.52,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BE735E47_9F4F_BC42_41D9_561F0165D5A6",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.22,
   "yaw": 72.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5, this.camera_1C3F1B15_9F75_85C6_41DA_60485B5D7774); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E56A991_9F75_84DE_41DE_9972A5B779E6",
   "pitch": -32.22,
   "hfov": 9.22,
   "yaw": 72.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B90A0902_9FB5_85C2_41D8_17EE16B58C0D",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.46,
   "yaw": 53.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E, this.camera_143200C1_9F75_84BE_41C1_5A59A8794D78); this.mainPlayList.set('selectedIndex', 61)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3B49A8_9F75_84CE_41E1_D5C3E54130BD",
   "pitch": -29.75,
   "hfov": 9.46,
   "yaw": 53.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CEEE58A3_9FD5_84C2_41C6_8026DF4B7BCB",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.63,
   "yaw": 137.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3, this.camera_1422A0B6_9F75_84C2_41D3_92906C24BE5B); this.mainPlayList.set('selectedIndex', 63)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3AA9A8_9F75_84CE_41DF_250FBE6A98D7",
   "pitch": -27.83,
   "hfov": 9.63,
   "yaw": 137.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CD0F1B10_9FD3_85DE_41E0_B1A12A867D68",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.99,
   "yaw": 76.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B, this.camera_154B0FF2_9F75_9C42_419B_5AEE4A39A6A2); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E210997_9F75_84C2_41C8_96942F92E461",
   "pitch": -34.35,
   "hfov": 8.99,
   "yaw": 76.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B1BFD592_9FD2_8CC2_41C2_4C12B0597498",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.86,
   "yaw": -106.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC16922_9F72_85C2_41B5_473076A000E6, this.camera_157BBFE7_9F75_9C42_41D0_DE7F0251108F); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E5E2997_9F75_84C2_41DC_8CE9CD0E0565",
   "pitch": -35.58,
   "hfov": 8.86,
   "yaw": -106.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B147C4D3_9FD3_8C42_41E2_648AA2FE0B4B",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.83,
   "yaw": 167.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0, this.camera_1A8C2C46_9F75_9C42_41E1_72F26C48ACE5); this.mainPlayList.set('selectedIndex', 72)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E1589B7_9F75_84C2_41E2_F7016A57770D",
   "pitch": -35.86,
   "hfov": 8.83,
   "yaw": 167.33,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_ED69354F_9F5E_8C42_41E2_EB67455D509F",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.59,
   "yaw": 76.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 80)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E1519B8_9F75_84CE_41E2_E9FFFF2F68CF",
   "pitch": -28.38,
   "hfov": 9.59,
   "yaw": 76.04,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E9CF66D7_9F5D_8C42_41B3_92870DC87759",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.47,
   "yaw": -88.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1, this.camera_1ABEBC3B_9F75_83C2_41E3_CEFEC93C6A5D); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E598993_9F75_84C2_41C8_E1CF921DDA93",
   "pitch": -29.68,
   "hfov": 9.47,
   "yaw": -88.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BCFE514C_9FBD_8446_41CD_6C2A635BA5FC",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.39,
   "yaw": 94.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A, this.camera_1AAEFC30_9F75_83DE_41D7_F6F31459B50A); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E590993_9F75_84C2_41C4_36F8C5250040",
   "pitch": -30.44,
   "hfov": 9.39,
   "yaw": 94.02,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BACC2A9E_9FBE_84C2_4168_BA3E66C7CF62",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.06,
   "yaw": -12.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5, this.camera_1C1F1B2B_9F75_85C2_41BC_B7F59B28EF7A); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E2A999F_9F75_84C2_41D9_7B9B4AF58515",
   "pitch": -22.54,
   "hfov": 10.06,
   "yaw": -12.02,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A2871C04_9FF2_83C6_41DF_C8A17A171932",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.13,
   "yaw": -112.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE, this.camera_1BEC7B36_9F75_85C2_41DC_C4E7B8E9B582); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E2DE99F_9F75_84C2_41BB_114193504FC8",
   "pitch": -21.58,
   "hfov": 10.13,
   "yaw": -112.99,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A3EF68BE_9FFE_84C2_41DA_50405AE5A219",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.01,
   "yaw": 167.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6, this.camera_1B05CBE4_9F75_8446_4194_6E82DA173146); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_90EE4241_9F4F_87BE_4191_78DF7B98A673",
   "pitch": -23.3,
   "hfov": 10.01,
   "yaw": 167.81,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8E899C44_9EE5_8EAE_41DD_94AD0089CE2A",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.47,
   "yaw": -6.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2, this.camera_1B344BD9_9F75_8441_41C7_E4EF75D2970B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_90EE0241_9F4F_87BE_41D2_850572F83AF5",
   "pitch": -16.09,
   "hfov": 10.47,
   "yaw": -6.6,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9142CD3E_9EE7_8EDA_41B8_F89341FD285F",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.95,
   "yaw": 73.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74, this.camera_18E01D65_9F75_9C46_41B0_A255F7690AE6); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E5F1996_9F75_84C2_41B3_D7E585112270",
   "pitch": -23.99,
   "hfov": 9.95,
   "yaw": 73.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B3934714_9FCF_8DC6_41D2_5BD2AC2CCC13",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.47,
   "yaw": -100.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B, this.camera_18F3AD70_9F75_9C5E_41DB_4F1246695CBB); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E5E8996_9F75_84C2_41D7_EACE2D7042C4",
   "pitch": -29.61,
   "hfov": 9.47,
   "yaw": -100.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B01AA3D2_9FCE_8442_41C5_819BE2935376",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.1,
   "yaw": 73.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6, this.camera_1C620AD0_9F75_845E_41BF_B2825A751D44); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842952CB_9F73_8442_41E3_8965CA5517A7",
   "pitch": -33.39,
   "hfov": 9.1,
   "yaw": 73.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8D68CE81_9F55_9CBE_41DA_5B17250D1318",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.49,
   "yaw": -108.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6, this.camera_1C95DAC4_9F75_8446_4167_B23BA122C15D); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842AF2CB_9F73_8442_41C3_B2540AB7A061",
   "pitch": -38.81,
   "hfov": 8.49,
   "yaw": -108.04,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8C71F0ED_9F55_8446_41E3_706F949F62CB",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.75,
   "yaw": -40.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6, this.camera_17350EA3_9F75_9CC2_41E1_4C9AB34AF110); this.mainPlayList.set('selectedIndex', 67)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E05F9AD_9F75_84C6_41C4_39202CAB4FD5",
   "pitch": -26.46,
   "hfov": 9.75,
   "yaw": -40.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FD2D0ABD_9FB6_84C6_41D8_A4A8CA9897FD",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.68,
   "yaw": 63.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E, this.camera_17023EAC_9F75_9CC7_41D6_F870A8232B03); this.mainPlayList.set('selectedIndex', 61)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0559AE_9F75_84C2_41E0_D200FD0E1CD6",
   "pitch": -27.28,
   "hfov": 9.68,
   "yaw": 63.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C4D27C69_9FB6_9C4E_4182_1CB8FBBC7D67",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.93,
   "yaw": -52.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571, this.camera_1D1AFA6B_9F75_8442_41DA_6D1DD945986D); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E53D98F_9F75_84C2_41DD_4CD5A920EBAC",
   "pitch": -34.97,
   "hfov": 8.93,
   "yaw": -52.45,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_830DC5B0_9F5D_8CDE_41C0_ED87E74B076D",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.79,
   "yaw": -134.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC09E63_9F72_9C42_41D4_483C11411846, this.camera_1D3D0A56_9F75_8443_41DA_9EEB34E9D583); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E53698F_9F75_84C2_41CD_4406BFE8B797",
   "pitch": -36.2,
   "hfov": 8.79,
   "yaw": -134.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_831DCE88_9F5F_9CCE_41E0_9C7D8BEC2DAF",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.03,
   "yaw": 125.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149, this.camera_1D0ACA60_9F75_847E_41C9_4020B77E8894); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E52E98F_9F75_84C2_41E1_F7808D5A3892",
   "pitch": -42.52,
   "hfov": 8.03,
   "yaw": 125.73,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8251C8CD_9F52_8446_41D7_ECD9EC85905A",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.78,
   "yaw": -86.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A, this.camera_13BE8123_9F75_85C2_41D7_D50548C60D50); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E5BA994_9F75_84C6_41D1_CF0B57D6253B",
   "pitch": -26.18,
   "hfov": 9.78,
   "yaw": -86.42,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B95EF9E5_9FB3_8446_41D8_300715F8A478",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.43,
   "yaw": 160.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF, this.camera_13AEC118_9F75_85CE_41D9_ED5E5196FF5E); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E5B3994_9F75_84C6_41E2_DD48421B457B",
   "pitch": -30.03,
   "hfov": 9.43,
   "yaw": 160.12,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B99CFCD5_9FB2_BC46_41C9_901681A89C8D",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.89,
   "yaw": 73.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA, this.camera_1391D12E_9F75_85C2_41DA_9C3542CD11CD); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E5AC994_9F75_84C6_41DE_77174E52C0FD",
   "pitch": -24.74,
   "hfov": 9.89,
   "yaw": 73.78,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B9530C89_9FB6_9CCE_4190_52527B53BFFB",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9,
   "yaw": -163.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C, this.camera_16C38ED7_9F75_9C42_41BB_D45AC2DE0B60); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E4E398D_9F75_84C6_41D7_F72CC1BF2F2F",
   "pitch": -34.28,
   "hfov": 9,
   "yaw": -163.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8604242E_9F52_83C2_41DD_AA926E8F6FFA",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.48,
   "yaw": 12.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9, this.camera_16D3DEE1_9F75_9C7E_41DC_293036D2D677); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E51F98D_9F75_84C6_41C6_A006914278FD",
   "pitch": -29.54,
   "hfov": 9.48,
   "yaw": 12.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8558C219_9F55_87CE_41D9_7C3FF60FE50D",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.89,
   "yaw": 74.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA, this.camera_11D55264_9F75_8446_41DC_5093D2CE0526); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E5CF995_9F75_84C6_41CE_DFBA301C2278",
   "pitch": -43.62,
   "hfov": 7.89,
   "yaw": 74.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B6339300_9FB2_85BE_41CF_9A8CE5A7426C",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.74,
   "yaw": -172.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74, this.camera_11A5026E_9F75_8442_41DF_1FEBDCF94BB0); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E5C9995_9F75_84C6_41C8_A3D7DAE008EF",
   "pitch": -36.68,
   "hfov": 8.74,
   "yaw": -172.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B5130597_9FCD_8CC2_41C9_A40C20A2D2EB",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.76,
   "yaw": 84.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9, this.camera_1BBBFB72_9F75_8442_41C0_E356A4EDEE6E); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E50B98E_9F75_84C2_41E2_934169F78D2D",
   "pitch": -36.48,
   "hfov": 8.76,
   "yaw": 84.35,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_842A960E_9F53_8FC2_41C3_8BC83EB7A097",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.31,
   "yaw": -9.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69, this.camera_1B8BCB7E_9F75_8442_41D8_3082EEC3A081); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E50298E_9F75_84C2_41D7_CDFCE54B2C77",
   "pitch": -40.32,
   "hfov": 8.31,
   "yaw": -9.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8430864F_9F52_8C42_41A1_E1CFD6661C82",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.42,
   "yaw": -96.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC16922_9F72_85C2_41B5_473076A000E6_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05, this.camera_17F85E23_9F75_9FC2_41D7_B73DB2D2D575); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E21A998_9F75_84CE_41CD_8C4E2A7CC935",
   "pitch": -39.36,
   "hfov": 8.42,
   "yaw": -96.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B013ED0D_9FD2_9DC6_41CE_C137AA4F0FBC",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.29,
   "yaw": 4.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC16922_9F72_85C2_41B5_473076A000E6_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149, this.camera_17C9CE2E_9F75_9FC2_41DC_A738F6C3C029); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E213998_9F75_84CE_41DA_6A2338A2E1C1",
   "pitch": -40.46,
   "hfov": 8.29,
   "yaw": 4.18,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B0183BCD_9FD5_8446_41D5_BCA6DAB3497D",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.74,
   "yaw": -29.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB, this.camera_159ACFD1_9F75_9C5E_41D7_CB1150B4F626); this.mainPlayList.set('selectedIndex', 84)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E1A69BC_9F75_84C6_41E0_D221D730CEB7",
   "pitch": -36.61,
   "hfov": 8.74,
   "yaw": -29.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1D9F6FA2_9F4D_9CC2_41E1_6BC9177EBD3F",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.08,
   "yaw": -118.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C, this.camera_156A7FDC_9F75_9C46_41B4_A2A64507AB85); this.mainPlayList.set('selectedIndex', 82)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E1DB9BD_9F75_84C6_41CD_194C5CFD614C",
   "pitch": -33.59,
   "hfov": 9.08,
   "yaw": -118.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E224E95F_9F4D_8442_41C3_65D4F9FCEF26",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.45,
   "yaw": -149.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650, this.camera_17B6BE4E_9F75_9C42_41D4_8B3601682012); this.mainPlayList.set('selectedIndex', 64)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3EE9AA_9F75_84C2_41BC_B3FC12300147",
   "pitch": -29.89,
   "hfov": 9.45,
   "yaw": -149.43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C5695344_9FCE_8446_41E1_8B650B3A9684",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.04,
   "yaw": 15.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428, this.camera_17976E63_9F75_9C42_41E1_3881D44AE8FE); this.mainPlayList.set('selectedIndex', 66)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3E49AA_9F75_84C2_41C0_1B6FB9C151D5",
   "pitch": -22.82,
   "hfov": 10.04,
   "yaw": 15.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CA7DFFFA_9FCD_9C42_41D4_F69B3E6801B7",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.81,
   "yaw": -62.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C, this.camera_17867E58_9F75_9C4E_41CF_3973AB13958A); this.mainPlayList.set('selectedIndex', 69)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E01D9AB_9F75_84C2_41E0_4418226A6D5A",
   "pitch": -25.84,
   "hfov": 9.81,
   "yaw": -62.19,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C07D390A_9FB2_85C2_41D0_4A97A953F429",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.58,
   "yaw": 173.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -45.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F, this.camera_17673E6E_9F75_9C42_41C5_F487D14BC3E4); this.mainPlayList.set('selectedIndex', 58)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3689A5_9F75_84C6_41C2_601B29ED0D58",
   "pitch": -45.95,
   "hfov": 7.58,
   "yaw": 173.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D557E82E_9FD2_83C2_41DC_97CF589C94AF",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.36,
   "yaw": -3.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3, this.camera_1B997B8B_9F75_84C2_41E3_4B859AB094B2); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842442CB_9F73_8442_41E1_774E751557F5",
   "pitch": -30.78,
   "hfov": 9.36,
   "yaw": -3.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8BF46A77_9F7F_8442_41E3_C3F6233F496E",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.82,
   "yaw": 163.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8, this.camera_1B698B99_9F75_84CE_41E2_945CBF400284); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842582CB_9F73_8442_41E3_5A5762492ABE",
   "pitch": -35.93,
   "hfov": 8.82,
   "yaw": 163.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8A03D65C_9F7E_8C46_41BA_AABC0932B437",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.78,
   "yaw": 67.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57, this.camera_1C311B0B_9F75_85C2_41CB_24FFAA4E76B2); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842F42CB_9F73_8442_41B5_255E87198125",
   "pitch": -36.34,
   "hfov": 8.78,
   "yaw": 67.6,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9034429F_9F57_84C2_41DE_778E2BEA768F",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.76,
   "yaw": 32.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67, this.camera_1412D0D6_9F75_8442_418E_85595AC1A577); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E5C1995_9F75_84C6_41C0_77E73681956B",
   "pitch": -36.48,
   "hfov": 8.76,
   "yaw": 32.73,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B498734B_9FCD_8442_41E1_7FA3ECD169AB",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.48,
   "yaw": -137.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259, this.camera_140330CB_9F75_8442_41A2_F31BE25AC558); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E5F9996_9F75_84C2_41DC_D18DE9DF6461",
   "pitch": -29.54,
   "hfov": 9.48,
   "yaw": -137.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B392C5EA_9FCE_8C42_41CC_2BCD81F98C4A",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.35,
   "yaw": 109.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1, this.camera_130A5182_9F75_84C2_41E0_846A292E5EFC); this.mainPlayList.set('selectedIndex', 62)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3A09A8_9F75_84CE_41DE_58CA777914BE",
   "pitch": -30.85,
   "hfov": 9.35,
   "yaw": 109.33,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CD114856_9FD2_8442_41DB_5D1EEB976392",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.82,
   "yaw": -80.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650, this.camera_133D3177_9F75_8442_41A7_570EB36E071D); this.mainPlayList.set('selectedIndex', 64)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3D99A9_9F75_84CE_41A7_9B5A356EA277",
   "pitch": -25.63,
   "hfov": 9.82,
   "yaw": -80.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CAAB7744_9FD2_8C46_41B0_88056A186BDB",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.83,
   "yaw": -163.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C, this.camera_131DF18D_9F75_84C6_41BD_79C3812D7175); this.mainPlayList.set('selectedIndex', 69)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3CC9A9_9F75_84CE_41D6_4EF881FBEC31",
   "pitch": -25.5,
   "hfov": 9.83,
   "yaw": -163.02,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C1B44548_9FBD_8C4E_41E1_298B756CDD73",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.12,
   "yaw": 118.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61, this.camera_16912F0D_9F75_9DC6_41E1_E90150B76D0A); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E26699B_9F75_84C2_41D3_6AE519217CDD",
   "pitch": -33.18,
   "hfov": 9.12,
   "yaw": 118.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A6CFC3AB_9FF3_84C2_41E1_46D046D13D17",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.9,
   "yaw": -39.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520, this.camera_16800F01_9F75_9DBE_41D6_43C52B26B3FD); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E29F99C_9F75_84C6_41D2_C9082E4DB8F5",
   "pitch": -24.67,
   "hfov": 9.9,
   "yaw": -39.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A7519058_9FF5_844E_41E2_F508CB1CCE16",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.29,
   "yaw": -47.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6, this.camera_1454E0AA_9F75_84C2_41B0_BDEE066CC6F3); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842992CB_9F73_8442_41C9_7FFCB0BE2614",
   "pitch": -40.46,
   "hfov": 8.29,
   "yaw": -47.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_909A233B_9F5D_85C2_41B5_7EB1EB794A10",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.42,
   "yaw": 18.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_916C0B01_9F55_85BE_41DB_67A2726334FF, this.camera_1445109E_9F75_84C2_41DA_5B6B4565139F); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842922CB_9F73_8442_41BF_3A23DB001D14",
   "pitch": -39.36,
   "hfov": 8.42,
   "yaw": 18.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_90E43E49_9F5E_FC4E_41D4_EAE78AD34246",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.59,
   "yaw": 94.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CD106C_9FDE_8446_41DC_15020D28732C, this.camera_128821DA_9F75_8442_41B9_237E1D075F0B); this.mainPlayList.set('selectedIndex', 70)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E09E9B0_9F75_84DE_4179_332301851F80",
   "pitch": -28.38,
   "hfov": 9.59,
   "yaw": 94.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F79E25BB_9FB2_8CC2_41DD_D2FE6F131CC0",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.04,
   "yaw": -85.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0, this.camera_129981E5_9F75_8446_41A2_45C9A0A028B0); this.mainPlayList.set('selectedIndex', 72)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0959B1_9F75_84DE_41D2_2E482BE3C7F1",
   "pitch": -22.89,
   "hfov": 10.04,
   "yaw": -85.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F92E0CD1_9F4D_BC5E_41C0_C41D95C2D094",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.2,
   "yaw": 165.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411, this.camera_1A0ADC9D_9F75_9CC6_41DE_FB1357E24084); this.mainPlayList.set('selectedIndex', 81)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E1789B9_9F75_84CE_41D5_C56C98A84EFD",
   "pitch": -41.21,
   "hfov": 8.2,
   "yaw": 165.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E9D655F2_9F55_8C42_41DF_848A9839277A",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.61,
   "yaw": -62.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485, this.camera_1A1A8CA8_9F75_9CCE_41CD_E5B4EEBF5888); this.mainPlayList.set('selectedIndex', 83)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E16D9BA_9F75_84C2_41BC_03994AA11EB8",
   "pitch": -28.1,
   "hfov": 9.61,
   "yaw": -62.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E3FDA150_9F56_845F_41CB_F97E07824686",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.48,
   "yaw": 37.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E, this.camera_1A3B3C93_9F75_9CC2_41A2_B2C2AF11CD1A); this.mainPlayList.set('selectedIndex', 85)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E1619BA_9F75_84C2_41C0_0E13D88D972E",
   "pitch": -29.54,
   "hfov": 9.48,
   "yaw": 37.12,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1EBDEA9F_9F56_84C2_41DF_F86AD15736D4",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.57,
   "yaw": -92.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736, this.camera_17554E8E_9F75_9CC2_41DE_BB7B95F52028); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E58B993_9F75_84C2_41D5_57896BFD72AD",
   "pitch": -28.52,
   "hfov": 9.57,
   "yaw": -92.46,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BA38B2F2_9FBD_8442_41DA_5A7D37972997",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.93,
   "yaw": 85.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5, this.camera_17253E98_9F75_9CCE_4191_D54A95044BED); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E583993_9F75_84C2_41D8_1FB3E1A24531",
   "pitch": -24.33,
   "hfov": 9.93,
   "yaw": 85.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B9C8ECFA_9FB2_FC42_41B1_97A2D990F9DF",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.1,
   "yaw": -0.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B2967D_9FD2_8C46_41D8_250940324901, this.camera_19B9CCE6_9F75_9C42_41DC_8AEB013FBA9C); this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3039A2_9F75_84C2_41C3_05C61A61FDC9",
   "pitch": -22.06,
   "hfov": 10.1,
   "yaw": -0.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DB45B127_9FCF_85C2_41CC_7B2E0232E930",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.71,
   "yaw": -96.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D, this.camera_19A65CDC_9F75_9C46_41CE_C4107A79DF7B); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3399A2_9F75_84C2_41B6_9D85E7ABD317",
   "pitch": -27.01,
   "hfov": 9.71,
   "yaw": -96.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D9FD07CB_9FCD_8C42_41DA_389FC11691F2",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.77,
   "yaw": -122.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0, this.camera_16F27ECD_9F75_9C46_41E3_8402AC8CCB2A); this.mainPlayList.set('selectedIndex', 72)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0FC9B4_9F75_84C6_41B8_095E8E449236",
   "pitch": -25.36,
   "hfov": 8.77,
   "yaw": -122.84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F110E863_9F56_8441_41D8_636E47D03DEA",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.36,
   "yaw": 12.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A, this.camera_16E2FEC2_9F75_9C42_41CB_E5B1EA42F3B3); this.mainPlayList.set('selectedIndex', 76)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0F29B4_9F75_84C6_41D7_9C5971E6C9A2",
   "pitch": -30.78,
   "hfov": 9.36,
   "yaw": 12.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F35D81DF_9F57_8442_41E2_38F4D9F43DB8",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.02,
   "yaw": 103.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B, this.camera_1715DEB7_9F75_9CC1_41E1_24D6564A5B3E); this.mainPlayList.set('selectedIndex', 78)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0E69B5_9F75_84C6_41B8_451271821CF4",
   "pitch": -34.14,
   "hfov": 9.02,
   "yaw": 103.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F2D449AC_9F56_84C6_41DE_34A710A5DE0A",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.28,
   "yaw": 169.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42, this.camera_16415F2E_9F75_9DC2_41D4_AFB3BBD2B81C); this.mainPlayList.set('selectedIndex', 71)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0889B1_9F75_84DE_41E2_A63DD5FB5D18",
   "pitch": -31.6,
   "hfov": 9.28,
   "yaw": 169.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F91C1554_9F4E_8C46_41C7_45EAD45676AF",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.63,
   "yaw": 84.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC, this.camera_16706F22_9F75_9DC2_41C1_27B67C1EFE78); this.mainPlayList.set('selectedIndex', 73)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0BE9B1_9F75_84DE_41D2_BE11DB300270",
   "pitch": -27.83,
   "hfov": 9.63,
   "yaw": 84.35,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F8494E9A_9F4F_BCC2_41CE_108CCB6AACFE",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.15,
   "yaw": -6.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C, this.camera_1660CF18_9F75_9DCE_41D2_FA4D971CDCB2); this.mainPlayList.set('selectedIndex', 75)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0B29B2_9F75_84C2_41C9_EC4C6056C473",
   "pitch": -32.91,
   "hfov": 9.15,
   "yaw": -6.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F5DF6669_9F55_8C41_41A2_130F5E4AC2B8",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.68,
   "yaw": -101.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC, this.camera_1650CF3A_9F75_9DC2_41C1_3043C182D6AC); this.mainPlayList.set('selectedIndex', 79)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0A89B2_9F75_84C2_41D7_92C2CBF7491C",
   "pitch": -37.16,
   "hfov": 8.68,
   "yaw": -101.52,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_ED9AD995_9F5F_84C6_41D4_9185390AA176",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.16,
   "yaw": -9.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE, this.camera_1CD65A96_9F75_84C2_41C0_AC63940C24DD); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3309A3_9F75_84C2_41B2_4F73E6798E23",
   "pitch": -21.1,
   "hfov": 10.16,
   "yaw": -9.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DD92D1F9_9FF2_844E_41DB_344399259DD6",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.93,
   "yaw": 167.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D, this.camera_1CC65A8C_9F75_84C6_41DD_334B26839216); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3299A3_9F75_84C2_41D6_5032A0B8A995",
   "pitch": -24.26,
   "hfov": 9.93,
   "yaw": 167.26,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DDE01555_9FF3_8C46_41E3_A0274B993971",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.21,
   "yaw": 78.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B2967D_9FD2_8C46_41D8_250940324901, this.camera_1CA67AA1_9F75_84FE_41D8_A1ADEEBF1184); this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E35F9A3_9F75_84C2_41D7_8BDE7026F36F",
   "pitch": -20.48,
   "hfov": 10.21,
   "yaw": 78.03,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D8E7F91B_9FD2_85C2_41DA_3E66D00AEBF0",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.94,
   "yaw": -110.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3569A3_9F75_84C2_41D5_7335BAB8F89E",
   "pitch": -24.12,
   "hfov": 9.94,
   "yaw": -110.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D8314C46_9FD3_FC42_41D6_6AF91557DEBF",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.81,
   "yaw": -86.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D, this.camera_1D7E7A2B_9F75_87C2_41D2_6C1F92D23D5B); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E2A199E_9F75_84C2_41CB_F76726A23E16",
   "pitch": -25.77,
   "hfov": 9.81,
   "yaw": -86.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A5382337_9FF3_85C2_41DA_712EE4829799",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.16,
   "yaw": 161.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E, this.camera_1D4F7A36_9F75_87C2_41E3_6A089905F96E); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E2D999E_9F75_84C2_41C9_3D9AA4CA00B8",
   "pitch": -32.77,
   "hfov": 9.16,
   "yaw": 161.97,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A2A58A07_9FF3_87C2_41CB_64CBFE9C1B81",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.85,
   "yaw": -144.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6, this.camera_12174239_9F75_87CE_41E3_C1E15CAA0A26); this.mainPlayList.set('selectedIndex', 65)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0139AB_9F75_84C2_41C4_9056709B8308",
   "pitch": -25.29,
   "hfov": 9.85,
   "yaw": -144.35,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C48BE04A_9FB2_8442_41D6_9D06270B1834",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.6,
   "yaw": -38.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6, this.camera_11E67244_9F75_8446_41CB_4FFF600D389A); this.mainPlayList.set('selectedIndex', 67)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0069AB_9F75_84C2_41C5_417A02321AA1",
   "pitch": -28.24,
   "hfov": 9.6,
   "yaw": -38.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C8627582_9FB3_8CC3_41E1_2CC769AC8320",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.26,
   "yaw": -71.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531, this.camera_19024D50_9F75_9C5E_41E3_86D6BCF1510F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_90EC5241_9F4F_87BE_41C9_01CDD21B03D6",
   "pitch": -31.81,
   "hfov": 9.26,
   "yaw": -71.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8E613823_9E1B_F6EB_41CC_92746CD12360",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.67,
   "yaw": 78.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3, this.camera_1924DD3A_9F75_9DC3_41E0_8E81CF05933C); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E44A988_9F75_84CE_41CD_DE9D16A251B9",
   "pitch": -27.49,
   "hfov": 9.67,
   "yaw": 78.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8F1A262D_9E25_9AFE_41CF_22666B736A95",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.51,
   "yaw": -170.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6, this.camera_19120D5A_9F75_9C42_41C7_53C53A9F5DCB); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_90ED8241_9F4F_87BE_41B8_1BBB5961D920",
   "pitch": -29.2,
   "hfov": 9.51,
   "yaw": -170.18,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8E06BF43_9E2F_8AAA_41DA_246F2D0A3A2C",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.38,
   "yaw": 113.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AE9092FC_9FD2_8446_41E0_29143638D68B, this.camera_1934DD45_9F75_9C41_41DC_CF176F4FDD6B); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E440988_9F75_84CE_41B0_0FDF45721C16",
   "pitch": -17.74,
   "hfov": 10.38,
   "yaw": 113.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_AE836E6C_9FDD_BC46_41DC_6F9524982816",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.47,
   "yaw": -116.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444, this.camera_13A1510E_9F75_85C2_41BE_3229E98EDDE9); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E4F098D_9F75_84C6_41D6_44C3AA269120",
   "pitch": -29.61,
   "hfov": 9.47,
   "yaw": -116.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_87FA5251_9F52_845E_41D3_3B0A19C99805",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.26,
   "yaw": 60.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A, this.camera_13D17103_9F75_85C2_41E3_1BE0FEB77CC5); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E4EB98D_9F75_84C6_41CA_E57C77C97965",
   "pitch": -31.81,
   "hfov": 9.26,
   "yaw": 60.12,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8637B326_9F53_85C2_41DE_0038071D9D17",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.52,
   "yaw": -16.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485, this.camera_1D2D3A4B_9F75_8441_41DB_8D3275B68900); this.mainPlayList.set('selectedIndex', 83)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E1BF9BC_9F75_84C6_41C4_5A30A235E66E",
   "pitch": -29.06,
   "hfov": 9.52,
   "yaw": -16.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E48C8FDE_9F53_BC42_41D2_4E68BEBBA027",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.96,
   "yaw": 157.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E, this.camera_1D5D1A41_9F75_87BE_41E0_8ABDD384D11E); this.mainPlayList.set('selectedIndex', 85)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E1B39BC_9F75_84C6_41E3_56E9AE05345A",
   "pitch": -34.69,
   "hfov": 8.96,
   "yaw": 157.1,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2A80522_9F52_8DC2_41E1_B47E7BC26F2E",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.08,
   "yaw": 93.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB, this.camera_1487A073_9F75_8442_41E3_16EC298E6FCE); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E2E89A1_9F75_84FE_4195_D07F0EBC4F24",
   "pitch": -22.34,
   "hfov": 10.08,
   "yaw": 93.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DC35316F_9FF2_8442_41D3_691AC3A3F340",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.06,
   "yaw": 9.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604, this.camera_1477F094_9F75_84C6_41CA_62E23E24689D); this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E2E19A1_9F75_84FE_41E0_477AA77505F0",
   "pitch": -22.61,
   "hfov": 10.06,
   "yaw": 9.67,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DB02F922_9FCD_85C2_41BB_70086BE90C24",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.12,
   "yaw": -70.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293, this.camera_1494E07E_9F75_8442_41E0_85895E8D1C8D); this.mainPlayList.set('selectedIndex', 55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3179A1_9F75_84FE_41E1_48A33C02DC57",
   "pitch": -21.79,
   "hfov": 10.12,
   "yaw": -70.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DB420CD0_9FCE_BC5E_41CF_0FB602709351",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.89,
   "yaw": -169.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64, this.camera_14643089_9F75_84CE_41DF_C9D98F9E3BF1); this.mainPlayList.set('selectedIndex', 57)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E30D9A2_9F75_84C2_41D6_67566711FA66",
   "pitch": -24.81,
   "hfov": 9.89,
   "yaw": -169.1,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D84F4D5F_9FD6_BC42_41E0_D47DADCD1414",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9,
   "yaw": 115.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AE9092FC_9FD2_8446_41E0_29143638D68B, this.camera_14E9C034_9F75_83C7_41D3_2641C02CE35E); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E23F999_9F75_84CE_41A5_837DC2E4A6C6",
   "pitch": -34.28,
   "hfov": 9,
   "yaw": 115.58,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_ADB3C582_9FD3_8CC2_41CF_84A6EAB0AD53",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.82,
   "yaw": -68.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E, this.camera_15195029_9F75_83C1_41E2_D809405526CB); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E237999_9F75_84CE_41DB_CC94259550AD",
   "pitch": -25.7,
   "hfov": 9.82,
   "yaw": -68.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_AD718ACA_9FD2_8443_41D7_13284862B1D1",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.8,
   "yaw": 161.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428, this.camera_14D67053_9F75_8442_41D9_50250D80B3A4); this.mainPlayList.set('selectedIndex', 66)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E03C9AC_9F75_84C6_41BA_4D5593CA3AC1",
   "pitch": -25.91,
   "hfov": 9.8,
   "yaw": 161.9,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C822F766_9FB2_8C42_41CB_158CD581F481",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.33,
   "yaw": -19.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4, this.camera_14F9C03E_9F75_83C2_41E0_E78B65D812CF); this.mainPlayList.set('selectedIndex', 68)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0359AC_9F75_84C6_41DB_631B84A541B0",
   "pitch": -18.49,
   "hfov": 10.33,
   "yaw": -19.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C741EC75_9FB5_9C46_41B8_AF0614E486AA",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.05,
   "yaw": -109,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C, this.camera_14C70049_9F75_844E_41C4_BC70D4CF1293); this.mainPlayList.set('selectedIndex', 69)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0289AD_9F75_84C6_41C5_38753ECEB0F3",
   "pitch": -22.68,
   "hfov": 10.05,
   "yaw": -109,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FFD73904_9FBF_85C6_41A9_DA984BC21115",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.56,
   "yaw": -6.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -52.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B2967D_9FD2_8C46_41D8_250940324901, this.camera_1BDA6B57_9F75_8442_41D9_B68A41E3C038); this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E34F9A4_9F75_84C6_41B1_608566273FBB",
   "pitch": -52.95,
   "hfov": 6.56,
   "yaw": -6.6,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D745AAF0_9FD7_845E_41C4_46F818115348",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.35,
   "yaw": 171.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F, this.camera_1BABDB66_9F75_8442_41E3_8144DA526379); this.mainPlayList.set('selectedIndex', 58)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3449A4_9F75_84C6_41D5_6D5B6EDFF6FC",
   "pitch": -30.92,
   "hfov": 9.35,
   "yaw": 171.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6B7E16B_9FD7_8442_41A4_2252184AD8FD",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.17,
   "yaw": 149.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92881847_9EE4_96AB_41C8_82F990447AB3_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B, this.camera_1AD11C1B_9F75_83C2_41E1_F7A3769372ED); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_91AC5208_9EED_9AA6_41C7_6334DCBBD3D1",
   "pitch": -20.97,
   "hfov": 10.17,
   "yaw": 149.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_91894429_9EEB_BEE7_41E1_6B4056AF1235",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.51,
   "yaw": -33.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92881847_9EE4_96AB_41C8_82F990447AB3_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6, this.camera_1AA17C25_9F75_83C6_41BA_0158F1FC6D8E); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_90D1E241_9F4F_87BE_41E0_A68A9C21BBFB",
   "pitch": -15.2,
   "hfov": 10.51,
   "yaw": -33.44,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8ED13EAB_9EFD_8BFB_41BC_E65EF5A27B02",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.44,
   "yaw": -89.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC09E63_9F72_9C42_41D4_483C11411846, this.camera_137D014D_9F75_8446_41C6_EE9BAC45782A); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E55A990_9F75_84DE_41D7_5C6CE3D96CD2",
   "pitch": -29.96,
   "hfov": 9.44,
   "yaw": -89.03,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_812545BD_9F52_8CC6_41E2_FDEA56515368",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.02,
   "yaw": 77.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC, this.camera_134CC157_9F75_8442_41DC_B1036118DD97); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E555990_9F75_84DE_41E1_B39063B54553",
   "pitch": -34.07,
   "hfov": 9.02,
   "yaw": 77.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_81CF39A7_9F52_84C2_41C3_9DCA3DF4DFCB",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.24,
   "yaw": 0.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_91927E47_9E1C_8AAA_41DC_163183D563B1, this.camera_18BE1DA4_9F75_9CC6_41E2_363C4EE016EF); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_90ED4241_9F4F_87BE_41C9_7C00B7E30793",
   "pitch": -31.95,
   "hfov": 9.24,
   "yaw": 0.33,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8E5690F1_9E2C_9767_41E2_D10C795BC060",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.45,
   "yaw": 70.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57, this.camera_18A02D8F_9F75_9CC2_41E1_69BCEB02A412); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_90ED3241_9F4F_87BE_41D7_7AABF93F2245",
   "pitch": -39.15,
   "hfov": 8.45,
   "yaw": 70.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8E53C8EC_9E3F_B77D_41C1_743731B81603",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.29,
   "yaw": 149.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE, this.camera_18B1DD9A_9F75_9CC2_41DA_10B14125C195); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842E72CB_9F73_8442_41AA_38F189088F7A",
   "pitch": -31.54,
   "hfov": 9.29,
   "yaw": 149.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8B4924A7_9F7D_8CC2_41D9_11099227C1BC",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.15,
   "yaw": -111.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E46C989_9F75_84CE_41D6_750B39703DD8",
   "pitch": -21.38,
   "hfov": 10.15,
   "yaw": -111.27,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_AFE2E4E0_9FDE_8C7E_41DC_D53828DF7DB3",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.84,
   "yaw": 151.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3, this.camera_184C7DD7_9F75_9C42_41DF_F3B1CE6DE376); this.mainPlayList.set('selectedIndex', 63)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3C29A9_9F75_84CE_41CB_FA1FB9F9A3F2",
   "pitch": -35.79,
   "hfov": 8.84,
   "yaw": 151.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CB7B74B3_9FCD_8CC2_41D0_A2C77065B9BE",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.69,
   "yaw": -104.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6, this.camera_185D9DE1_9F75_9C7E_41C7_39B40CADBCD3); this.mainPlayList.set('selectedIndex', 65)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E3FB9AA_9F75_84C2_41E1_22BBA811D921",
   "pitch": -27.21,
   "hfov": 9.69,
   "yaw": -104.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CB1DD3E1_9FCE_847E_41D0_24CC9A2529B3",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.83,
   "yaw": 29.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A, this.camera_12FAC1A2_9F75_84C3_41E2_8C3F6EC71DE8); this.mainPlayList.set('selectedIndex', 76)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E1069B6_9F75_84C2_41CC_B4051BC48A0E",
   "pitch": -25.56,
   "hfov": 9.83,
   "yaw": 29.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EFFA4D94_9F53_BCC6_41DB_B93CB6A7DFA3",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.82,
   "yaw": -51.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B, this.camera_12EAF198_9F75_84CE_41B1_EA25D18542F7); this.mainPlayList.set('selectedIndex', 78)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E13A9B6_9F75_84C2_41DF_83D9948E0990",
   "pitch": -25.63,
   "hfov": 9.82,
   "yaw": -51.28,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EB78D187_9F52_84C2_41DB_8FABB4A42933",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.16,
   "yaw": -0.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575, this.camera_180ADE01_9F75_9FBE_41C9_7746CF06AB82); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842882CB_9F73_8442_41B7_7B199DBA9C3D",
   "pitch": -41.49,
   "hfov": 8.16,
   "yaw": -0.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9012C14D_9F53_8446_41DB_BAD4F2C9F478",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.89,
   "yaw": -142.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D, this.camera_181B0E0D_9F75_9FC6_41D6_34EA3BE3AF13); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842822CB_9F73_8442_41E0_628B3F8AED75",
   "pitch": -35.31,
   "hfov": 8.89,
   "yaw": -142.43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8D359AE3_9F56_8442_41DB_B1890C1A79AF",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.28,
   "yaw": 123.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -48.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_91927E47_9E1C_8AAA_41DC_163183D563B1, this.camera_17E86E18_9F75_9FCE_41CF_21494B926B25); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842842CB_9F73_8442_41BB_A64EE9D8F879",
   "pitch": -48.08,
   "hfov": 7.28,
   "yaw": 123.33,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8DBFF70A_9F56_8DC2_41E3_34D3C808990C",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.01,
   "yaw": -119.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E1459B8_9F75_84CE_4181_FAB4405DDB18",
   "pitch": -34.21,
   "hfov": 9.01,
   "yaw": -119.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EB776A12_9F52_87C2_41A3_F98DAAB432E3",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.92,
   "yaw": -23.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -57.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411, this.camera_1D605A09_9F75_87CE_41D5_B402958172A0); this.mainPlayList.set('selectedIndex', 81)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E15B9B8_9F75_84CE_41A7_48CD84F1D406",
   "pitch": -57.07,
   "hfov": 5.92,
   "yaw": -23.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EBD608E6_9F53_8442_4197_7C8E32BA4157",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.07,
   "yaw": -139.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A, this.camera_15CD0F9A_9F75_9CC2_41DE_9D05A941A3B0); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E51698E_9F75_84C2_41DA_A9B31078A9A7",
   "pitch": -33.66,
   "hfov": 9.07,
   "yaw": -139.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_85F6E40C_9F56_83C6_41D6_A7249EF5ED87",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.78,
   "yaw": 33.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571, this.camera_15DCAFA6_9F75_9CC2_4154_69081FE1B2C6); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E51098E_9F75_84C2_41B3_B75071FFA0DC",
   "pitch": -36.34,
   "hfov": 8.78,
   "yaw": 33.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8457E6A8_9F57_8CCE_41D6_8D4AD16E0031",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.63,
   "yaw": -90.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE, this.camera_1B244BCC_9F75_8447_41D1_336789E565E2); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E2FA9A0_9F75_84FE_41C8_8F3591FD9FA0",
   "pitch": -27.83,
   "hfov": 9.63,
   "yaw": -90.13,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A00B4E6D_9FF6_BC46_41D2_6315FD343C18",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.18,
   "yaw": 155.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0B2967D_9FD2_8C46_41D8_250940324901, this.camera_1B546BC1_9F75_8441_41D4_05121C832A82); this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E2F39A0_9F75_84FE_41DB_568806B26BB9",
   "pitch": -32.56,
   "hfov": 9.18,
   "yaw": 155.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DDE97A0E_9FF7_87C2_41DB_D7C836878C2B",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.81,
   "yaw": 45.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D, this.camera_1C53EAF4_9F75_8446_41D4_B20A2152F8FC); this.mainPlayList.set('selectedIndex', 77)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E1309B6_9F75_84C2_41CB_9F8FA835D999",
   "pitch": -36.07,
   "hfov": 8.81,
   "yaw": 45.09,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EE6A92BB_9F5D_84C2_41A9_CB8B726D606F",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.55,
   "yaw": -63.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C, this.camera_1C217AFF_9F75_8442_41C8_BF6810F277A4); this.mainPlayList.set('selectedIndex', 75)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E1279B7_9F75_84C2_41DD_2FE221BED595",
   "pitch": -38.26,
   "hfov": 8.55,
   "yaw": -63.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EED20709_9F5E_8DCE_419C_B5967D9118B8",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.24,
   "yaw": -15.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3, this.camera_11F7C24F_9F75_8442_41A5_36D5788040C2); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_90EA9241_9F4F_87BE_41BD_4985E273FD5F",
   "pitch": -31.95,
   "hfov": 9.24,
   "yaw": -15.18,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8F84D735_9E3C_9AEE_41DA_31916375AC97",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.56,
   "yaw": -126.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E, this.camera_11C7C259_9F75_844E_41B4_A8D05F6ACC82); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_842F22CB_9F73_8442_41BA_5612A848B811",
   "pitch": -38.19,
   "hfov": 8.56,
   "yaw": -126.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_92A09886_9F56_84C2_41B3_3406711ADD67",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.77,
   "yaw": -169.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0, this.camera_16A33EEC_9F75_9C46_41D8_D79554134D6E); this.mainPlayList.set('selectedIndex', 72)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0DF9B3_9F75_84C2_41E2_1FA9ECCFE44E",
   "pitch": -36.41,
   "hfov": 8.77,
   "yaw": -169.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F40669E0_9F4E_847E_41B3_59090318E18C",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.46,
   "yaw": -61.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672, this.camera_16B06EF6_9F75_9C42_41BB_1E5F91AD37D4); this.mainPlayList.set('selectedIndex', 74)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E0D49B3_9F75_84C2_41CF_CBE0AFEADF50",
   "pitch": -29.75,
   "hfov": 9.46,
   "yaw": -61.44,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F6B6D1A5_9F4D_84C6_41BC_433F0FD476D2",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.14,
   "yaw": -10.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3, this.camera_1A6FFC5C_9F75_9C46_41D8_C71D2206B72B); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E4FD98D_9F75_84C6_41D8_C61EA388DD0F",
   "pitch": -41.69,
   "hfov": 8.14,
   "yaw": -10.17,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_88185229_9F4E_87CE_41E2_93158AF9970E",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.07,
   "yaw": 147.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C, this.camera_1A9FCC51_9F75_9C5E_41D5_37DBEEDFD8B1); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E4F498D_9F75_84C6_41C4_E4CA6889F970",
   "pitch": -42.17,
   "hfov": 8.07,
   "yaw": 147.42,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_87225FD3_9F4D_FC42_41E1_82B03A6E18D3",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.78,
   "yaw": -175.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945, this.camera_12B891CF_9F75_8442_41E3_D5C05A2FE7D2); this.mainPlayList.set('selectedIndex', 80)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E14F9B9_9F75_84CE_41D2_532654752404",
   "pitch": -36.27,
   "hfov": 8.78,
   "yaw": -175.03,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E7C8C778_9F52_8C4E_41D8_0E2350A8A045",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.38,
   "yaw": 2.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C, this.camera_12AB31C4_9F75_8446_41C3_796F7226D755); this.mainPlayList.set('selectedIndex', 82)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E1429B9_9F75_84CE_41CD_F79B0431CA6B",
   "pitch": -30.57,
   "hfov": 9.38,
   "yaw": 2.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA321140_9F52_85BE_41C3_BE08D445E499",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.65,
   "yaw": 158.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5, this.camera_1268E1EF_9F75_8442_41D4_55295BB5656B); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E5A2994_9F75_84C6_41C7_AFD30DB3D49B",
   "pitch": -37.44,
   "hfov": 8.65,
   "yaw": 158.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B87CB1C4_9FB6_8446_41BD_FA448EED736B",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.59,
   "yaw": 81.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8, this.camera_127861FA_9F75_8442_41D3_7CD67DAEA266); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E5DD994_9F75_84C6_41B7_2D7D620483F3",
   "pitch": -28.38,
   "hfov": 9.59,
   "yaw": 81.46,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B737203E_9FB2_83C2_41D6_3DCE07E9FA08",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.8,
   "yaw": -88.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67, this.camera_1249F205_9F75_87C6_41C0_D7D86B48ABDE); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E5D6995_9F75_84C6_41CA_90D97C4BF777",
   "pitch": -44.3,
   "hfov": 7.8,
   "yaw": -88.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B628F35D_9FB3_8446_41D3_97088AB18597",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.73,
   "yaw": -114.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C, this.camera_1977ED17_9F75_9DC2_41AA_AFCB8CDA5EAA); this.mainPlayList.set('selectedIndex', 82); this.mainPlayList.set('selectedIndex', 84)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E1949BB_9F75_84C2_4175_878E7321FEE3",
   "pitch": -26.73,
   "hfov": 9.73,
   "yaw": -114.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E6145CC8_9F55_7C4E_41D5_651CD6293449",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11,
   "yaw": 166.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1E1809BB_9F75_84C2_41D2_999B0DD06C52",
   "pitch": -27.67,
   "hfov": 11,
   "yaw": 166.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E3AAE006_9F52_83C2_41BD_4C44E7DA4D03",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E39C9A6_9F75_84C2_41D4_2CA30F8DB41B",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3939A7_9F75_84C2_41DE_B13666A0F76D",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3889A7_9F75_84C2_41CB_2DFC93B3A50E",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CEA02F_9FDF_83C2_41E1_8165EBA5ED6E_1_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3819A7_9F75_84C2_41D0_9715A322CC92",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842A02CB_9F73_8442_41D8_4C0369154D47",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_916C3418_9F55_83CE_41D1_B97C470A7EF6_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842BA2CB_9F73_8442_41DE_12D190B08816",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0789AF_9F75_84C2_41E0_00D1284D43AF",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0719B0_9F75_84DE_41CC_73C441756EC4",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CD106C_9FDE_8446_41DC_15020D28732C_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0689B0_9F75_84DE_41D1_53E3D20682EB",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_90EFE241_9F4F_87BE_41D2_3B5581E56858",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_90DF8168_9EEC_9966_41D1_55DBD7FC39E2_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_90EFA241_9F4F_87BE_41D9_EEB48FA11EE4",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E04B9AE_9F75_84C2_41DA_4589857E49DA",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E07E9AE_9F75_84C2_41CC_C370A358CC48",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0759AF_9F75_84C2_41D7_9CBBCE07268C",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CD1B46_9FDE_8443_41A2_AC4C4219641C_1_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0459AF_9F75_84C2_41D6_58D0EC85B12A",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E25C99A_9F75_84C2_41C8_AE9EE270277A",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0BDCFCB_9FD2_9C42_41C6_F5BEAA64AC36_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E25599A_9F75_84C2_41D0_7F3E6702DC8D",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E22F999_9F75_84CE_41E3_E7D8E0AB1DF8",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0BD3B23_9FD2_85C2_41C2_8B097F57F32E_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E224999_9F75_84CE_41D1_5DD944B33BDF",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E20D998_9F75_84CE_41CF_02781DBBC29E",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_AE9092FC_9FD2_8446_41E0_29143638D68B_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E207998_9F75_84CE_41C8_EFA41F7D9687",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E24D99A_9F75_84C2_41D5_3FB6150AD22B",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E24299A_9F75_84C2_41D1_C612CC8E3D38",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E27A99B_9F75_84C2_41BE_CDEB51CE0E38",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B2B426_9FD2_83C2_41E0_52D6295C7A61_1_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E27099B_9F75_84C2_41D3_E6C4D2D5E8D5",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E28599C_9F75_84C6_41DE_CFA095E5FB6C",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E2BD99D_9F75_84C6_41E0_4FB5E956EB19",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E2B299D_9F75_84C6_41D9_A9A6867657DC",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B2D04C_9FD2_8446_41D7_E933674ECE6D_1_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E2AB99E_9F75_84C2_41E1_783AB818FD24",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E37A9A4_9F75_84C6_41CB_81A6B7A338DF",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D96AAFE4_9FD5_9C46_41B3_713A9F66A02F_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3739A5_9F75_84C6_41DB_417BE9A26702",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E39E9A5_9F75_84C6_41CD_177F9B136231",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3979A6_9F75_84C2_41E1_9259E0668E1D",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D4F74A5D_9FDF_8446_41D8_781CC502BC64_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3679A6_9F75_84C2_41D0_78EEE9F25DFD",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_90EF0241_9F4F_87BE_41D3_80C2F19B4DCF",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8E9E8A84_9E1C_8BAD_41D8_E44734BA5531_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_90ECF241_9F4F_87BE_41DD_44A31C07B729",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_8426F2CB_9F73_8442_41DE_EF3094F7648A",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC7533D_9F75_85C6_41D2_2AF0D210F6B3_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842612CB_9F73_8442_41D4_9A2756E96E27",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E5E3997_9F75_84C2_41B3_A2E609A480E8",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC17228_9F72_87CE_41E2_AFD558408E4B_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E219997_9F75_84C2_41B9_F619BE1B6466",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E54D990_9F75_84DE_41DB_FFD510780D30",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC01570_9F72_8C5E_41C2_32482D4911FC_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E547990_9F75_84DE_41C7_69EE3E0953A2",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842BD2CB_9F73_8442_41C8_942F86BA0E9A",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_916C77B2_9F55_8CC2_41B6_295B18361A7E_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842B62CB_9F73_8442_41DA_E95C58FC5FC5",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E57C992_9F75_84C2_41D6_D2BF14E7520F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E574992_9F75_84C2_41E0_02A315FF406E",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC03F3E_9F72_BDC2_41C3_A7B6F47E3149_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E56F992_9F75_84C2_41E0_5B886574C618",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC09E63_9F72_9C42_41D4_483C11411846_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E52698F_9F75_84C2_41E3_858F95E5AD93",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC09E63_9F72_9C42_41D4_483C11411846_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E52198F_9F75_84C2_41CC_076801297CF4",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E29499C_9F75_84C6_41E2_AF7E74CAC21D",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B20C3D_9FD2_83C6_41D1_3055D7C54520_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E28C99C_9F75_84C6_41D3_04EAC7711C8C",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_90D14241_9F4F_87BE_41C6_981B10EB3C77",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_90D12241_9F4F_87BE_41C2_72D4B55D85BA",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_90FB9B63_9EFC_896B_41D4_471D2A8E28B6_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_90EEF241_9F4F_87BE_41D3_5A09C20CBE64",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842532CB_9F73_8442_4181_FB98FCC46FB7",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842552CB_9F73_8442_41E1_7293D676F9CF",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC0A00D_9F75_83C6_41DE_3CE96AA8B9B8_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E4CE98C_9F75_84C6_41D2_A193BCB04429",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CEE63F_9FDE_8FC2_41DB_029889C12672_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0C89B3_9F75_84C2_41D5_A0893D4A8323",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E567992_9F75_84C2_41CB_A03185E66C26",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC0429D_9F72_84C6_41DA_B87C61B8E3C1_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E561992_9F75_84C2_41B4_E1EAE95A59DB",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E11D9B5_9F75_84C6_41D5_BEA59ADB7D3E",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5C0B119_9FDE_85CE_41D6_DA0AFC6FE05A_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E1129B5_9F75_84C6_41DF_746567873210",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842482CB_9F73_8442_4192_B764A2FC4A80",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_916C0B01_9F55_85BE_41DB_67A2726334FF_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842432CB_9F73_8442_41DD_A5E16209B7A8",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E2D499F_9F75_84C2_41E1_145C172BD984",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E2CC9A0_9F75_84FE_41D6_318D8A804562",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0BD4D7B_9FD2_9C42_41C0_249420A7FCDE_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E2C49A0_9F75_84FE_41E3_F55287969AB5",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_91A3E206_9EED_9AAA_41DF_8D45866BB3CF",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_953D88AF_9E1C_B7FA_41D2_6FAE1F623C8B_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_90D06241_9F4F_87BE_41DC_E6BA1426FAE8",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E57E991_9F75_84DE_41E1_0A7C34432479",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC7B8C0_9F72_84BE_41C3_6676894AA423_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E578991_9F75_84DE_41D2_646A225FE91F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E570991_9F75_84DE_41D1_2D48976C417E",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC76BFF_9F72_8442_41CF_9517153F91FF_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E56A991_9F75_84DE_41DE_9972A5B779E6",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3B49A8_9F75_84CE_41E1_D5C3E54130BD",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CCD576_9FDF_8C42_41E3_15124120A4B1_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3AA9A8_9F75_84CE_41DF_250FBE6A98D7",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E210997_9F75_84C2_41C8_96942F92E461",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC0B5D9_9F72_8C4E_41E0_91A139EFCE05_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E5E2997_9F75_84C2_41DC_8CE9CD0E0565",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E1589B7_9F75_84C2_41E2_F7016A57770D",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5C0A179_9FDE_844E_41E1_7C08AB5CB0AC_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E1519B8_9F75_84CE_41E2_E9FFFF2F68CF",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E598993_9F75_84C2_41C8_E1CF921DDA93",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC035DD_9F72_8C46_41CC_3E9F9B708736_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E590993_9F75_84C2_41C4_36F8C5250040",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E2A999F_9F75_84C2_41D9_7B9B4AF58515",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0BD48F9_9FD2_844E_41D0_429EEB9DF55E_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E2DE99F_9F75_84C2_41BB_114193504FC8",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_90EE4241_9F4F_87BE_4191_78DF7B98A673",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_90C7ADA4_9EEC_89EE_41A9_CA2D225BD785_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_90EE0241_9F4F_87BE_41D2_850572F83AF5",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E5F1996_9F75_84C2_41B3_D7E585112270",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC0FE08_9F72_FFCE_41CE_C49A6682A259_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E5E8996_9F75_84C2_41D7_EACE2D7042C4",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842952CB_9F73_8442_41E3_8965CA5517A7",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_916C40C5_9F55_8446_41DE_BF50BED4C90D_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842AF2CB_9F73_8442_41C3_B2540AB7A061",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E05F9AD_9F75_84C6_41C4_39202CAB4FD5",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CC0593_9FDE_8CC2_41D8_56EC367791B4_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0559AE_9F75_84C2_41E0_D200FD0E1CD6",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E53D98F_9F75_84C2_41DD_4CD5A920EBAC",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E53698F_9F75_84C2_41CD_4406BFE8B797",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC7BB14_9F72_85C6_41D8_B671E19F0A69_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E52E98F_9F75_84C2_41E1_F7808D5A3892",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E5BA994_9F75_84C6_41D1_CF0B57D6253B",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E5B3994_9F75_84C6_41E2_DD48421B457B",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC00FDF_9F72_9C42_41B2_72BAA5F112B5_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E5AC994_9F75_84C6_41DE_77174E52C0FD",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E4E398D_9F75_84C6_41D7_F72CC1BF2F2F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC04D78_9F75_7C4E_41C3_23AEA8E1729A_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E51F98D_9F75_84C6_41C6_A006914278FD",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E5CF995_9F75_84C6_41CE_DFBA301C2278",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC7D6F7_9F72_8C42_41DB_395010E09C67_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E5C9995_9F75_84C6_41C8_A3D7DAE008EF",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E50B98E_9F75_84C2_41E2_934169F78D2D",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC017C5_9F72_8C46_41B2_F1423BDA6571_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E50298E_9F75_84C2_41D7_CDFCE54B2C77",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC16922_9F72_85C2_41B5_473076A000E6_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E21A998_9F75_84CE_41CD_8C4E2A7CC935",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC16922_9F72_85C2_41B5_473076A000E6_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E213998_9F75_84CE_41DA_6A2338A2E1C1",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E1A69BC_9F75_84C6_41E0_D221D730CEB7",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CF72C0_9FDE_84BE_41BB_BB1411BE286E_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E1DB9BD_9F75_84C6_41CD_194C5CFD614C",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3EE9AA_9F75_84C2_41BC_B3FC12300147",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3E49AA_9F75_84C2_41C0_1B6FB9C151D5",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CB3602_9FDE_8FC2_41A3_F96DEE4CFDE6_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E01D9AB_9F75_84C2_41E0_4418226A6D5A",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D963F5E7_9FD5_8C42_41DF_FBCBB5E7819C_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3689A5_9F75_84C6_41C2_601B29ED0D58",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842442CB_9F73_8442_41E1_774E751557F5",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8BF54C00_9F75_83BE_41E1_86C7C77AEFAE_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842582CB_9F73_8442_41E3_5A5762492ABE",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_91A6E45A_9F56_8C43_41DC_ED9B99C4163E_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842F42CB_9F73_8442_41B5_255E87198125",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E5C1995_9F75_84C6_41C0_77E73681956B",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC06A3E_9F72_87C2_41D9_E206BDEEAB74_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E5F9996_9F75_84C2_41DC_D18DE9DF6461",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3A09A8_9F75_84CE_41DE_58CA777914BE",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3D99A9_9F75_84CE_41A7_9B5A356EA277",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CDEAAB_9FDF_84C2_41D5_308312BFCCC3_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3CC9A9_9F75_84CE_41D6_4EF881FBEC31",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E26699B_9F75_84C2_41D3_6AE519217CDD",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B3B831_9FD2_83DE_4189_A0D4576073E4_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E29F99C_9F75_84C6_41D2_C9082E4DB8F5",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842992CB_9F73_8442_41C9_7FFCB0BE2614",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_911B7D07_9F55_BDC2_41E1_B4DD2E905575_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842922CB_9F73_8442_41BF_3A23DB001D14",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E09E9B0_9F75_84DE_4179_332301851F80",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CFB5A2_9FDE_8CC2_41A4_B1EF6769DE42_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0959B1_9F75_84DE_41D2_2E482BE3C7F1",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E1789B9_9F75_84CE_41D5_C56C98A84EFD",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E16D9BA_9F75_84C2_41BC_03994AA11EB8",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CDA225_9FDE_87C6_41BC_1E16074F666C_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E1619BA_9F75_84C2_41C0_0E13D88D972E",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E58B993_9F75_84C2_41D5_57896BFD72AD",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC7CC85_9F72_9CC6_41D4_08DC00E3821A_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E583993_9F75_84C2_41D8_1FB3E1A24531",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3039A2_9F75_84C2_41C3_05C61A61FDC9",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0BD7B23_9FD2_85C2_41DD_F211AA311293_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3399A2_9F75_84C2_41B6_9D85E7ABD317",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0FC9B4_9F75_84C6_41B8_095E8E449236",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0F29B4_9F75_84C6_41D7_9C5971E6C9A2",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CD8B84_9FDE_84C6_41D4_C36DE328168C_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0E69B5_9F75_84C6_41B8_451271821CF4",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0889B1_9F75_84DE_41E2_A63DD5FB5D18",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0BE9B1_9F75_84DE_41D2_BE11DB300270",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0B29B2_9F75_84C2_41C9_EC4C6056C473",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CE0AD8_9FDE_844E_41D2_1C9AB7148EF0_1_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0A89B2_9F75_84C2_41D7_92C2CBF7491C",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3309A3_9F75_84C2_41B2_4F73E6798E23",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3299A3_9F75_84C2_41D6_5032A0B8A995",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E35F9A3_9F75_84C2_41D7_8BDE7026F36F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B28F48_9FDD_7C4E_41E0_9EF092FDD604_1_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3569A3_9F75_84C2_41D5_7335BAB8F89E",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E2A199E_9F75_84C2_41CB_F76726A23E16",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B294DB_9FD2_8C42_41D6_3939AB9E46B5_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E2D999E_9F75_84C2_41C9_3D9AA4CA00B8",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0139AB_9F75_84C2_41C4_9056709B8308",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CC5B37_9FDE_85C2_41A9_F5FCE92F0428_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0069AB_9F75_84C2_41C5_417A02321AA1",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_90EC5241_9F4F_87BE_41C9_01CDD21B03D6",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E44A988_9F75_84CE_41CD_DE9D16A251B9",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_90ED8241_9F4F_87BE_41B8_1BBB5961D920",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_91927E47_9E1C_8AAA_41DC_163183D563B1_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E440988_9F75_84CE_41B0_0FDF45721C16",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E4F098D_9F75_84C6_41D6_44C3AA269120",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC04A19_9F75_87CE_41C8_C42A21F4AC2C_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E4EB98D_9F75_84C6_41CA_E57C77C97965",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E1BF9BC_9F75_84C6_41C4_5A30A235E66E",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5C09D8A_9FDE_9CC3_41D7_807694AD29FB_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E1B39BC_9F75_84C6_41E3_56E9AE05345A",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E2E89A1_9F75_84FE_4195_D07F0EBC4F24",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E2E19A1_9F75_84FE_41E0_477AA77505F0",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3179A1_9F75_84FE_41E1_48A33C02DC57",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B2967D_9FD2_8C46_41D8_250940324901_1_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E30D9A2_9F75_84C2_41D6_67566711FA66",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E23F999_9F75_84CE_41A5_837DC2E4A6C6",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B376D9_9FD2_8C4E_41E2_55CAD8E108F2_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E237999_9F75_84CE_41DB_CC94259550AD",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E03C9AC_9F75_84C6_41BA_4D5593CA3AC1",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0359AC_9F75_84C6_41DB_631B84A541B0",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CCB06D_9FDE_8446_41D2_6E29DFE106C6_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0289AD_9F75_84C6_41C5_38753ECEB0F3",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E34F9A4_9F75_84C6_41B1_608566273FBB",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5A14B6B_9FD5_8442_41C4_FFA1B6688D64_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3449A4_9F75_84C6_41D5_6D5B6EDFF6FC",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_92881847_9EE4_96AB_41C8_82F990447AB3_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_91AC5208_9EED_9AA6_41C7_6334DCBBD3D1",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_92881847_9EE4_96AB_41C8_82F990447AB3_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_90D1E241_9F4F_87BE_41E0_A68A9C21BBFB",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E55A990_9F75_84DE_41D7_5C6CE3D96CD2",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC051B3_9F72_84C2_41D5_6EA5B61A9C7A_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E555990_9F75_84DE_41E1_B39063B54553",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_90ED4241_9F4F_87BE_41C9_7C00B7E30793",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_90ED3241_9F4F_87BE_41D7_7AABF93F2245",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842E72CB_9F73_8442_41AA_38F189088F7A",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8C62ED70_9E2B_8965_41B8_923950F06DA3_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E46C989_9F75_84CE_41D6_750B39703DD8",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3C29A9_9F75_84CE_41CB_FA1FB9F9A3F2",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CD0FF0_9FDF_7C5E_41C4_9024D48BA650_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E3FB9AA_9F75_84C2_41E1_22BBA811D921",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E1069B6_9F75_84C2_41CC_B4051BC48A0E",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CF564F_9FDE_8C42_41D9_73E42C556A5D_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E13A9B6_9F75_84C2_41DF_83D9948E0990",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842882CB_9F73_8442_41B7_7B199DBA9C3D",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842822CB_9F73_8442_41E0_628B3F8AED75",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8FD049B8_9F55_84CE_41A5_B8B79B39FEA6_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842842CB_9F73_8442_41BB_A64EE9D8F879",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E1459B8_9F75_84CE_4181_FAB4405DDB18",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CD773B_9FDE_8DC1_41C0_2DA8C9ECE945_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E15B9B8_9F75_84CE_41A7_48CD84F1D406",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E51698E_9F75_84C2_41DA_A9B31078A9A7",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC7B13C_9F72_85C6_41D1_59F6BE8200E9_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E51098E_9F75_84C2_41B3_B75071FFA0DC",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E2FA9A0_9F75_84FE_41C8_8F3591FD9FA0",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B0B201FD_9FD2_8446_41DE_2C80C0F45DAB_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E2F39A0_9F75_84FE_41DB_568806B26BB9",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E1309B6_9F75_84C2_41CB_9F8FA835D999",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CE6BE3_9FDE_8442_41D7_F2608F50586B_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E1279B7_9F75_84C2_41DD_2FE221BED595",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_90EA9241_9F4F_87BE_41BD_4985E273FD5F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8FFBD0FB_9E3F_975A_41D2_C9A1532CAE57_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_842F22CB_9F73_8442_41BA_5612A848B811",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0DF9B3_9F75_84C2_41E2_1FA9ECCFE44E",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CEB07B_9FDE_8442_41D2_A88FF997E9DC_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E0D49B3_9F75_84C2_41CF_CBE0AFEADF50",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E4FD98D_9F75_84C6_41D8_C61EA388DD0F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC036BA_9F75_8CC2_41C1_BF09F4ED6444_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E4F498D_9F75_84C6_41C4_E4CA6889F970",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E14F9B9_9F75_84CE_41D2_532654752404",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5CD0C62_9FDE_BC42_41D0_17369307A411_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E1429B9_9F75_84CE_41CD_F79B0431CA6B",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E5A2994_9F75_84C6_41C7_AFD30DB3D49B",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E5DD994_9F75_84C6_41B7_2D7D620483F3",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8DC003AB_9F72_84C2_41E1_EAE0493D28AA_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E5D6995_9F75_84C6_41CA_90D97C4BF777",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E1949BB_9F75_84C2_4175_878E7321FEE3",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_D5C0B7D8_9FDE_8C4E_41A5_B4139181E485_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1E1809BB_9F75_84C2_41D2_999B0DD06C52",
 "rowCount": 3,
 "frameCount": 9
}],
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player451"
 },
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "shadow": false,
 "downloadEnabled": false,
 "horizontalAlign": "left",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
