var _0x7709=["\x53\x63\x72\x69\x70\x74\x20\x69\x74\x65\x6D\x73","\x4D\x49\x53\x43","\x4A\x41\x56\x41\x53\x43\x52\x49\x50\x54","\x70\x75\x73\x68","\x6C\x65\x6E\x67\x74\x68","\x44\x72\x61\x77","\x44\x72\x61\x77\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x43\x72\x65\x61\x74\x65\x4D\x6F\x76\x65","\x43\x72\x65\x61\x74\x65\x4D\x6F\x76\x65\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x53\x65\x67\x6F\x65\x20\x55\x49\x20\x52\x65\x67\x75\x6C\x61\x72"];function Menu(_0xaa23x2,_0xaa23x3,_0xaa23x4,_0xaa23x5){Render.GradientRect(_0xaa23x2,_0xaa23x3,_0xaa23x4- 90,_0xaa23x5+ 4,1,[52,100,235,255],[52,100,235,0]);Render.FilledRect(_0xaa23x2,_0xaa23x3+ 2,_0xaa23x4,_0xaa23x5,[0,0,0,255]);Render.GradientRect(_0xaa23x2- 6,_0xaa23x3,6,_0xaa23x5+ 4,1,[52,100,235,0],[52,100,235,255])}const Clicked_Event=function(_0xaa23x7,_0xaa23x2,_0xaa23x3,_0xaa23x8,_0xaa23x9){return (_0xaa23x7[0]> _0xaa23x2)&& (_0xaa23x7[1]> _0xaa23x3)&& (_0xaa23x7[0]< _0xaa23x8)&& (_0xaa23x7[1]< _0xaa23x9)};const getvalue=function(_0xaa23xb){return UI.GetValue(_0x7709[0],_0xaa23xb)};function setvalue(_0xaa23xb,_0xaa23xd){UI.SetValue(_0x7709[1],_0x7709[2],_0x7709[0],_0xaa23xb,_0xaa23xd)}function addcheckbox(_0xaa23xb){UI.AddCheckbox(_0xaa23xb)}var Checkboxbool=[],CheckboxParams=[],CheckboxXParams=[],CheckboxLocX=[],CheckboxlocY=[],CheckboxLabels=[],CheckboxRow=[],CheckboxAmmount=0;var Draw_Callbacks=[],CreateMove_Callbacks=[];function Callback(_0xaa23x1a,_0xaa23x1b){if(_0xaa23x1a== 0){Draw_Callbacks[_0x7709[3]](_0xaa23x1b)}else {if(_0xaa23x1a== 1){CreateMove_Callbacks[_0x7709[3]](_0xaa23x1b)}}}function DrawCallback(){for(var _0xaa23x1d=0;_0xaa23x1d< Draw_Callbacks[_0x7709[4]];_0xaa23x1d++){Draw_Callbacks[_0xaa23x1d]()}}Global.RegisterCallback(_0x7709[5],_0x7709[6]);function CreateMoveCallback(){for(var _0xaa23x1d=0;_0xaa23x1d< CreateMove_Callbacks[_0x7709[4]];_0xaa23x1d++){CreateMove_Callbacks[_0xaa23x1d]()}}Global.RegisterCallback(_0x7709[7],_0x7709[8]);function GetMenuValue(_0xaa23x20){return UI.GetValue(_0x7709[0],_0xaa23x20)}function SetMenuValue(_0xaa23x20,_0xaa23xd){UI.SetValue(_0x7709[0],_0xaa23x20,_0xaa23xd);UpdateCheckboxState(_0xaa23x20,_0xaa23xd)}function CreateCheckbox(_0xaa23x20,_0xaa23x23,_0xaa23x24){Checkboxbool[_0x7709[3]](_0xaa23x23);_0xaa23x23?CheckboxXParams[_0x7709[3]](21):CheckboxXParams[_0x7709[3]](3);CheckboxLabels[_0x7709[3]](_0xaa23x20);CheckboxRow[_0x7709[3]](_0xaa23x24);UI.AddCheckbox(_0xaa23x20);UI.SetEnabled(_0x7709[0],_0xaa23x20,false)}function LoadFromConfig(){UpdateAllCheckbox()}function CheckboxCallback(_0xaa23x27,_0xaa23x28){for(var _0xaa23x29=0;_0xaa23x29< CheckboxLabels[_0x7709[4]];_0xaa23x29++){UpdateCheckbox(_0xaa23x27+ 20+ CheckboxRow[_0xaa23x29]* 260,_0xaa23x28+ 20+ _0xaa23x29* 33,CheckboxLabels[_0xaa23x29],_0xaa23x29)}}function UpdateAllCheckbox(){for(var _0xaa23x29=0;_0xaa23x29< CheckboxLabels[_0x7709[4]];_0xaa23x29++){Checkboxbool[_0xaa23x29]= GetMenuValue(CheckboxLabels[_0xaa23x29])}}function UpdateCheckboxState(_0xaa23x20,_0xaa23xd){for(var _0xaa23x29=0;_0xaa23x29< CheckboxLabels[_0x7709[4]];_0xaa23x29++){if(CheckboxLabels[_0xaa23x29]== _0xaa23x20){Checkboxbool[_0xaa23x29]= _0xaa23xd}}}function UpdateCheckbox(_0xaa23x2,_0xaa23x3,_0xaa23x20,_0xaa23x29){const _0xaa23x2d=Render.AddFont(_0x7709[9],13,600);Render.StringCustom(_0xaa23x2,_0xaa23x3- 8,0,_0xaa23x20,[255,255,255,255],_0xaa23x2d);_0xaa23x2+= 190;Render.FilledCircle(_0xaa23x2,_0xaa23x3,8,[20,35,48,255]);Render.FilledCircle(_0xaa23x2+ 6,_0xaa23x3,8,[20,35,48,255]);Render.FilledCircle(_0xaa23x2+ 12,_0xaa23x3,8,[20,35,48,255]);Render.FilledCircle(_0xaa23x2+ 18,_0xaa23x3,8,[20,35,48,255]);Render.FilledCircle(_0xaa23x2+ 24,_0xaa23x3,8,[20,35,48,255]);Checkboxbool[_0xaa23x29]?Render.FilledCircle(_0xaa23x2+ CheckboxXParams[_0xaa23x29],_0xaa23x3,10,[52,100,235,255]):Render.FilledCircle(_0xaa23x2+ CheckboxXParams[_0xaa23x29],_0xaa23x3,10,[66,77,87,255]);if(CheckboxXParams[_0xaa23x29]< 21- 4&& Checkboxbool[_0xaa23x29]){CheckboxXParams[_0xaa23x29]+= 3}else {if(CheckboxXParams[_0xaa23x29]< 21&& Checkboxbool[_0xaa23x29]){CheckboxXParams[_0xaa23x29]++}else {if(CheckboxXParams[_0xaa23x29]> 3+ 4&&  !Checkboxbool[_0xaa23x29]){CheckboxXParams[_0xaa23x29]-= 3}else {if(CheckboxXParams[_0xaa23x29]> 3&&  !Checkboxbool[_0xaa23x29]){CheckboxXParams[_0xaa23x29]--}}}};if(UI.IsMenuOpen()&& Input.IsKeyPressed(0x1)){const _0xaa23x2e=Global.GetCursorPosition();if(Clicked_Event(_0xaa23x2e,_0xaa23x2- 8,_0xaa23x3- 8,_0xaa23x2+ 24+ 8,_0xaa23x3+ 8)&&  !CheckboxParams[_0xaa23x29]){Checkboxbool[_0xaa23x29]=  !Checkboxbool[_0xaa23x29];setvalue(_0xaa23x20,Checkboxbool[_0xaa23x29]);CheckboxParams[_0xaa23x29]= true}}else {if(!Input.IsKeyPressed(0x1)&& CheckboxParams[_0xaa23x29]){CheckboxParams[_0xaa23x29]= false}}}var stored=false;var x_offs=0;var y_offs=0;var X=200;var Y=200;const in_bounds=function(_0xaa23x7,_0xaa23x2,_0xaa23x3,_0xaa23x8,_0xaa23x9){return (_0xaa23x7[0]> _0xaa23x2)&& (_0xaa23x7[1]> _0xaa23x3)&& (_0xaa23x7[0]< _0xaa23x8)&& (_0xaa23x7[1]< _0xaa23x9)};function DrawAPI(){if(!UI.IsMenuOpen()){return};Menu(X,Y,270,140);CheckboxCallback(X,Y);if(Input.IsKeyPressed(0x1)){const _0xaa23x2e=Global.GetCursorPosition();if(in_bounds(_0xaa23x2e,X,Y,X+ 270,Y+ 140)){if(!stored){x_offs= _0xaa23x2e[0]- X;y_offs= _0xaa23x2e[1]- Y;stored= true};X= _0xaa23x2e[0]- x_offs;Y= _0xaa23x2e[1]- y_offs}}else {if(stored){stored= false}}}Callback(0,DrawAPI)
