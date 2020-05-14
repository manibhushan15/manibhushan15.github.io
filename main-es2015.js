(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Layout/layout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Layout/layout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\">\n    <app-sidebar></app-sidebar>\n    <div class=\"sidebar-background\"></div>\n  </div>\n  <div class=\"main-panel\">\n    <app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/departments-chart/department-chart.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/departments-chart/department-chart.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n \n<div class=\"row\">\n\n  \n  <i class=\"material-icons cutom\" id=\"childGroup\" (click)=\"open(groupTempl,'' , '',1, {})\" title=\"Add new group\">add_circle_outline </i>\n  <input type=\"text\" name=\"subgroup\" id=\"subgroup\" [(ngModel)]=\"subgroupid\" style=\"display: none;\"/>\n  <div class=\"container\">\n          <div class=\"col-lg-12 col-md-12\">\n                   <div id=\"group\" class=\"scrollbar\"></div>\n                  </div></div>\n\n\n\n    <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12\">\n            <div class=\"card\">\n\n  <ng-template #groupTempl let-c=\"close\" let-d=\"dismiss\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h6 class=\"modal-title\" id=\"modal-title-default\">{{modelDialog.headerTitle}}</h6>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">×</span>\n              </button>\n            </div>\n            <div class=\"modal-body\"> \n              <form role=\"form\" #f=\"ngForm\" *ngIf=\"operationOption != 3\">\n                <div class=\"form-group mb-3\" *ngIf=\"operationOption == 2\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">ID</span>\n\n                    </div>\n                    <input class=\"form-control\" placeholder=\"id\" [(ngModel)]=\"group.id\" name=\"groupId\" required type=\"text\" disabled>\n                  </div>\n                </div>\n                <div class=\"form-group mb-3\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">Name</span>\n\n                    </div>\n                    <input class=\"form-control\" placeholder=\"group\" [(ngModel)]=\"group.name\" name=\"group\" required type=\"text\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">Active</span>\n                      <div class=\"form-check\">\n                        <label class=\"form-check-label\">\n                          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" name=\"isActive\" [(ngModel)]=\"group.isActive\" [checked]=\"group.isActive\">\n                          <span class=\"form-check-sign\">\n                            <span class=\"check\"></span>\n                          </span>\n                        </label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </form>\n              <form role=\"form\" #f=\"ngForm\" *ngIf=\"operationOption == 3\">\n                <div class=\"row\">\n                  <div class=\"col-md-8\">\n                    <div class=\"form-group mb-3\">\n                      <div class=\"form-group mb-3\">\n                        <div class=\"input-group input-group-alternative\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">ID: </span>\n\n                          </div>\n                          <span>{{group.id}}</span>\n                        </div>\n                      </div>\n                      <div class=\"input-group input-group-alternative\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Name: </span>\n\n                        </div>\n                        <span>{{group.name}}</span>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"input-group input-group-alternative\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">isActive: </span>\n                        </div>\n                        <span>{{group.isActive}}</span>\n                      </div>\n                    </div>\n                  </div>\n                 \n                </div>\n\n              </form>\n\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateGroup()\" *ngIf=\"operationOption == 2\">{{modelDialog.buttonTitle}}</button>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"addGroup(subgroupid)\" *ngIf=\"operationOption == 1\">{{modelDialog.buttonTitle}}</button>\n              <button type=\"button\" class=\"btn btn-default  ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\n            </div>\n          </div>\n        </ng-template>\n  </div></div></div> </div></div></div>\n\n\n\n\n\n\n\n\n\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/groups/groups.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/groups/groups.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div>\n    <img src=\"https://img.icons8.com/bubbles/520/000000/birthday.png\" (click)=\"open(groupTempl,'' , '',1, {})\"/>\n    <img src=\"https://img.icons8.com/nolan/520/birthday.png\" (click)=\"open(groupTempl,'' , '',1, {})\"/>\n    </div>\n    </div>\n\n  </div>\n\n  <ng-template #groupTempl let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h6 class=\"modal-title\" id=\"modal-title-default\">{{modelDialog.headerTitle}}</h6>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\"> \n        <p>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\nwidth=\"64\" height=\"64\"\nviewBox=\"0 0 172 172\"\nstyle=\" fill:#000000;\"><g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\"><path d=\"M0,172v-172h172v172z\" fill=\"none\"></path><g fill=\"#34495e\"><path d=\"M133.03125,10.84973c-1.04141,0 -2.08229,0.37111 -2.82135,1.11017c-0.26875,0.26875 -0.40365,0.40313 -0.53803,0.67188c-0.13438,0.13437 -0.2698,0.40313 -0.40417,0.67188c-0.13438,0.26875 -0.2677,0.53698 -0.2677,0.80573c-0.13438,0.26875 -0.13385,0.53697 -0.13385,0.80572c0,0.26875 0.13385,0.53698 0.13385,0.80573c0.13438,0.26875 0.13333,0.5396 0.2677,0.80835c0.13437,0.26875 0.2698,0.40312 0.40417,0.67188l0.53803,0.5354c0.67188,0.80625 1.74635,1.2099 2.82135,1.2099c1.075,0 2.14948,-0.40365 2.82135,-1.2099c0.26875,-0.13438 0.40365,-0.26665 0.53802,-0.5354c0.13438,-0.26875 0.2698,-0.40312 0.40417,-0.67187c0.13438,-0.26875 0.2677,-0.5396 0.2677,-0.80835c0.13438,-0.26875 0.13385,-0.53698 0.13385,-0.80573c0,-0.26875 -0.13385,-0.53697 -0.13385,-0.80572c-0.13438,-0.26875 -0.13333,-0.53697 -0.2677,-0.80573c-0.13438,-0.26875 -0.2698,-0.40312 -0.40417,-0.67187c-0.13438,-0.26875 -0.40365,-0.5375 -0.53802,-0.67187c-0.73906,-0.73906 -1.77994,-1.11017 -2.82135,-1.11017zM68.53125,10.8681c-1.04141,-0.0168 -2.08229,0.35273 -2.82135,1.0918c-0.26875,0.26875 -0.40365,0.40313 -0.53803,0.67188c-0.13438,0.13437 -0.2698,0.40313 -0.40417,0.67188c-0.13438,0.26875 -0.2677,0.53698 -0.2677,0.80573c-0.13438,0.26875 -0.13385,0.53697 -0.13385,0.80572c0,0.26875 0.13385,0.53698 0.13385,0.80573c0.13438,0.26875 0.13333,0.5396 0.2677,0.80835c0.13438,0.26875 0.2698,0.40312 0.40417,0.67188l0.53803,0.5354c0.67188,0.80625 1.74635,1.2099 2.82135,1.2099c1.075,0 2.14947,-0.40155 2.82135,-1.07343c0.26875,-0.13438 0.40365,-0.26927 0.53803,-0.53802c0.13438,-0.26875 0.2698,-0.40312 0.40417,-0.67187c0.13438,-0.26875 0.2677,-0.53698 0.2677,-0.80573c0.13438,-0.26875 0.13385,-0.5396 0.13385,-0.80835c0,-0.26875 -0.13385,-0.53698 -0.13385,-0.80573c-0.13438,-0.26875 -0.13333,-0.53697 -0.2677,-0.80572c-0.13438,-0.26875 -0.2698,-0.40313 -0.40417,-0.67187c-0.13438,-0.26875 -0.40365,-0.5375 -0.53803,-0.67187c-0.73906,-0.80625 -1.77994,-1.20885 -2.82135,-1.22565zM102.45569,20.07751c-0.32964,-0.0147 -0.66663,0.01155 -1.00256,0.07874c-0.26875,0.13437 -0.53697,0.13333 -0.80572,0.2677c-0.26875,0.13438 -0.40313,0.2698 -0.67187,0.40417l-0.53803,0.53803c-0.26875,0.26875 -0.40365,0.40312 -0.53803,0.67188c-0.13437,0.13438 -0.26718,0.40312 -0.40155,0.67188c-0.13437,0.26875 -0.27032,0.53697 -0.27032,0.80572c-0.13437,0.26875 -0.13385,0.53697 -0.13385,0.80572c0,1.075 0.40365,2.0151 1.2099,2.82135c0.67188,0.80625 1.74635,1.2099 2.82135,1.2099c0.26875,0 0.53697,-0.13385 0.80572,-0.13385c0.26875,0 0.53855,-0.13333 1.07605,-0.2677c0.26875,-0.13438 0.40312,-0.2698 0.67188,-0.40417l0.53802,-0.53803c0.80625,-0.67187 1.20728,-1.74635 1.20728,-2.82135c0,-0.26875 -0.13385,-0.53697 -0.13385,-0.80572c-0.13437,-0.26875 -0.13332,-0.53698 -0.2677,-0.80573c-0.13437,-0.26875 -0.2698,-0.40312 -0.40418,-0.67187c-0.13437,-0.26875 -0.40365,-0.5375 -0.53802,-0.67187c-0.70547,-0.70547 -1.6356,-1.11069 -2.62451,-1.15479zM68.53125,24.32135c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125v26.875c0,2.28437 1.74688,4.03125 4.03125,4.03125c2.28437,0 4.03125,-1.88125 4.03125,-4.03125v-26.875c0,-2.28437 -1.74688,-4.03125 -4.03125,-4.03125zM133.03125,24.32135c-2.28438,0 -4.03125,1.74688 -4.03125,4.03125v26.875c0,2.28437 1.74687,4.03125 4.03125,4.03125c2.28438,0 4.03125,-1.88125 4.03125,-4.03125v-26.875c0,-2.28437 -1.74687,-4.03125 -4.03125,-4.03125zM102.125,33.7276c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125v26.875c0,2.28437 1.74688,4.03125 4.03125,4.03125c2.28437,0 4.03125,-1.88125 4.03125,-4.03125v-26.875c0,-2.28437 -1.74688,-4.03125 -4.03125,-4.03125zM50.78955,44.6377c-0.2656,0.00682 -0.53435,0.04304 -0.8031,0.11023c-21.76875,4.97188 -33.59375,11.15208 -38.29688,20.42395c-0.0664,0.1162 -0.10264,0.2397 -0.15485,0.35956c-0.54261,1.04747 -0.8612,2.16841 -0.9527,3.30951c-0.0621,0.28888 -0.09973,0.58819 -0.09973,0.90021v18.8125v36.95313c0,0.32094 0.042,0.62746 0.10761,0.92383c0.7303,5.50222 5.49289,9.82617 11.1778,9.82617h46.81866l-0.05512,17.6026c0,6.04688 4.70313,11.01927 10.75,11.28802c2.6875,0.13438 5.24115,0.13385 7.92865,0.13385c43.67188,0 76.7276,-14.24323 76.7276,-33.05572c0,-2.28438 -1.74687,-4.03125 -4.03125,-4.03125c-2.28438,0 -4.03125,1.74687 -4.03125,4.03125c0,11.825 -28.21822,24.99322 -68.6651,24.99322c-2.41875,0 -4.97135,0.00052 -7.52448,-0.13385c-1.74687,0 -3.09167,-1.47865 -3.09167,-3.22552v-36.54895v-6.3172c0,-2.2153 0.20406,-4.41283 0.55902,-6.58227c1.90526,1.55358 4.27701,2.46294 6.8316,2.55102h6.31458c0.80625,0 1.6146,0.4047 2.1521,0.9422c0.67188,0.67188 0.93958,1.47708 0.93958,2.28333v25.6651c0,2.95625 1.07553,5.77865 3.22553,7.92865c2.15,2.15 4.9724,3.35938 7.92865,3.35938c6.18125,0 11.15155,-4.97292 11.15155,-11.15417l0.13385,-28.48645c0,-1.6125 1.20938,-2.95678 2.6875,-3.22553h0.27032c1.34375,-0.26875 2.28437,0.26875 2.6875,0.67188c0.5375,0.40313 1.2099,1.2099 1.2099,2.55365v13.97553c-0.13437,6.18125 4.9703,11.28802 11.15155,11.28802c6.04688,0 11.15417,-4.97292 11.15417,-11.15417l0.13385,-23.38178c0,-1.20938 0.67083,-2.28385 1.61145,-2.82135c3.614,-1.86529 6.63712,-3.89175 9.13855,-6.0495v22.71252c0,2.28437 1.74687,4.03125 4.03125,4.03125c2.28438,0 4.03125,-1.88125 4.03125,-4.03125v-36.12378c0.0795,-0.63707 0.13385,-1.27248 0.13385,-1.9054c0,-0.44052 -0.08084,-0.85215 -0.20209,-1.24402c-0.33321,-4.12224 -2.43552,-9.81723 -9.74219,-15.41901c-1.74687,-1.34375 -4.29895,-0.93853 -5.6427,0.80835c-1.34375,1.74687 -0.94115,4.29895 0.80573,5.6427c2.95625,2.28437 6.5849,5.91197 6.5849,10.21197c0,0.2774 0.02675,0.54634 0.07611,0.80573c-0.00822,0.04309 -0.00621,0.09021 -0.01311,0.13385c-0.10292,0.76169 -0.31539,1.52426 -0.60102,2.28595c-1.6125,3.89687 -5.77708,7.65833 -12.36145,11.0177c-3.7625,1.88125 -6.04687,5.77865 -6.04687,9.94427l-0.13385,23.38178c0,1.74688 -1.3448,3.09167 -3.09167,3.09167c-1.74687,0 -3.09167,-1.3448 -3.09167,-3.09167v-13.97553c0,-3.35937 -1.47813,-6.58438 -4.03125,-8.73437c-2.55313,-2.15 -5.9104,-3.08905 -9.26978,-2.41718h-0.27032c-5.375,0.94063 -9.2724,5.6427 -9.2724,11.0177v28.48645c0,1.74687 -1.34218,3.09167 -3.08905,3.09167c-0.94063,0 -1.74845,-0.40208 -2.28595,-0.93958c-0.67187,-0.67187 -0.93958,-1.4797 -0.93958,-2.28595v-25.6651c0,-0.0452 -0.01176,-0.08645 -0.01312,-0.13123c0.0013,-0.047 0.01312,-0.08891 0.01312,-0.13648c0,-3.09062 -1.20938,-5.9125 -3.35937,-8.0625c-2.15,-2.15 -4.83855,-3.22552 -7.7948,-3.22552h-0.13385h-6.04687c-1.6125,0 -2.41875,-1.07448 -2.6875,-1.4776c-0.26875,-0.40312 -0.80572,-1.61407 -0.13385,-2.95782l8.28296,-16.21686l0.79523,-1.328c0.61394,-0.69688 0.99994,-1.59565 0.99994,-2.61139c0,-0.38658 -0.0659,-0.74974 -0.1601,-1.09967c-0.23986,-1.13549 -0.9761,-2.18593 -2.12323,-2.79773c-1.05426,-0.60244 -2.27236,-0.59479 -3.33313,-0.13385h-15.07782c-0.26875,-0.13438 -0.53697,-0.2677 -0.80572,-0.2677c-0.5375,-0.13438 -1.07395,-0.13438 -1.61145,0c-0.26875,0.13438 -0.5396,0.13332 -0.80835,0.2677h-48.23853c0,0 -0.2698,0.00105 -0.40417,-0.2677c-0.13437,-0.26875 0,-0.40365 0,-0.53803c0.18294,-0.28457 0.31291,-0.58661 0.4173,-0.89496c3.63294,-6.48169 14.28805,-11.57154 32.50458,-15.63422c2.15,-0.5375 3.62917,-2.68698 3.09167,-4.83698c-0.47031,-1.88125 -2.17729,-3.24705 -4.0365,-3.19928z\"></path></g></g></svg>\n      <span id=\"hbd\">Happy Birthday \"BUBU\"</span>   \n    </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateGroup()\" *ngIf=\"operationOption == 2\">{{modelDialog.buttonTitle}}</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addGroup()\" *ngIf=\"operationOption == 1\">{{modelDialog.buttonTitle}}</button>\n        <button type=\"button\" class=\"btn btn-default  ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\n      </div>\n    </div>\n  </ng-template>\n\n<!--\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-primary\">\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <i class=\"material-icons cutom\" (click)=\"open(groupTempl,'' , '',1, {})\" title=\"Add new group\">add_circle_outline</i>\n                <h4 class=\"card-title\"> {{getTitle(1)}}</h4>\n\n              </div>\n              <div class=\"col-md-4 text-right\">\n\n                <input type=\"text\" value=\"\" class=\"form-control custom\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body table-responsive\">\n            <div class=\"mat-elevation-z8\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"table-hover\" matSort>\n              \n                  <ng-container matColumnDef=\"id\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n                    <td mat-cell *matCellDef=\"let group\" (click)=\"open(groupTempl,'' , '',3,group)\"> {{group.id}} </td>\n                  </ng-container>\n                   <ng-container matColumnDef=\"active\">\n                    <th mat-header-cell *matHeaderCellDef> Active </th>\n                    <td mat-cell *matCellDef=\"let group\" (click)=\"open(groupTempl,'' , '',3,group)\">\n                        <div class=\"form-check\">\n                            <label class=\"form-check-label\">\n                              <input class=\"form-check-input\" type=\"checkbox\" value=\"\" [checked]=\"group.isActive\">\n                              <span class=\"form-check-sign\">\n                                <span class=\"check\"></span>\n                              </span>\n                            </label>\n                          </div>\n                      </td>\n                  </ng-container>\n              \n                  <ng-container matColumnDef=\"name\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                    <td mat-cell *matCellDef=\"let group\" (click)=\"open(groupTempl,'' , '',3,group)\"> {{group.name}} </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"group icon\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Group Icon </th>\n                    <td mat-cell *matCellDef=\"let group\" (click)=\"open(groupTempl,'' , '',3,group)\"> <img [src]=\"group.img\" /></td>\n                  </ng-container>\n        \n                  <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\n                    <td mat-cell *matCellDef=\"let group\"> <button mat-raised-button type=\"button\" (click)=\"open(groupTempl,'' , '',2,group)\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                        <i class=\"material-icons\">edit</i>\n                      </button>\n                      <button mat-raised-button type=\"button\" (click)=\"deleteGroup(group.id)\"  class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                        <i class=\"material-icons\">close</i>\n                      </button> </td>\n                  </ng-container>\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n                  </tr>\n                </table>\n              \n                <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n              </div>\n          </div>\n          <ng-template #groupTempl let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h6 class=\"modal-title\" id=\"modal-title-default\">{{modelDialog.headerTitle}}</h6>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                  <span aria-hidden=\"true\">×</span>\n                </button>\n              </div>\n              <div class=\"modal-body\"> \n                <form role=\"form\" #f=\"ngForm\" *ngIf=\"operationOption != 3\">\n                  <div class=\"form-group mb-3\" *ngIf=\"operationOption == 2\">\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">ID</span>\n\n                      </div>\n                      <input class=\"form-control\" placeholder=\"id\" [(ngModel)]=\"group.id\" name=\"groupId\" required type=\"text\" disabled>\n                    </div>\n                  </div>\n                  <div class=\"form-group mb-3\">\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">Name</span>\n\n                      </div>\n                      <input class=\"form-control\" placeholder=\"group\" [(ngModel)]=\"group.name\" name=\"group\" required type=\"text\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">Active</span>\n                        <div class=\"form-check\">\n                          <label class=\"form-check-label\">\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" name=\"isActive\" [(ngModel)]=\"group.isActive\" [checked]=\"group.isActive\">\n                            <span class=\"form-check-sign\">\n                              <span class=\"check\"></span>\n                            </span>\n                          </label>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n                <form role=\"form\" #f=\"ngForm\" *ngIf=\"operationOption == 3\">\n                  <div class=\"row\">\n                    <div class=\"col-md-8\">\n                      <div class=\"form-group mb-3\">\n                        <div class=\"form-group mb-3\">\n                          <div class=\"input-group input-group-alternative\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">ID: </span>\n\n                            </div>\n                            <span>{{group.id}}</span>\n                          </div>\n                        </div>\n                        <div class=\"input-group input-group-alternative\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">Name: </span>\n\n                          </div>\n                          <span>{{group.name}}</span>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"input-group input-group-alternative\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">isActive: </span>\n                          </div>\n                          <span>{{group.isActive}}</span>\n                        </div>\n                      </div>\n                    </div>\n                   \n                  </div>\n\n                </form>\n\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateGroup()\" *ngIf=\"operationOption == 2\">{{modelDialog.buttonTitle}}</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"addGroup()\" *ngIf=\"operationOption == 1\">{{modelDialog.buttonTitle}}</button>\n                <button type=\"button\" class=\"btn btn-default  ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6 col-sm-6\">\n        <div class=\"card card-stats\">\n          <a routerLink=\"/users\">\n            <div class=\"card-header card-header-warning card-header-icon\">\n              <div class=\"card-icon\">\n                <i class=\"material-icons\">supervisor_account</i>\n              </div>\n              <p class=\"card-category\">Users</p>\n              <h3 class=\"card-title\">\n                {{users.length}}\n              </h3>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\" style=\"color:#092863\">supervisor_account</i>\n                User info...\n\n              </div>\n            </div>\n          </a>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-sm-6\">\n        <div class=\"card card-stats\">\n          <a routerLink=\"/groups\">\n            <div class=\"card-header card-header-success card-header-icon\">\n              <div class=\"card-icon\">\n                <i class=\"material-icons\">group_work</i>\n              </div>\n              <p class=\"card-category\">Groups</p>\n              <h3 class=\"card-title\">{{groups.length}}</h3>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\" style=\"color:#092863\">group_work</i>\n                Groups info...\n              </div>\n            </div>\n          </a>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-sm-6\">\n        <div class=\"card card-stats\">\n          <a routerLink=\"/org-chart\">\n            <div class=\"card-header card-header-danger card-header-icon\">\n              <div class=\"card-icon\">\n                <i class=\"material-icons\">table_chart</i>\n              </div>\n              <p class=\"card-category\">Organization</p>\n              <h3 class=\"card-title\">L-{{orgLevel}}</h3>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\" style=\"color:#092863\">table_chart</i>\n                Show structures\n              </div>\n            </div>\n            </a>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-sm-6\">\n        <div class=\"card card-stats\">\n          <div class=\"card-header card-header-info card-header-icon\">\n            <div class=\"card-icon\">\n              <i class=\"fa fa-twitter\"></i>\n            </div>\n            <p class=\"card-category\">Followers</p>\n            <h3 class=\"card-title\">+245</h3>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"stats\">\n              <i class=\"material-icons\">update</i> Just Updated\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-primary\">\n            <h4 class=\"card-title\">Employees Stats</h4>\n            <p class=\"card-category\">New employees on 15th September, 2016</p>\n          </div>\n          <div class=\"card-body table-responsive\">\n            <table class=\"table table-hover\">\n              <thead class=\"text-warning\">\n              <th>ID</th>\n              <th>Name</th>\n              <th>Salary</th>\n              <th>Country</th>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>1</td>\n                  <td>Dakota Rice</td>\n                  <td>$36,738</td>\n                  <td>Niger</td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Minerva Hooper</td>\n                  <td>$23,789</td>\n                  <td>Curaçao</td>\n                </tr>\n                <tr>\n                  <td>3</td>\n                  <td>Sage Rodriguez</td>\n                  <td>$56,142</td>\n                  <td>Netherlands</td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Philip Chaney</td>\n                  <td>$38,735</td>\n                  <td>Korea, South</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n\n\n\n\n\n<div class=\"content\" role=\"main\">\n\n  <!-- Highlight Card -->\n  \n\n\n    <svg id=\"rocket-smoke\" alt=\"Rocket Ship Smoke\" xmlns=\"http://www.w3.org/2000/svg\" width=\"516.119\" height=\"1083.632\" viewBox=\"0 0 516.119 1083.632\">\n      <path id=\"Path_40\" data-name=\"Path 40\" d=\"M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z\" transform=\"translate(-147.025 -140.939)\" fill=\"#f5f5f5\"/>\n    </svg>\n\n  \n\n  <div class=\"card-container\">\n    <a class=\"card\" rel=\"noopener\" routerLink=\"/groups\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z\"/></svg>\n       <!-- <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z\"/></svg> -->\n\n      <span>Happy Birthday</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>    </a> \n  </div>\n</div> \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://creative-tim.com/about-us\">\n                        About Us\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                        Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}, made with love by\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/navbar/navbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/navbar/navbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-bacgroundImg  navbar-absolute fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Happy Birthday</a>\n    </div>\n    <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      <!--<form class=\"navbar-form\">\n        <div class=\"input-group no-border\">\n            <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n            <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                <i class=\"material-icons\">search</i>\n                <div class=\"ripple-container\"></div>\n            </button>\n        </div>\n    </form>-->\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"javascript:void(0)\">\n            <i class=\"material-icons\">dashboard</i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Stats</span>\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"material-icons\">notifications</i>\n            <span class=\"notification\">5</span>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\n            </p>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Mike John responded to your email</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">You have 5 new tasks</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">You're now friend with Andrew</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another Notification</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another One</a>\n          </div>\n        </li>\n\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownAccountLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"material-icons\">person</i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Account</span>\n            </p>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\" id=\"profileDropdown\" aria-labelledby=\"navbarDropdownAccountLink\">\n            <a routerLinkActive=\"active\" href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <i class=\"material-icons\">account_circle</i>\n              <span> My profile</span>\n            </a>\n            <a routerLinkActive=\"active\" href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <i class=\"material-icons\">build</i>\n              <span> Settings</span>\n            </a>\n            <a routerLinkActive=\"active\" href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <i class=\"material-icons\">local_activity</i>\n              <span> Activity</span>\n            </a>\n            <a routerLinkActive=\"active\" href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <i class=\"material-icons\">contact_support</i>\n              <span> Support</span>\n            </a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\">\n              <i class=\"material-icons\">exit_to_app</i>\n              <span> Logout</span>\n            </a>\n          </div>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"logout()\">\n            <i class=\"material-icons\">exit_to_app</i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Logout</span>\n            </p>\n          </a>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/sidebar/sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/sidebar/sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a routerLink=\"/\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"/assets/img/Logo_0.png\" style=\"border-radius: 50%;\"/>\n        </div>\n        Organization\n    </a>\n</div>\n\n<div class=\"sidebar-wrapper\">\n  <div *ngIf=\"isMobileMenu()\">\n    <!--<form class=\"navbar-form\">\n      <span class=\"bmd-form-group\">\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i>\n            <div class=\"ripple-container\"></div>\n          </button>\n        </div>\n      </span>\n    </form>-->\n    <ul class=\"nav navbar-nav nav-mobile-menu\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"javascript:void(0)\">\n          <i class=\"material-icons\">dashboard</i>\n          <p>\n            <span class=\"d-lg-none d-md-block\">Stats</span>\n          </p>\n        </a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <i class=\"material-icons\">notifications</i>\n          <span class=\"notification\">5</span>\n          <p>\n            <span class=\"d-lg-none d-md-block\">Some Actions</span>\n          </p>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n          <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n          <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n          <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n          <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n          <a class=\"dropdown-item\" href=\"#\">Another One</a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownAccountLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <i class=\"material-icons\">person</i>\n          <p>\n            <span class=\"d-lg-none d-md-block\">Account</span>\n          </p>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right\" id=\"profileDropdown\" aria-labelledby=\"navbarDropdownAccountLink\">\n          <a routerLinkActive=\"active\" href=\"javascript:void(0)\" class=\"dropdown-item\">\n            <i class=\"material-icons\">account_circle</i>\n            <span> My profile</span>\n          </a>\n          <a routerLinkActive=\"active\" href=\"javascript:void(0)\" class=\"dropdown-item\">\n            <i class=\"material-icons\">build</i>\n            <span> Settings</span>\n          </a>\n          <a routerLinkActive=\"active\" href=\"javascript:void(0)\" class=\"dropdown-item\">\n            <i class=\"material-icons\">local_activity</i>\n            <span> Activity</span>\n          </a>\n          <a routerLinkActive=\"active\" href=\"javascript:void(0)\" class=\"dropdown-item\">\n            <i class=\"material-icons\">contact_support</i>\n            <span> Support</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\">\n            <i class=\"material-icons\">exit_to_app</i>\n            <span> Logout</span>\n          </a>\n        </div>\n      </li>\n    \n    </ul>\n  </div>\n  <ul class=\"nav\">\n    <li routerLinkActive=\"active\" class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/\">\n        <!-- <i class=\"material-icons\">birthday</i> -->\n        <img  src=\"https://img.icons8.com/material/24/000000/birthday--v1.png\"/>\n        <p>Birthday</p>\n      </a>\n    </li>\n    <!-- <li routerLinkActive=\"active\" class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/org-chart\">\n        <i class=\"material-icons\">bubble_chart</i>\n        <p>Org Chart</p>\n      </a>\n    </li>\n    <li routerLinkActive=\"active\" class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/org-demo\">\n        <i class=\"material-icons\">bubble_chart</i>\n        <p>Org Demo</p>\n      </a>\n    </li>\n    <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/dep-chart\">\n          <i class=\"material-icons\">bubble_chart</i>\n          <p>{{getTitle(1)}} Chart</p>\n        </a>\n      </li>\n    <li routerLinkActive=\"active\" class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/users\">\n        <i class=\"material-icons\">supervisor_account</i>\n        <p>{{getTitle(2)}}</p>\n      </a>\n    </li>\n    <li routerLinkActive=\"active\" class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/groups\">\n        <i class=\"material-icons\">group_work</i>\n        <p>{{getTitle(1)}}</p>\n      </a>\n    </li>\n    <li routerLinkActive=\"active\" class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/settings\">\n        <i class=\"material-icons\">build</i>\n        <p>Settings</p>\n      </a>\n    </li> -->\n  </ul>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid loginContainer\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"header\"\n      >\n        <img class=\"logo\"\n          src=\"../assets/img/Logo_0.png\"\n        />\n        <span class=\"title\"\n          >Organization Portal</span\n        >\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card shadow border-0\" style=\"height: 570px;\">\n        <div\n          class=\"card-header card-header-primary\"\n          style=\"padding:0;text-align:center; color:#fff;margin:0;border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\"\n        >\n          <h3 style=\"margin: 10px 0 10px;font-weight: 600;\">Login</h3>\n        </div>\n        <div\n          class=\"loginParent\"\n        >\n          <div\n            class=\"loginHeader\"\n          >\n            <span><b>Welcome.</b> Please login.</span>\n          </div>\n          <form\n            role=\"form\"\n            #f=\"ngForm\"\n            (ngSubmit)=\"login(f)\"\n          >\n            <div class=\"form-group mb-3\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"\n                    ><i class=\"material-icons\">email</i></span\n                  >\n                </div>\n                <input\n                  class=\"form-control\"\n                  placeholder=\"username\"\n                  name=\"email\"\n                  [(ngModel)]=\"email\"\n                  type=\"text\"\n                />\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"\n                    ><i class=\"material-icons\">lock_open</i></span\n                  >\n                </div>\n                <input\n                  class=\"form-control\"\n                  placeholder=\"password\"\n                  name=\"password\"\n                  [(ngModel)]=\"password\"\n                  type=\"password\"\n                />\n              </div>\n            </div>\n\n            <div class=\"text-center\">\n              <input\n                type=\"submit\"\n                class=\"btn btn-primary my-4\"\n                value=\"Sign in\"\n                style=\"width:100%\"\n              />\n            </div>\n            <div class=\"alert alert-danger\" *ngIf=\"submitted && error\">\n           {{error}}\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/org-chart/org-chart.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/org-chart/org-chart.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n        <!-- <button class=\"btn btn-primary\" (click)=\"open(orgTempl,'' , '',1)\">Add {{getTitle(2)}} to organization</button> -->\n        <!-- <b><i class=\"fa fa-plus\" id=\"icon\"  (click)=\"open(orgTempl,'' , '',1)\"  ></i></b>  -->\n        <i class=\"material-icons cutom\" (click)=\"open(orgTempl,'' , '',1)\" >add_circle_outline</i>\n       \n        <button class=\"btn btn-primary\" style=\"display:none\" (click)=\"open(orgTempl,'' , '',2)\" id=\"addToOrg\"></button>\n      <ng-template #orgTempl let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-content\" *ngIf=\"throughGraph || addUToOrg\">\n          <div class=\"modal-header\">\n            <h6 class=\"modal-title\" id=\"modal-title-default\">ORG-Chart</h6>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n              <span aria-hidden=\"true\">×</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <form role=\"form\" #f=\"ngForm\">\n              <div class=\"form-group mb-3\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">Select User</span>\n\n                      </div>\n                      <select class=\"form-control\" (change)=\"onselectUser()\" [(ngModel)]=\"selectedUser\" name=\"user\">\n                        <option value=\"0\" disabled>Select option</option>\n                        <option [value]=\"user.id\" *ngFor=\"let user of users\">{{user.name}}</option>\n                      </select>\n\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\" *ngIf=\"activeUser.name\">\n                    <i class=\"material-icons\" style=\"font-size:15px\">email</i> {{activeUser?.email}}<br />\n                    <i class=\"material-icons\" style=\"font-size:15px\">person</i> {{activeUser?.name}}<br />\n                    <i class=\"material-icons\" style=\"font-size:15px\">phone</i> {{activeUser?.phone}}<br />\n                  </div>\n                  <div class=\"col-md-6\" *ngIf=\"users.length == 0\">\n                    <span style=\"color:brown\">*Users not available (Already occupied by others team.)</span>\n                  </div>\n                </div>\n\n              </div>\n              <div class=\"form-group mb-3\" *ngIf=\"!addUToOrg\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">Assign to</span>\n\n                      </div>\n                      <select class=\"form-control\" (change)=\"onSelectOrg()\" [(ngModel)]=\"selectedOrgUser\" name=\"org\">\n                        <option value=\"0\" disabled>Select option</option>\n                        <option [value]=\"org.id\" *ngFor=\"let org of orgData\">{{org.name}}</option>\n                      </select>\n\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\" *ngIf=\"activeOrgUser.name\">\n                    <div class=\"row\">\n                      <div class=\"col-md-8\">\n                        <i class=\"material-icons\" style=\"font-size:15px\">person</i> {{activeOrgUser?.name}}<br />\n                        <i class=\"material-icons\" style=\"font-size:15px\">group_work</i> {{activeOrgUser?.title}}<br />\n                      </div>\n                      <div class=\"col-md-4\">\n                        <img [src]=\"activeOrgUser.img?activeOrgUser.img:'../assets/img/user.jpg'\" style=\"height: 50px;border-radius: 50%;\" />\n                      </div>\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group mb-3\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Choose group name</span>\n                  </div>\n                  <select class=\"form-control\" [(ngModel)]=\"selectedgroup\" name=\"group\">\n                    <option value=\"0\" disabled>Select name (optional)</option>\n                    <option [value]=\"group.id\" *ngFor=\"let group of groups\">{{group.name}}</option>\n                  </select>\n                </div>\n              </div>\n            </form>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"addToOrganization()\">ADD</button>\n\n            <button type=\"button\" class=\"btn btn-link  ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\n          </div>\n        </div>\n\n        <div class=\"modal-content\" *ngIf=\"!throughGraph && viewDetail\">\n          <div class=\"modal-header\">\n            <h6 class=\"modal-title\" id=\"modal-title-default\">DETAILS</h6>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n              <span aria-hidden=\"true\">×</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <form role=\"form\" #f=\"ngForm\">\n              <div class=\"form-group mb-3\">\n                <div id=\"main-card\">\n                  <div class=\"cover-photo\"></div>\n                  <div class=\"photo\">\n                    <img [src]=\"(activeOrgUser.img)?activeOrgUser.img:'../assets/img/user.jpg'\" alt=\"\">\n                  </div>\n                  <div class=\"content\">\n                    <h2 class=\"name\">{{activeOrgUser.name}}</h2>\n                    <h3 class=\"fullstack\">{{activeOrgUser.title}} <br></h3>\n\n                  </div>\n\n                </div>\n              </div>\n\n            </form>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default  ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\n          </div>\n        </div>\n      </ng-template>\n\n<!--  ________________________ Code For Second Model______________________________________  -->\n<button class=\"btn btn-primary\" style=\"display:none\" (click)=\"open(orgGrp,'' , '',2)\" id=\"addToGroup\"></button>\n<ng-template #orgGrp let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-content\" *ngIf=\"throughGraph || addUToOrg\">\n    <div class=\"modal-header\">\n      <h6 class=\"modal-title\" id=\"modal-title-default\">ORG-Chart</h6>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">×</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form role=\"form\" #f=\"ngForm\">\n           <div class=\"form-group mb-3\">\n          <div class=\"input-group input-group-alternative\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Choose group name</span>\n            </div>\n            <select class=\"form-control\" [(ngModel)]=\"selectedgroup\" name=\"group\">\n              <option value=\"0\" disabled>Select name (optional)</option>\n              <option [value]=\"group.id\" *ngFor=\"let group of groups\">{{group.name}}</option>\n            </select>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"addToGroup()\">ADD</button>\n      <button type=\"button\" class=\"btn btn-link  ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\n    </div>\n  </div>\n</ng-template>\n<!--Second Model End-->\n    </div>\n    <div class=\"row\">\n\n      <div class=\"container\">\n          <div class=\"col-lg-12 col-md-12\">\n                   <div id=\"tree\" class=\"scrollbar\"></div>\n                  </div>      \n    </div>\n  </div>\n</div>\n\n\n\n\n<!-- <div id=\"group\" class=\"scrollbar\"></div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/org-demo/org-demo.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/org-demo/org-demo.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"diagram_container\" class=\"dhx_diagram__container\"> </div>\n<button class=\"btn btn-primary\" style=\"display:none\" (click)=\"open(DemoTempl,'' , '',1)\" id=\"addUToDemo\"></button>\n<button class=\"btn btn-primary\" style=\"display:none\" (click)=\"open(DemoTempl,'' , '',2)\" id=\"viewDetail\"></button>\n\n<ng-template #DemoTempl let-c=\"close\" let-d=\"dismiss\">\n        <!-- Add New User Model -->\n        <div class=\"modal-content\" *ngIf=\"addUToDemo\">\n                <div class=\"modal-header\">\n                        <h6 class=\"modal-title\" id=\"modal-title-default\">Demo-Chart</h6>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"\n                                (click)=\"d('Cross click')\">\n                                <span aria-hidden=\"true\">×</span>\n                        </button>\n                </div>\n                <div class=\"modal-body\">\n                </div>\n                <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addToGroup()\">ADD</button>\n                        <button type=\"button\" class=\"btn btn-link  ml-auto\" data-dismiss=\"modal\"\n                                (click)=\"c('Close click')\">Close</button>\n                </div>\n        </div>\n        <!-- View User Details -->\n        \n        <div class=\"modal-content\" *ngIf=\"viewDetail\">\n                        <div class=\"modal-header\">\n                          <h6 class=\"modal-title\" id=\"modal-title-default\">DETAILS</h6>\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                            <span aria-hidden=\"true\">×</span>\n                          </button>\n                        </div>\n                        <div class=\"modal-body\">\n                          <form role=\"form\" #f=\"ngForm\">\n                            <div class=\"form-group mb-3\">\n                              <div id=\"main-card\">\n                                <div class=\"cover-photo\"></div>\n                                <div class=\"photo\">\n                                  <img [src]=\"(UserData.img)\" alt=\"\">\n                                </div> \n                                <div class=\"content\">\n                                  <h2 class=\"name\">{{UserData.title}}</h2>\n                                  <h3 class=\"fullstack\">{{UserData.text}} <br></h3>\n              \n                                </div>\n              \n                              </div>\n                            </div>\n              \n                          </form>\n                        </div>\n                        <div class=\"modal-footer\">\n                          <button type=\"button\" class=\"btn btn-default  ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\n                        </div>\n                      </div>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/options-configuration/configuration.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/options-configuration/configuration.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-primary\">\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <h4 class=\"card-title\">Options Configuration</h4>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body table-responsive\">\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-6 col-sm-6\" *ngFor=\"let option of options\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-danger card-header-icon\">\n                    <div class=\"card-icon\" style=\"padding:0\">\n                      <i class=\"material-icons\">{{option.id==1?'group_work':'supervisor_account'}}</i>\n                    </div>\n                    <p class=\"card-category\">{{option.name}}</p>\n                    <i class=\"material-icons config\" style=\"color:#092863\" (click)=\"update(option.id)\">create</i>\n                  </div>\n                  <div class=\"card-footer\">\n                    <div class=\"stats\" *ngIf=\"option.id==activeId\">\n                      <input class=\"form-control\" placeholder=\"name\" autoFocus [(ngModel)]=\"option.name\" name=\"option{{option.id}}\" required type=\"text\">\n                      <div class=\"\">\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateOpton(option)\" style=\"width:100%\">Save</button>\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"activeId=0\" style=\"width:100%;\n                        border: 1px solid #c4c4c4;\">Cancel</button>\n                      </div>\n                      </div>\n                    </div>\n                    </div>\n                </div>\n                </div>\n              </div>\n            </div>\n          </div>\n    </div>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings-home/settingsHome.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings-home/settingsHome.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n          <div class=\"card card-stats\">\n            <a routerLink=\"/settings/options-configuration\">\n              <div class=\"card-header card-header-success card-header-icon\">\n                <div class=\"card-icon\" style=\"padding:0\">\n                  <i class=\"material-icons\">create</i>\n                </div>\n                <p class=\"card-category\">Options Configuration</p>\n                <h3></h3>\n              </div>\n\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons\" style=\"color:#092863\">create</i>\n                  Update info...\n\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n        <router-outlet></router-outlet>\n     \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/users.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-primary\">\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <i class=\"material-icons cutom\" (click)=\"open(classic,'' , '',1, {})\" title=\"Add new user\">add_circle_outline</i>\n                <h4 class=\"card-title\"> {{getTitle(2)}}</h4>\n              </div>\n              <div class=\"col-md-4 text-right\">\n               \n                  <input type=\"text\" value=\"\" class=\"form-control custom\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body table-responsive\">\n              <div class=\"mat-elevation-z8\">\n                  <table mat-table [dataSource]=\"dataSource\" class=\"table-hover\" matSort>\n                \n                    <ng-container matColumnDef=\"id\">\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n                      <td mat-cell *matCellDef=\"let user\" (click)=\"open(classic,'' , '',3, user)\"> {{user.id}} </td>\n                    </ng-container>\n                \n                    <ng-container matColumnDef=\"name\">\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                      <td mat-cell *matCellDef=\"let user\" (click)=\"open(classic,'' , '',3, user)\"> {{user.name}} </td>\n                    </ng-container>\n                \n                    <ng-container matColumnDef=\"email\">\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\n                      <td mat-cell *matCellDef=\"let user\" (click)=\"open(classic,'' , '',3, user)\"> {{user.email}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"phone\">\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Phone </th>\n                      <td mat-cell *matCellDef=\"let user\" (click)=\"open(classic,'' , '',3, user)\"> {{user.phone}} </td>\n                    </ng-container>\n          \n                    <ng-container matColumnDef=\"action\">\n                      <th mat-header-cell *matHeaderCellDef> Action </th>\n                      <td mat-cell *matCellDef=\"let user\"> <button mat-raised-button type=\"button\" (click)=\"open(classic,'' , '',2, user)\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                          <i class=\"material-icons\">edit</i>\n                        </button>\n                        <button mat-raised-button type=\"button\" (click)=\"deleteUser(user.id)\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                          <i class=\"material-icons\">close</i>\n                        </button> </td>\n                    </ng-container>\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n                    </tr>\n                  </table>\n                \n                  <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n                </div>\n            <!-- <table class=\"table table-hover\">\n              <thead class=\"\">\n              <th>ID</th>\n              <th>Name</th>\n              <th>Email</th>\n              <th>Phone</th>\n              <th>Action</th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let user of model | myfilter : searchText\">\n                  <td (click)=\"open(classic,'' , '',3, user)\">{{user.id}}</td>\n                  <td (click)=\"open(classic,'' , '',3, user)\">{{user.name}}</td>\n                  <td (click)=\"open(classic,'' , '',3, user)\">{{user.email}}</td>\n                  <td (click)=\"open(classic,'' , '',3, user)\">{{user.phone}}</td>\n                  <td class=\"td-actions\">\n                    <button mat-raised-button type=\"button\" (click)=\"open(classic,'' , '',2, user)\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                      <i class=\"material-icons\">edit</i>\n                    </button>\n                    <button mat-raised-button type=\"button\" (click)=\"deleteUser(user.id)\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                      <i class=\"material-icons\">close</i>\n                    </button>\n                  </td>\n                </tr>\n\n              </tbody>\n            </table> -->\n          </div>\n          <ng-template #classic let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h6 class=\"modal-title\" id=\"modal-title-default\">{{modelDialog.headerTitle}}</h6>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                  <span aria-hidden=\"true\">×</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <form role=\"form\" #f=\"ngForm\" *ngIf=\"operationOption != 3\">\n                  <div class=\"form-group mb-3\">\n                    <div class=\"form-group mb-3\" *ngIf=\"operationOption == 2\">\n                      <div class=\"input-group input-group-alternative\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">ID</span>\n\n                        </div>\n                        <input class=\"form-control\" placeholder=\"id\" [(ngModel)]=\"user.id\" name=\"userId\" required type=\"text\" disabled>\n                      </div>\n                    </div>\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">Name</span>\n\n                      </div>\n                      <input class=\"form-control\" placeholder=\"username\" [(ngModel)]=\"user.name\" name=\"username\" required type=\"text\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">Email</span>\n                      </div>\n                      <input class=\"form-control\" placeholder=\"email\" name=\"email\" [(ngModel)]=\"user.email\" type=\"text\" required>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">Phone</span>\n                      </div>\n                      <input class=\"form-control\" placeholder=\"phone\" name=\"phone\" [(ngModel)]=\"user.phone\" type=\"text\" required>\n                    </div>\n                  </div>\n\n\n                </form>\n                <form role=\"form\" #f=\"ngForm\" *ngIf=\"operationOption == 3\">\n                  <div class=\"row\">\n                    <div class=\"col-md-8\">\n                      <div class=\"form-group mb-3\">\n                        <div class=\"form-group mb-3\">\n                          <div class=\"input-group input-group-alternative\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">ID: </span>\n\n                            </div>\n                            <span>{{user.id}}</span>\n                          </div>\n                        </div>\n                        <div class=\"input-group input-group-alternative\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">Name: </span>\n\n                          </div>\n                          <span>{{user.name}}</span>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"input-group input-group-alternative\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">Email: </span>\n                          </div>\n                          <span>{{user.email}}</span>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"input-group input-group-alternative\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">Phone: </span>\n                          </div>\n                          <span>{{user.phone}}</span>\n                        </div>\n                      </div>\n\n\n                    </div>\n                    <div class=\"col-md-4\">\n                      <img [src]=\"user.img?user.img:'/assets/img/user.jpg'\" style=\"height:75px;\" />\n                    </div>\n                  </div>\n               \n                </form>\n\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateUser()\" *ngIf=\"operationOption == 2\">{{modelDialog.buttonTitle}}</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"addUser()\" *ngIf=\"operationOption == 1\">{{modelDialog.buttonTitle}}</button>\n                <button type=\"button\" class=\"btn btn-default  ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n \n</div>\n\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/Layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/Layout/layout.component.html")
    }),
    __metadata("design:paramtypes", [])
], LayoutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _org_chart_org_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./org-chart/org-chart.component */ "./src/app/org-chart/org-chart.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _Layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Layout/layout.component */ "./src/app/Layout/layout.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _departments_chart_department_char_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./departments-chart/department-char.component */ "./src/app/departments-chart/department-char.component.ts");
/* harmony import */ var _org_demo_org_demo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./org-demo/org-demo.component */ "./src/app/org-demo/org-demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        "path": "",
        "component": _Layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        "children": [
            {
                path: "home",
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            },
            {
                path: "users",
                component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]
            },
            {
                path: "groups",
                component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_4__["GroupsComponent"]
            },
            {
                path: "org-chart",
                component: _org_chart_org_chart_component__WEBPACK_IMPORTED_MODULE_5__["OrgChartComponent"]
            },
            {
                path: "org-demo",
                component: _org_demo_org_demo_component__WEBPACK_IMPORTED_MODULE_10__["OrgDemoComponent"]
            },
            {
                path: "dep-chart",
                component: _departments_chart_department_char_component__WEBPACK_IMPORTED_MODULE_9__["depchartComponent"]
            },
            {
                path: "settings",
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "./src/app/settings/settings.module.ts")).then(m => m.SettingsModule)
            }
        ]
    },
    {
        "path": "login",
        "component": _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AppComponent = class AppComponent {
    constructor(commonSvc, authSvc) {
        this.commonSvc = commonSvc;
        this.authSvc = authSvc;
        this.title = 'app';
        if (!this.authSvc.isLogedIn) {
            this.commonSvc.initializeData().subscribe((res) => {
                console.log(res);
            });
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/utils/utility.service */ "./src/shared/utils/utility.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Layout_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Layout/layout.component */ "./src/app/Layout/layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _org_chart_org_chart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./org-chart/org-chart.component */ "./src/app/org-chart/org-chart.component.ts");
/* harmony import */ var _org_demo_org_demo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./org-demo/org-demo.component */ "./src/app/org-demo/org-demo.component.ts");
/* harmony import */ var _departments_chart_department_char_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./departments-chart/department-char.component */ "./src/app/departments-chart/department-char.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _settings_settings_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./settings/settings.module */ "./src/app/settings/settings.module.ts");
/* harmony import */ var _shared_pipes_myfilter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../shared/pipes/myfilter */ "./src/shared/pipes/myfilter.ts");
/* harmony import */ var _shared_pipes_groupsfilter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shared/pipes/groupsfilter */ "./src/shared/pipes/groupsfilter.ts");
/* harmony import */ var _shared_directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../shared/directives/auto-focus.directive */ "./src/shared/directives/auto-focus.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _Layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
            _users_users_component__WEBPACK_IMPORTED_MODULE_15__["UsersComponent"],
            _groups_groups_component__WEBPACK_IMPORTED_MODULE_16__["GroupsComponent"],
            _org_chart_org_chart_component__WEBPACK_IMPORTED_MODULE_17__["OrgChartComponent"],
            _shared_pipes_myfilter__WEBPACK_IMPORTED_MODULE_23__["MyFilter"],
            _shared_pipes_groupsfilter__WEBPACK_IMPORTED_MODULE_24__["GroupsFilter"],
            _shared_directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_25__["AutofocusDirective"],
            _departments_chart_department_char_component__WEBPACK_IMPORTED_MODULE_19__["depchartComponent"],
            _org_demo_org_demo_component__WEBPACK_IMPORTED_MODULE_18__["OrgDemoComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_21__["LayoutModule"],
            _settings_settings_module__WEBPACK_IMPORTED_MODULE_22__["SettingsModule"]
        ],
        exports: [_shared_pipes_myfilter__WEBPACK_IMPORTED_MODULE_23__["MyFilter"], _shared_pipes_groupsfilter__WEBPACK_IMPORTED_MODULE_24__["GroupsFilter"]],
        providers: [
            _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
            _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/departments-chart/department-char.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/departments-chart/department-char.component.ts ***!
  \****************************************************************/
/*! exports provided: depchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "depchartComponent", function() { return depchartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_Data_Groups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Data/Groups */ "./src/services/Data/Groups.ts");
/* harmony import */ var _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/utils/utility.service */ "./src/shared/utils/utility.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var option;
(function (option) {
    option[option["ADD"] = 1] = "ADD";
    option[option["EDIT"] = 2] = "EDIT";
    option[option["DETAIL"] = 3] = "DETAIL";
})(option || (option = {}));
let depchartComponent = class depchartComponent {
    constructor(modalService, http, commonSvc, utilitySvc, baseUrl) {
        //http.get<OrgCharts[]>(baseUrl + 'organization').subscribe(result => {
        //    this.orgData = result;
        //    let data = localStorage.getItem('orgChart');
        //    if (data == null || data && JSON.parse(data).length == 0) {
        //        localStorage.setItem('orgChart', JSON.stringify(result));
        //    }
        this.modalService = modalService;
        this.commonSvc = commonSvc;
        this.utilitySvc = utilitySvc;
        this.selectedUser = 0;
        this.selectedOrgUser = 0;
        this.selectedgroup = 0;
        this.throughGraph = true;
        this.viewDetail = false;
        this.addUToOrg = false;
        //}, error => {
        //    console.error(error)
        //});
        this.fetchGroupChart();
    }
    ngOnInit() {
        title: 'Dep-Chart';
        this.users = JSON.parse(localStorage.getItem('users'));
        this.orgData = JSON.parse(localStorage.getItem('orgChart'));
        this.groups = JSON.parse(localStorage.getItem('Groups'));
        this.addedGroup = JSON.parse(localStorage.getItem('addtogrp'));
        this.addedGroup = JSON.parse(localStorage.getItem('addtogrp'));
        this.fetchGroupChart();
    }
    getTitle(id) {
        return this.commonSvc.getOptionTitle(id);
    }
    fetchGroupChart() {
        let that = this;
        setTimeout(() => {
            var addedgroupdata = JSON.parse(localStorage.getItem('addtogrp'));
            var groups = JSON.parse(localStorage.getItem('Groups'));
            var grp = {};
            for (var prop in groups) {
                var temp = new _services_Data_Groups__WEBPACK_IMPORTED_MODULE_4__["groupinfo"]();
                var name = groups[prop].name;
                temp.group = groups[prop][name].group,
                    temp.groupName = groups[prop][name].groupName,
                    temp.groupState = groups[prop][name].groupState,
                    temp.template = groups[prop][name].template;
                grp[groups[prop].name] = temp;
            }
            new OrgChart(document.getElementById("group"), {
                mouseScrool: OrgChart.action.EXPAND,
                template: "olivia",
                enableDragDrop: true,
                dragDropMenu: {
                    addInGroup: { text: "Add in group", onClick: addAsGroup },
                },
                nodeBinding: {
                    field_0: "name",
                    field_1: "title",
                    img_0: "img"
                },
                tags: grp,
                nodeMenu: {
                    details: { text: "Delete", icon: OrgChart.icon.remove(18, 18, '#092863'), onClick: Deletegroups },
                    child: { text: "Add a child group", icon: OrgChart.icon.add(18, 18, '#092863'), onClick: ChildGroup },
                },
                nodes: addedgroupdata
            });
        }, 200);
        function ChildGroup(nodeID) {
            that.subgroupid = nodeID;
            $('#childGroup').click();
        }
        function Deletegroups(nodeID) {
            var data = JSON.parse(localStorage.getItem('addtogrp'));
            if (nodeID < 999) {
                var afterDeletedData = data.filter((item) => {
                    return !(item.id == nodeID || item.pid == nodeID);
                });
                localStorage.setItem('addtogrp', JSON.stringify(afterDeletedData));
                that.commonSvc.deleteGroup(nodeID).subscribe((isDeleted) => {
                    if (isDeleted) {
                        that.utilitySvc.showNotification('success', 'Congratulation! Deleted Successfully');
                    }
                    else {
                        that.utilitySvc.showNotification('danger', `This ${this.getTitle(1)} name is already in use!`);
                    }
                });
            }
            else {
                var afterDeletedData = data.filter((item) => {
                    console.log(item.id == nodeID);
                    return !(item.id == nodeID);
                });
                localStorage.setItem('addtogrp', JSON.stringify(afterDeletedData));
            }
            that.fetchGroupChart();
        }
        function addAsGroup(nodeID, gropuid) {
            var data = JSON.parse(localStorage.getItem('addtogrp'));
            for (var i = 0; i < data.length; i++) {
                if (data[i].tags == nodeID) {
                    if (data[i].id > 999) {
                        debugger;
                        data[i].tags = [gropuid];
                        localStorage.setItem('addtogrp', JSON.stringify(data));
                        that.fetchGroupChart();
                    }
                }
            }
        }
    }
    addGroup(subgroupid) {
        if (subgroupid == undefined) {
            this.commonSvc.addGroup(this.group).subscribe((isAdded) => {
                if (isAdded) {
                    this.fetchGroupChart();
                    this.modalService.dismissAll();
                    this.utilitySvc.showNotification('success', 'Record added successfully!!');
                }
            });
        }
        else {
            this.commonSvc.addSubGroup(this.group, subgroupid).subscribe((isAdded) => {
                if (isAdded) {
                    this.fetchGroupChart();
                    this.modalService.dismissAll();
                    this.utilitySvc.showNotification('success', 'Record added successfully!!');
                }
            });
        }
    }
    open(content, type, modalDimension, groupOption, group) {
        this.operationOption = groupOption;
        if (option.ADD == groupOption) {
            debugger;
            let headerTitle = "ADD " + this.getTitle(1);
            let buttonTitle = "Save";
            this.modelDialog = { headerTitle, buttonTitle };
            this.group = new _services_Data_Groups__WEBPACK_IMPORTED_MODULE_4__["Group"]();
        }
        if (option.EDIT == groupOption) {
            let headerTitle = "EDIT " + this.getTitle(1);
            let buttonTitle = "Save changes";
            this.modelDialog = { headerTitle, buttonTitle };
            this.group = group;
        }
        if (option.DETAIL == groupOption) {
            let headerTitle = this.getTitle(1) + " DETAIL";
            let buttonTitle = "";
            this.modelDialog = { headerTitle, buttonTitle };
            this.group = group;
        }
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
        else if (modalDimension === '' && type === 'Notification') {
            this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = this.getDismissReason(reason);
            });
        }
        else {
            debugger;
            this.modalService.open(content, { centered: true }).result.then((result) => {
                this.closeResult = result;
            }, (reason) => {
                this.closeResult = this.getDismissReason(reason);
            });
        }
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return reason;
        }
    }
};
depchartComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('groupTempl', { static: false }),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
], depchartComponent.prototype, "input", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
], depchartComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], { static: true }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
], depchartComponent.prototype, "sort", void 0);
depchartComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-depchartComponent',
        template: __webpack_require__(/*! raw-loader!./department-chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/departments-chart/department-chart.component.html"),
        styles: [__webpack_require__(/*! ./style.css */ "./src/app/departments-chart/style.css")]
    }),
    __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"], String])
], depchartComponent);



/***/ }),

/***/ "./src/app/departments-chart/style.css":
/*!*********************************************!*\
  !*** ./src/app/departments-chart/style.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.modal-dialog{\n    max-width: 650px!important;\n  }\n  @media (min-width: 576px)\n  {modal-dialog \n  {\n    max-width: 650px !important;\n  }\n  }\n  .cover-photo {\n    background: #041027;\n    height: 100px;\n  }\n  .photo {\n    background: #f9f9f9;\n    height: 100px;\n    display: flex;\n    justify-content: center;\n  }\n  img {\n    position: relative;\n    top: -50px;\n    max-width: 100%;\n    max-height: 100%;\n    border-radius: 50%;\n    box-shadow: -1px 1px 11px 6px rgba(0, 0, 0, 0.3);\n  }\n  #icon{\n    font-size: 22px;\n    \n    color: #000000;\n}\n  .content {\n    background: #f9f9f9;\n    height: 100px;\n    position: relative;\n    top: -35px;\n  }\n  .contact {\n    background: #30354d;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  h2.name,\n  h3,\n  a {\n    margin: 0;\n    text-align: center;\n  }\n  h2.name {\n    padding-bottom: 20px;\n  }\n  h3.fullstack {\n    padding-bottom: 10px;\n  }\n  a {\n    color: #0ab581;\n    text-decoration: none;\n  }\n  a:hover {\n      color: black;\n    }\n  ul {\n    padding: 0;\n  }\n  .fa {\n    font-size: 22px;\n    padding: 10px;\n    text-decoration: none;\n    color: #0ab581;\n  }\n  .fa:hover {\n      color: #000;\n    }\n  .details-view .edit-photo {\n    background: #092863 !important;\n  }\n  #group {\n    width: 100%;\n    height: 100%;\n}\n  .material-icons.cutom {\n  color:#02325d;\n}\n  .material-icons.cutom {\n  font-size: 54px!important;\n  margin-top: -17px!important;\n  margin-left: auto;\n  cursor: pointer!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVwYXJ0bWVudHMtY2hhcnQvc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLDBCQUEwQjtFQUM1QjtFQUNBO0dBQ0M7O0lBRUMsMkJBQTJCO0VBQzdCO0VBQ0E7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBR2IsYUFBYTtJQUdiLHVCQUF1QjtFQUN6QjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnREFBZ0Q7RUFDbEQ7RUFDQTtJQUNFLGVBQWU7O0lBRWYsY0FBYztBQUNsQjtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaO0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtJQUdaLGFBQWE7SUFHYix1QkFBdUI7SUFHdkIsbUJBQW1CO0VBQ3JCO0VBRUE7OztJQUdFLFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7RUFFQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBRUE7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCO0VBRUU7TUFDRSxZQUFZO0lBQ2Q7RUFFRjtJQUNFLFVBQVU7RUFDWjtFQUVBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsY0FBYztFQUNoQjtFQUVFO01BQ0UsV0FBVztJQUNiO0VBRUY7SUFDRSw4QkFBOEI7RUFDaEM7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0VBQ0E7RUFDRSxhQUFhO0FBQ2Y7RUFDQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2RlcGFydG1lbnRzLWNoYXJ0L3N0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1vZGFsLWRpYWxvZ3tcbiAgICBtYXgtd2lkdGg6IDY1MHB4IWltcG9ydGFudDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpXG4gIHttb2RhbC1kaWFsb2cgXG4gIHtcbiAgICBtYXgtd2lkdGg6IDY1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgfVxuICBcbiAgLmNvdmVyLXBob3RvIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDQxMDI3O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgXG4gIC5waG90byB7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNTBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogLTFweCAxcHggMTFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB9XG4gICNpY29ue1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cbiAgLmNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMzVweDtcbiAgfVxuICBcbiAgLmNvbnRhY3Qge1xuICAgIGJhY2tncm91bmQ6ICMzMDM1NGQ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgaDIubmFtZSxcbiAgaDMsXG4gIGEge1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIGgyLm5hbWUge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICBoMy5mdWxsc3RhY2sge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICBhIHtcbiAgICBjb2xvcjogIzBhYjU4MTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gICAgYTpob3ZlciB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuICBcbiAgdWwge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5mYSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMGFiNTgxO1xuICB9XG4gIFxuICAgIC5mYTpob3ZlciB7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG4gIFxuICAuZGV0YWlscy12aWV3IC5lZGl0LXBob3RvIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDkyODYzICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gICNncm91cCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLm1hdGVyaWFsLWljb25zLmN1dG9tIHtcbiAgY29sb3I6IzAyMzI1ZDtcbn1cbi5tYXRlcmlhbC1pY29ucy5jdXRvbSB7XG4gIGZvbnQtc2l6ZTogNTRweCFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0xN3B4IWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlciFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/groups/groups.component.ts":
/*!********************************************!*\
  !*** ./src/app/groups/groups.component.ts ***!
  \********************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/utils/utility.service */ "./src/shared/utils/utility.service.ts");
/* harmony import */ var _services_Data_Groups__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/Data/Groups */ "./src/services/Data/Groups.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var option;
(function (option) {
    option[option["ADD"] = 1] = "ADD";
    option[option["EDIT"] = 2] = "EDIT";
    option[option["DETAIL"] = 3] = "DETAIL";
})(option || (option = {}));
let GroupsComponent = class GroupsComponent {
    constructor(modalService, commonSvc, utilitySvc) {
        this.modalService = modalService;
        this.commonSvc = commonSvc;
        this.utilitySvc = utilitySvc;
        this.searchText = "";
        this.displayedColumns = ['id', 'active', 'name', 'group icon', 'action'];
        this.getGroups();
    }
    ngOnInit() {
        this.getGroups();
    }
    getTitle(id) {
        return this.commonSvc.getOptionTitle(id);
    }
    getGroups() {
        this.commonSvc.getGroups().subscribe((res) => {
            this.model = res;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    deleteGroup(id) {
        this.commonSvc.deleteGroup(id).subscribe((isDeleted) => {
            if (isDeleted) {
                this.getGroups();
                this.utilitySvc.showNotification('success', 'Congratulation! Deleted Successfully');
            }
            else {
                this.utilitySvc.showNotification('danger', `This ${this.getTitle(1)} name is already in use!`);
            }
        });
    }
    updateGroup() {
        this.commonSvc.updateGroup(this.group).subscribe((isUpdated) => {
            if (isUpdated) {
                this.getGroups();
                this.modalService.dismissAll();
                this.utilitySvc.showNotification('success', 'Record updated successfully!');
            }
        });
    }
    addGroup() {
        debugger;
        this.commonSvc.addGroup(this.group).subscribe((isAdded) => {
            if (isAdded) {
                this.getGroups();
                this.modalService.dismissAll();
                this.utilitySvc.showNotification('success', 'Love you jaan!!');
            }
        });
    }
    open(content, type, modalDimension, groupOption, group) {
        this.operationOption = groupOption;
        if (option.ADD == groupOption) {
            let headerTitle = "ADD " + this.getTitle(1);
            let buttonTitle = "Save";
            this.modelDialog = { headerTitle, buttonTitle };
            this.group = new _services_Data_Groups__WEBPACK_IMPORTED_MODULE_7__["Group"]();
        }
        if (option.EDIT == groupOption) {
            let headerTitle = "EDIT " + this.getTitle(1);
            let buttonTitle = "Save changes";
            this.modelDialog = { headerTitle, buttonTitle };
            this.group = group;
        }
        if (option.DETAIL == groupOption) {
            let headerTitle = this.getTitle(1) + " DETAIL";
            let buttonTitle = "";
            this.modelDialog = { headerTitle, buttonTitle };
            this.group = group;
        }
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
        else if (modalDimension === '' && type === 'Notification') {
            this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content, { centered: true }).result.then((result) => {
                this.closeResult = result;
            }, (reason) => {
                this.closeResult = this.getDismissReason(reason);
            });
        }
    }
    happyBirthday() {
        alert("HBD");
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return reason;
        }
    }
};
GroupsComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], GroupsComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], GroupsComponent.prototype, "sort", void 0);
GroupsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-groups-component',
        template: __webpack_require__(/*! raw-loader!./groups.component.html */ "./node_modules/raw-loader/index.js!./src/app/groups/groups.component.html"),
        styles: [__webpack_require__(/*! ./style.css */ "./src/app/groups/style.css")]
    }),
    __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]])
], GroupsComponent);



/***/ }),

/***/ "./src/app/groups/style.css":
/*!**********************************!*\
  !*** ./src/app/groups/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  h4.card-title{\n    position: relative;\n    display: inline;\n    top: -13px;\n  }\n  \n  .form-check .form-check-label span {\n top: -8px!important;  \n}\n  \n  #hbd{\n\nalign-content: center;\nmargin-left: 30px;\ncolor:blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL3N0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7RUFDWjs7RUFDQTtDQUNELG1CQUFtQjtBQUNwQjs7RUFFQTs7QUFFQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLFVBQVU7QUFDViIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9zdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGg0LmNhcmQtdGl0bGV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB0b3A6IC0xM3B4O1xuICB9XG4gIC5mb3JtLWNoZWNrIC5mb3JtLWNoZWNrLWxhYmVsIHNwYW4ge1xuIHRvcDogLThweCFpbXBvcnRhbnQ7ICBcbn1cblxuI2hiZHtcblxuYWxpZ24tY29udGVudDogY2VudGVyO1xubWFyZ2luLWxlZnQ6IDMwcHg7XG5jb2xvcjpibHVlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AuthGuard = class AuthGuard {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authSvc.isLogedIn) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 8px 0; }\n\np {\n  margin: 0; }\n\n.spacer {\n  flex: 1; }\n\n.toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600; }\n\n.toolbar img {\n  margin: 0 16px; }\n\n.toolbar #twitter-logo {\n  height: 40px;\n  margin: 0 16px; }\n\n.toolbar #twitter-logo:hover {\n  opacity: 0.8; }\n\n.content {\n  display: flex;\n  margin: 82px auto 32px;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center; }\n\nsvg.material-icons {\n  height: 24px;\n  width: auto; }\n\nsvg.material-icons:not(:last-child) {\n  margin-right: 8px; }\n\n.card svg.material-icons path {\n  fill: #888; }\n\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px; }\n\n.card {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px; }\n\n.card-container .card:not(:last-child) {\n  margin-right: 0; }\n\n.card.card-small {\n  height: 16px;\n  width: 168px; }\n\n.card-container .card:not(.highlight-card) {\n  cursor: pointer; }\n\n.card-container .card:not(.highlight-card):hover {\n  -webkit-transform: translateY(-3px);\n          transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35); }\n\n.card-container .card:not(.highlight-card):hover .material-icons path {\n  fill: #696767; }\n\n.card.highlight-card {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative; }\n\n.card.card.highlight-card span {\n  /* margin-left: 20px; */\n  align-content: center; }\n\nsvg#rocket {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px; }\n\nsvg#rocket-smoke {\n  height: calc(100vh - 95px);\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10; }\n\na,\na:visited,\na:hover {\n  color: #1976d2;\n  text-decoration: none; }\n\na:hover {\n  color: #125699; }\n\n.terminal {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10; }\n\n.terminal::before {\n  content: \"\\2022 \\2022 \\2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px; }\n\n.terminal pre {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0; }\n\n.circle-link {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out; }\n\n.circle-link:hover {\n  -webkit-transform: translateY(-0.25rem);\n          transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2); }\n\nfooter {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px; }\n\nfooter a {\n  display: flex;\n  align-items: center; }\n\n.github-star-badge {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; }\n\n.github-star-badge:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -.5em; }\n\n.github-star-badge .material-icons {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px; }\n\nsvg#clouds {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px; }\n\n/* Responsive Styles */\n\n@media screen and (max-width: 767px) {\n  .card-container > *:not(.circle-link),\n  .terminal {\n    width: 100%; }\n  .card:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0; }\n  .card.highlight-card span {\n    /* margin-left: 72px; */\n    align-content: center; }\n  svg#rocket-smoke {\n    right: 120px;\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg); } }\n\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke {\n    display: none;\n    visibility: hidden; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcWm9vbVxcQ2xpZW50QXBwL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMEpBQTBKO0VBQzFKLGVBQWU7RUFDZixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxrQ0FBa0MsRUFBQTs7QUFHcEM7Ozs7OztFQU1FLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFNBQVMsRUFBQTs7QUFHWDtFQUNFLE9BQU8sRUFBQTs7QUFHVDtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUdoQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsMENBQTBDLEVBQUE7O0FBRzVDO0VBQ0UsYUFBd0IsRUFBQTs7QUFHMUI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx1QkFBQTtFQUNBLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFHWjtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBR2Q7OztFQUdFLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUFpQyxFQUFBOztBQUduQztFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsbUJBQTJCO0VBQzNCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usb0VBQW9FO0VBQ3BFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsU0FBUyxFQUFBOztBQUdYO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHdFQUF3RTtFQUN4RSx1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSx1Q0FBK0I7VUFBL0IsK0JBQStCO0VBQy9CLDJDQUEyQyxFQUFBOztBQUc3QztFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHVDQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsZ0VBQThEO0VBQzlELGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0lBQWtJLEVBQUE7O0FBR3BJO0VBQ0UsZ0VBQThEO0VBQzlELG9DQUFnQztFQUNoQywwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBSWYsc0JBQUE7O0FBQ0E7RUFFRTs7SUFFRSxXQUFXLEVBQUE7RUFHYjtJQUNFLFlBQVk7SUFDWixhQUFhLEVBQUE7RUFHZjtJQUNBLHVCQUFBO0lBQ0EscUJBQXFCLEVBQUE7RUFHckI7SUFDRSxZQUFZO0lBQ1osZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBLEVBQ3pCOztBQUdIO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCLEVBQUEsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICA6aG9zdCB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgfVxyXG5cclxuICBoMSxcclxuICBoMixcclxuICBoMyxcclxuICBoNCxcclxuICBoNSxcclxuICBoNiB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuc3BhY2VyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG5cclxuICAudG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIgaW1nIHtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogODJweCBhdXRvIDMycHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBzdmcubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICBzdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcblxyXG4gIC5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICAgIGZpbGw6ICM4ODg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIDhweCAxNnB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5jYXJkLmNhcmQtc21hbGwge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDE2OHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gICAgZmlsbDogcmdiKDEwNSwgMTAzLCAxMDMpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAyMHB4OyAqL1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgc3ZnI3JvY2tldCB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgdG9wOiAtMjRweDtcclxuICB9XHJcblxyXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTVweCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTgwcHg7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgfVxyXG5cclxuICBhLFxyXG4gIGE6dmlzaXRlZCxcclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzEyNTY5OTtcclxuICB9XHJcblxyXG4gIC50ZXJtaW5hbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTtcclxuICB9XHJcblxyXG4gIC50ZXJtaW5hbDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwyMDIyIFxcMjAyMiBcXDIwMjJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1OCwgNTgsIDU4KTtcclxuICAgIGNvbG9yOiAjYzJjM2M0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDE0cHggMDtcclxuICAgIHRleHQtaW5kZW50OiA0cHg7XHJcbiAgfVxyXG5cclxuICAudGVybWluYWwgcHJlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMCAxcmVtIDFyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlLWxpbmsge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlLWxpbms6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG5cclxuICBmb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIGZvb3RlciBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIHtcclxuICAgIGNvbG9yOiAjMjQyOTJlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsMzEsMzUsLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZhZmJmYywjZWZmM2Y2IDkwJSk7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7XHJcbiAgfVxyXG5cclxuICAuZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2YwZjNmNiwjZTZlYmYxIDkwJSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjcsMzEsMzUsLjM1KTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xyXG4gIH1cclxuXHJcbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI2Nsb3VkcyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IC0xNjBweDtcclxuICAgIGxlZnQ6IC0yMzBweDtcclxuICAgIHotaW5kZXg6IC0xMDtcclxuICAgIHdpZHRoOiAxOTIwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAgIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxyXG4gICAgLnRlcm1pbmFsIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogNzJweDsgKi9cclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgICAgcmlnaHQ6IDEyMHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let HomeComponent = class HomeComponent {
    constructor(commonSvc) {
        this.commonSvc = commonSvc;
        this.orgLevel = 0;
    }
    ngOnInit() {
        this.commonSvc.getUsers().subscribe((res) => {
            this.users = res;
        });
        this.commonSvc.getGroups().subscribe((res) => {
            this.groups = res;
        });
        this.commonSvc.getOrganizationLevel().subscribe((res) => {
            this.orgLevel = res;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }
];
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/layout/BaseLayoutComponent.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/BaseLayoutComponent.ts ***!
  \***********************************************/
/*! exports provided: BaseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return BaseLayoutComponent; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");

class BaseLayoutComponent {
    constructor(authSvc) {
        this.authSvc = authSvc;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    logout() {
        this.authSvc.logout();
    }
}
BaseLayoutComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"] }
];


/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let FooterComponent = class FooterComponent {
    constructor() {
        this.test = new Date();
    }
    ngOnInit() {
    }
};
FooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/layout/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let LayoutModule = class LayoutModule {
};
LayoutModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
        declarations: [
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
        ],
        exports: [
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
        ]
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\n  cursor:pointer!important;\n}\n#profileDropdown span {\n  padding: 5px;\n}\nimg.logo {\n  height: 98px;\n  width: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XG4gIGN1cnNvcjpwb2ludGVyIWltcG9ydGFudDtcbn1cbiNwcm9maWxlRHJvcGRvd24gc3BhbiB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuaW1nLmxvZ28ge1xuICBoZWlnaHQ6IDk4cHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _BaseLayoutComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BaseLayoutComponent */ "./src/app/layout/BaseLayoutComponent.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let NavbarComponent = class NavbarComponent extends _BaseLayoutComponent__WEBPACK_IMPORTED_MODULE_5__["BaseLayoutComponent"] {
    constructor(location, router, authSvc, element) {
        super(authSvc);
        this.router = router;
        this.element = element;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    ngOnInit() {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(listTitle => listTitle);
        const navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe((event) => {
            this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                this.mobile_menu_visible = 0;
            }
        });
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    }
    ;
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    }
    ;
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        const body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    }
    ;
    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
NavbarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/layout/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.css":
/*!******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _BaseLayoutComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BaseLayoutComponent */ "./src/app/layout/BaseLayoutComponent.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common.service */ "./src/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// let data = JSON.parse(localStorage.getItem('options'));
// var result;
// result = data[0].name; 
let ROUTES = [
    { path: '', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/org-chart', title: 'Chart', icon: 'bubble_chart', class: '' },
    { path: '/org-demo', title: 'demo', icon: 'bubble_chart', class: '' },
    { path: '/dep-chart', title: " chart", icon: 'bubble_chart', class: '' },
    { path: '/users', title: 'Users', icon: 'supervisor_account', class: '' },
    { path: '/groups', title: 'Groups', icon: 'group_work', class: '' },
    { path: '/settings', title: 'Settings', icon: '', class: '' },
    { path: '/settings/options-configuration', title: 'Settings/options-configuration', icon: '', class: '' }
];
let SidebarComponent = class SidebarComponent extends _BaseLayoutComponent__WEBPACK_IMPORTED_MODULE_1__["BaseLayoutComponent"] {
    constructor(authSvc, commonSvc) {
        super(authSvc);
        this.commonSvc = commonSvc;
    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    getTitle(id) {
        let varia = this.commonSvc.getOptionTitle(id);
        ROUTES[2].title = varia + " Chart";
        ROUTES[4].title = varia;
        return varia;
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }
    ;
};
SidebarComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
SidebarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/layout/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
], SidebarComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-shaped .shape {\n  position: absolute;\n  top: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n}\n\n/*.card-header {\n  background: linear-gradient(0deg, #011446, #00356b)!important;\n}*/\n\ndiv.header {\n  background: url('background.png') no-repeat;\n  background-color: #011446;\n  border-radius: 10px;\n  background-size: cover;\n  height: 130px;\n}\n\nimg.logo {\n  margin-left: 28px;\n  margin-top: 13px;\n  height: 117px;\n  width: 115px\n}\n\nspan.title {\n  font-size: 30px;\n  font-weight: 400;\n  color: #ffff\n}\n\ndiv.loginParent {\n  background-color: #ffff !important;\n  border-radius: unset;\n  width: 380px;\n  position: relative;\n  margin: 0 auto;\n  padding: 0;\n  top: 10%;\n}\n\ndiv.loginHeader {\n  background: linear-gradient(141deg, #eaebec, #f0f3f9);\n  padding: 10px;\n  border: 1px solid #dad9d9;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n}\n\nform {\n  background: linear-gradient(141deg, #eaebec, #f0f3f9);\n  padding: 27px;\n  border: 1px solid #dad9d9;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top: none\n}\n\n.alert {\n  line-height: 15px !important;\n  padding: 10px 15px;\n}\n\n.loginContainer {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  position: absolute;\n  height: calc(100% - 70px);\n  display: flex;\n  flex-direction: column;\n}\n\n.loginContainer .row:nth-child(2) {\n  height: 100%;\n}\n\n.loginContainer .row .card {\n  height: 100% !important;\n}\n\n@media only screen and (max-width: 500px) {\n  span.title {\n    font-size: 25px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUU7O0FBQ0Y7RUFDRSwyQ0FBMEQ7RUFDMUQseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2I7QUFDRjs7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEI7QUFDRjs7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFDQTtFQUNFLHFEQUFxRDtFQUNyRCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxxREFBcUQ7RUFDckQsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCO0FBQ0Y7O0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1zaGFwZWQgLnNoYXBlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKi5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMDExNDQ2LCAjMDAzNTZiKSFpbXBvcnRhbnQ7XG59Ki9cbmRpdi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNDQ2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEzMHB4O1xufVxuaW1nLmxvZ28ge1xuICBtYXJnaW4tbGVmdDogMjhweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgaGVpZ2h0OiAxMTdweDtcbiAgd2lkdGg6IDExNXB4XG59XG5zcGFuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZmZcbn1cbmRpdi5sb2dpblBhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xuICB3aWR0aDogMzgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIHRvcDogMTAlO1xufVxuZGl2LmxvZ2luSGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0MWRlZywgI2VhZWJlYywgI2YwZjNmOSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWQ5ZDk7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbn1cbmZvcm0ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCAjZWFlYmVjLCAjZjBmM2Y5KTtcbiAgcGFkZGluZzogMjdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZDlkOTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wOiBub25lXG59XG4uYWxlcnQge1xuICBsaW5lLWhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG4ubG9naW5Db250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzBweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubG9naW5Db250YWluZXIgLnJvdzpudGgtY2hpbGQoMikge1xuICBoZWlnaHQ6IDEwMCU7XG59IFxuLmxvZ2luQ29udGFpbmVyIC5yb3cgLmNhcmQge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgc3Bhbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let LoginComponent = class LoginComponent {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
    }
    login(form) {
        this.submitted = true;
        if (form.invalid)
            return true;
        this.authSvc.login(this.email, this.password).subscribe((isloggedIn) => {
            if (isloggedIn) {
                this.router.navigate(['/']);
            }
            else {
                this.error = 'Invalid user and password!';
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/org-chart/org-chart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/org-chart/org-chart.component.ts ***!
  \**************************************************/
/*! exports provided: OrgChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgChartComponent", function() { return OrgChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_Data_Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Data/Users */ "./src/services/Data/Users.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_Data_OrgChartsData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/Data/OrgChartsData */ "./src/services/Data/OrgChartsData.ts");
/* harmony import */ var _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/utils/utility.service */ "./src/shared/utils/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







let OrgChartComponent = class OrgChartComponent {
    constructor(modalService, http, utilitySvc, commonSvc, baseUrl) {
        //http.get<OrgCharts[]>(baseUrl + 'organization').subscribe(result => {
        //    this.orgData = result;
        //    let data = localStorage.getItem('orgChart');
        //    if (data == null || data && JSON.parse(data).length == 0) {
        //        localStorage.setItem('orgChart', JSON.stringify(result));
        //    }
        this.modalService = modalService;
        this.utilitySvc = utilitySvc;
        this.commonSvc = commonSvc;
        this.selectedUser = 0;
        this.selectedOrgUser = 0;
        this.selectedgroup = 0;
        this.throughGraph = true;
        this.viewDetail = false;
        this.addUToOrg = false;
        //}, error => {
        //    console.error(error)
        //});
    }
    ngOnInit() {
        this.users = JSON.parse(localStorage.getItem('users'));
        this.orgData = JSON.parse(localStorage.getItem('orgChart'));
        this.groups = JSON.parse(localStorage.getItem('Groups'));
        this.fetchOrganization();
        //  
    }
    getTitle(id) {
        return this.commonSvc.getOptionTitle(id);
    }
    fetchOrganization() {
        let that = this;
        setTimeout(() => {
            var orgChartData = JSON.parse(localStorage.getItem('orgChart'));
            for (var i = 0; i < orgChartData.length; i++) {
                orgChartData[i].field_number_children = childCount(orgChartData[i].id) + "/" + orgChartData.length;
            }
            function childCount(id) {
                let count = 0;
                for (var i = 0; i < orgChartData.length; i++) {
                    if (orgChartData[i].pid == id) {
                        count++;
                        count += childCount(orgChartData[i].id);
                    }
                }
                return count;
            }
            OrgChart.templates.ula.field_number_children = '<text fill="#3c4858" x="25" y="115" text-anchor="middle">{val}</text>';
            new OrgChart(document.getElementById("tree"), {
                template: "ula",
                layout: BALKANGraph.tree,
                align: BALKANGraph.ORIENTATION,
                nodeMenu: {
                    details: { text: "Details", icon: OrgChart.icon.details(18, 18, '#092863'), onClick: callDetailHandler },
                    addT: { text: "Add new", icon: OrgChart.icon.add(18, 18, '#092863'), onClick: callAddHandler },
                    removeT: { text: "Remove", icon: OrgChart.icon.remove(18, 18, '#092863'), onClick: callRemoveHandler },
                    AddG: { text: "Add To Group", icon: OrgChart.icon.add(18, 18, '#092863'), onClick: callAddGroupHandler }
                },
                nodeBinding: {
                    field_0: "name",
                    field_1: "title",
                    img_0: "img",
                    field_number_children: "field_number_children"
                },
                nodes: orgChartData
            });
        }, 200);
        function callDetailHandler(nodeId) {
            that.nodeID = nodeId;
            that.throughGraph = false;
            that.addUToOrg = false;
            that.viewDetail = true;
            that.commonSvc.getOrgChart(nodeId).subscribe((res) => {
                that.activeOrgUser = res;
                $('#addToOrg').click();
            });
        }
        function callAddGroupHandler(nodeId) {
            that.nodeID = nodeId;
            that.throughGraph = false;
            that.addUToOrg = true;
            that.viewDetail = false;
            that.commonSvc.getOrgChart(nodeId).subscribe((res) => {
                that.activeOrgUser = res;
                $('#addToGroup').click();
            });
        }
        function callAddHandler(nodeId) {
            that.nodeID = nodeId;
            that.throughGraph = false;
            that.addUToOrg = true;
            that.viewDetail = false;
            $('#addToOrg').click();
        }
        function callRemoveHandler(nodeId) {
            that.nodeID = nodeId;
            that.throughGraph = false;
            that.commonSvc.removeFromOrganization(nodeId).subscribe((isRemoved) => {
                if (isRemoved) {
                    that.fetchOrganization();
                    that.utilitySvc.showNotification('success', 'Record removed from organization successfully!');
                }
            });
        }
    }
    addToOrganization() {
        if (!this.throughGraph && this.nodeID) {
            this.selectedOrgUser = this.nodeID;
        }
        this.commonSvc.addToOrganization(this.selectedUser, this.selectedOrgUser, this.selectedgroup).subscribe((isAdded) => {
            if (isAdded) {
                this.fetchOrganization();
                this.modalService.dismissAll();
                this.utilitySvc.showNotification('success', 'Record added to organization successfully!');
            }
        });
    }
    addToGroup() {
        if (!this.throughGraph && this.nodeID) {
            this.selectedUser = this.nodeID;
        }
        this.commonSvc.addToGroup(this.selectedUser, this.selectedgroup).subscribe((isAdded) => {
            if (isAdded) {
                this.fetchOrganization();
                this.modalService.dismissAll();
                this.utilitySvc.showNotification('success', 'Added to Group successfully!');
            }
            else {
                this.utilitySvc.showNotification('danger', 'Already added');
            }
        });
    }
    onSelectOrg() {
        this.commonSvc.getOrgChart(this.selectedOrgUser).subscribe((res) => {
            this.activeOrgUser = res;
            console.log(res);
        });
    }
    onselectUser() {
        this.commonSvc.getUser(this.selectedUser).subscribe((res) => {
            this.activeUser = res;
            console.log(this.activeUser);
        });
    }
    open(content, type, modalDimension, option) {
        if (option == 1) {
            this.throughGraph = true;
            this.addUToOrg = false;
        }
        else {
            this.throughGraph = false;
        }
        if (this.throughGraph || this.addUToOrg) {
            this.selectedUser = 0;
            this.selectedOrgUser = 0;
            this.selectedgroup = 0;
            this.activeOrgUser = new _services_Data_OrgChartsData__WEBPACK_IMPORTED_MODULE_5__["OrgChartM"]();
            this.activeUser = new _services_Data_Users__WEBPACK_IMPORTED_MODULE_3__["User"]();
        }
        this.commonSvc.getUsersForOrganization().subscribe((res) => {
            this.users = res;
        });
        this.orgData = JSON.parse(localStorage.getItem('orgChart'));
        this.groups = JSON.parse(localStorage.getItem('Groups'));
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
        else if (modalDimension === '' && type === 'Notification') {
            this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
        else {
            this.modalService.open(content, { centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
};
OrgChartComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
OrgChartComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-org-chart-component',
        template: __webpack_require__(/*! raw-loader!./org-chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/org-chart/org-chart.component.html"),
        styles: [__webpack_require__(/*! ./style.css */ "./src/app/org-chart/style.css")]
    }),
    __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"], _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], String])
], OrgChartComponent);



/***/ }),

/***/ "./src/app/org-chart/style.css":
/*!*************************************!*\
  !*** ./src/app/org-chart/style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.modal-dialog{\n  max-width: 650px!important;\n}\n@media (min-width: 576px)\n{modal-dialog \n{\n  max-width: 650px !important;\n}\n}\n.cover-photo {\n  background: #041027;\n  height: 100px;\n}\n.photo {\n  background: #f9f9f9;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n}\nimg {\n  position: relative;\n  top: -50px;\n  max-width: 100%;\n  max-height: 100%;\n  border-radius: 50%;\n  box-shadow: -1px 1px 11px 6px rgba(0, 0, 0, 0.3);\n}\n.content {\n  background: #f9f9f9;\n  height: 100px;\n  position: relative;\n  top: -35px;\n}\n.contact {\n  background: #30354d;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nh2.name,\nh3,\na {\n  margin: 0;\n  text-align: center;\n}\nh2.name {\n  padding-bottom: 20px;\n}\nh3.fullstack {\n  padding-bottom: 10px;\n}\na {\n  color: #0ab581;\n  text-decoration: none;\n}\na:hover {\n    color: black;\n  }\nul {\n  padding: 0;\n}\n.fa {\n  font-size: 22px;\n  padding: 10px;\n  text-decoration: none;\n  color: #0ab581;\n}\n.fa:hover {\n    color: #000;\n  }\n.details-view .edit-photo {\n  background: #092863 !important;\n}\n.material-icons.cutom {\n  color:#02325d;\n}\n.material-icons.cutom {\n  font-size: 54px!important;\n  margin-top: -17px!important;\n  margin-left: auto;\n  cursor: pointer!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JnLWNoYXJ0L3N0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtDQUNDOztFQUVDLDJCQUEyQjtBQUM3QjtBQUNBO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUdiLGFBQWE7RUFHYix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0RBQWdEO0FBQ2xEO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBR1osYUFBYTtFQUdiLHVCQUF1QjtFQUd2QixtQkFBbUI7QUFDckI7QUFFQTs7O0VBR0UsU0FBUztFQUNULGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7QUFFRTtJQUNFLFlBQVk7RUFDZDtBQUVGO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBRUU7SUFDRSxXQUFXO0VBQ2I7QUFFRjtFQUNFLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9vcmctY2hhcnQvc3R5bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubW9kYWwtZGlhbG9ne1xuICBtYXgtd2lkdGg6IDY1MHB4IWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweClcbnttb2RhbC1kaWFsb2cgXG57XG4gIG1heC13aWR0aDogNjUwcHggIWltcG9ydGFudDtcbn1cbn1cblxuLmNvdmVyLXBob3RvIHtcbiAgYmFja2dyb3VuZDogIzA0MTAyNztcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnBob3RvIHtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IC0xcHggMXB4IDExcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTM1cHg7XG59XG5cbi5jb250YWN0IHtcbiAgYmFja2dyb3VuZDogIzMwMzU0ZDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaDIubmFtZSxcbmgzLFxuYSB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMi5uYW1lIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmgzLmZ1bGxzdGFjayB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5hIHtcbiAgY29sb3I6ICMwYWI1ODE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuICBhOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxudWwge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZmEge1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwYWI1ODE7XG59XG5cbiAgLmZhOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuXG4uZGV0YWlscy12aWV3IC5lZGl0LXBob3RvIHtcbiAgYmFja2dyb3VuZDogIzA5Mjg2MyAhaW1wb3J0YW50O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMuY3V0b20ge1xuICBjb2xvcjojMDIzMjVkO1xufVxuLm1hdGVyaWFsLWljb25zLmN1dG9tIHtcbiAgZm9udC1zaXplOiA1NHB4IWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogLTE3cHghaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/org-demo/org-demo.component.css":
/*!*************************************************!*\
  !*** ./src/app/org-demo/org-demo.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.dhx_diagram__container{\n    padding-top: 80px;\n    }\n    \n    .modal-dialog{\n        max-width: 650px!important;\n      }\n    \n    @media (min-width: 576px)\n      {modal-dialog \n      {\n        max-width: 650px !important;\n      }\n      }\n    \n    .cover-photo {\n        background: #041027;\n        height: 100px;\n      }\n    \n    .photo {\n        background: #f9f9f9;\n        height: 100px;\n        display: flex;\n        justify-content: center;\n      }\n    \n    img {\n        position: relative;\n        top: -50px;\n        max-width: 100%;\n        max-height: 100%;\n        border-radius: 50%;\n        box-shadow: -1px 1px 11px 6px rgba(0, 0, 0, 0.3);\n      }\n    \n    .content {\n        background: #f9f9f9;\n        height: 100px;\n        position: relative;\n        top: -35px;\n      }\n    \n    .contact {\n        background: #30354d;\n        height: 50px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    \n    h2.name,\n      h3,\n      a {\n        margin: 0;\n        text-align: center;\n      }\n    \n    h2.name {\n        padding-bottom: 20px;\n      }\n    \n    h3.fullstack {\n        padding-bottom: 10px;\n      }\n    \n    a {\n        color: #0ab581;\n        text-decoration: none;\n      }\n    \n    a:hover {\n          color: black;\n        }\n    \n    ul {\n        padding: 0;\n      }\n    \n    .fa {\n        font-size: 22px;\n        padding: 10px;\n        text-decoration: none;\n        color: #0ab581;\n      }\n    \n    .fa:hover {\n          color: #000;\n        }\n    \n    .details-view .edit-photo {\n        background: #092863 !important;\n      }\n    \n    .material-icons.cutom {\n        color:#02325d;\n      }\n    \n    .material-icons.cutom {\n        font-size: 54px!important;\n        margin-top: -17px!important;\n        margin-left: auto;\n        cursor: pointer!important;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JnLWRlbW8vb3JnLWRlbW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakI7O0lBRUE7UUFDSSwwQkFBMEI7TUFDNUI7O0lBQ0E7T0FDQzs7UUFFQywyQkFBMkI7TUFDN0I7TUFDQTs7SUFFQTtRQUNFLG1CQUFtQjtRQUNuQixhQUFhO01BQ2Y7O0lBRUE7UUFDRSxtQkFBbUI7UUFDbkIsYUFBYTtRQUdiLGFBQWE7UUFHYix1QkFBdUI7TUFDekI7O0lBRUE7UUFDRSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGdEQUFnRDtNQUNsRDs7SUFFQTtRQUNFLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLFVBQVU7TUFDWjs7SUFFQTtRQUNFLG1CQUFtQjtRQUNuQixZQUFZO1FBR1osYUFBYTtRQUdiLHVCQUF1QjtRQUd2QixtQkFBbUI7TUFDckI7O0lBRUE7OztRQUdFLFNBQVM7UUFDVCxrQkFBa0I7TUFDcEI7O0lBRUE7UUFDRSxvQkFBb0I7TUFDdEI7O0lBRUE7UUFDRSxvQkFBb0I7TUFDdEI7O0lBRUE7UUFDRSxjQUFjO1FBQ2QscUJBQXFCO01BQ3ZCOztJQUVFO1VBQ0UsWUFBWTtRQUNkOztJQUVGO1FBQ0UsVUFBVTtNQUNaOztJQUVBO1FBQ0UsZUFBZTtRQUNmLGFBQWE7UUFDYixxQkFBcUI7UUFDckIsY0FBYztNQUNoQjs7SUFFRTtVQUNFLFdBQVc7UUFDYjs7SUFFRjtRQUNFLDhCQUE4QjtNQUNoQzs7SUFFQTtRQUNFLGFBQWE7TUFDZjs7SUFDQTtRQUNFLHlCQUF5QjtRQUN6QiwyQkFBMkI7UUFDM0IsaUJBQWlCO1FBQ2pCLHlCQUF5QjtNQUMzQiIsImZpbGUiOiJzcmMvYXBwL29yZy1kZW1vL29yZy1kZW1vLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5kaHhfZGlhZ3JhbV9fY29udGFpbmVye1xuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgIH1cbiAgICBcbiAgICAubW9kYWwtZGlhbG9ne1xuICAgICAgICBtYXgtd2lkdGg6IDY1MHB4IWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweClcbiAgICAgIHttb2RhbC1kaWFsb2cgXG4gICAgICB7XG4gICAgICAgIG1heC13aWR0aDogNjUwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNvdmVyLXBob3RvIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzA0MTAyNztcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnBob3RvIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtNTBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDExcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTM1cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jb250YWN0IHtcbiAgICAgICAgYmFja2dyb3VuZDogIzMwMzU0ZDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaDIubmFtZSxcbiAgICAgIGgzLFxuICAgICAgYSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgXG4gICAgICBoMi5uYW1lIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGgzLmZ1bGxzdGFjayB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMwYWI1ODE7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuZmEge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICMwYWI1ODE7XG4gICAgICB9XG4gICAgICBcbiAgICAgICAgLmZhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAuZGV0YWlscy12aWV3IC5lZGl0LXBob3RvIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzA5Mjg2MyAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICAubWF0ZXJpYWwtaWNvbnMuY3V0b20ge1xuICAgICAgICBjb2xvcjojMDIzMjVkO1xuICAgICAgfVxuICAgICAgLm1hdGVyaWFsLWljb25zLmN1dG9tIHtcbiAgICAgICAgZm9udC1zaXplOiA1NHB4IWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTE3cHghaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyIWltcG9ydGFudDtcbiAgICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/org-demo/org-demo.component.ts":
/*!************************************************!*\
  !*** ./src/app/org-demo/org-demo.component.ts ***!
  \************************************************/
/*! exports provided: OrgDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgDemoComponent", function() { return OrgDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils/utility.service */ "./src/shared/utils/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





let OrgDemoComponent = class OrgDemoComponent {
    constructor(modalService, http, utilitySvc, _commonService, baseUrl) {
        this.modalService = modalService;
        this.http = http;
        this.utilitySvc = utilitySvc;
        this._commonService = _commonService;
        this.selectedUser = 0;
        this.selectedOrgUser = 0;
        this.selectedgroup = 0;
        this.throughGraph = true;
        this.viewDetail = false;
        this.addUToDemo = false;
        this.data = [{
                id: "",
                text: "",
                title: "",
                img: "",
                parent: ""
            }];
    }
    ngOnInit() {
        this.users = JSON.parse(localStorage.getItem('users'));
        this.orgData = JSON.parse(localStorage.getItem('orgChart'));
        this.groups = JSON.parse(localStorage.getItem('Groups'));
        this.newOrgData = JSON.parse(localStorage.getItem('newOrgData'));
        this.fetchDemoChart();
    }
    fetchDemoChart() {
        let that = this;
        var diagram = new dhx.Diagram("diagram_container", {
            type: "org",
            defaultShapeType: "img-card",
            scale: 1,
            select: true,
            margin: {
                y: 65
            },
            toolbar: [
                {
                    id: "detail",
                    content: "<i class='zmdi zmdi-folder-person'></i></i>"
                },
                {
                    id: "add",
                    content: "<i class='zmdi zmdi-account-add'></i></i>"
                },
                {
                    id: "delete",
                    content: "<i class='zmdi zmdi-delete'></i>"
                },
                {
                    id: "info",
                    content: "<i class='zmdi zmdi-info-outline'></i>"
                },
                {
                    id: "more",
                    content: "<i class='zmdi zmdi-more'></i>"
                }
            ]
        });
        diagram.events.on("ShapeIconClick", function (icon) {
            debugger;
            var id = diagram.selection.getId();
            if (icon == "detail") {
                debugger;
                that._commonService.getDemoChart(id).subscribe((res) => {
                    that.UserData = res;
                    console.log(that.UserData);
                });
                console.log(this.UserData);
                that.callDetailHandler(id);
            }
            if (icon == "add") {
                debugger;
                that.callAddHandler(id);
                //alert(icon + " was clicked for id = " + id);
                // var pid=parseFloat(id)
                //    var cid=pid+.1;
                //    that.data=JSON.parse(localStorage.getItem('newOrgData'))
                //    console.log(that.data);
                //    that.data=[{
                //     id:cid.toString(),
                //     text: "Manager",
                //     title: "New User",
                //     img: "https://balkangraph.com/js/img/16.jpg",
                //     parent:pid.toString()
                //    }]
                //    console.log(that.data);
                //    localStorage.setItem('newOrgData', JSON.stringify(that.data));
            }
            if (icon == "delete") {
                diagram.data.remove(id);
            }
            if (icon == "info") {
                alert(icon + " was clicked for id = " + id);
            }
            if (icon == "more") {
                alert(icon + " was clicked for id = " + id);
            }
        });
        diagram.data.parse(this.newOrgData);
    }
    callAddHandler(id) {
        this.nodeID = id;
        this.addUToDemo = true;
        $('#addUToDemo').click();
    }
    callDetailHandler(id) {
        this.viewDetail = true;
        $('#viewDetail').click();
    }
    open(content, type, modalDimension, option) {
        if (option == 1) {
            this.addUToDemo = true;
        }
        else if (option == 2) {
            this.viewDetail = true;
        }
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
        else if (modalDimension === '' && type === 'Notification') {
            this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
        else {
            debugger;
            this.modalService.open(content, { centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
};
OrgDemoComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
OrgDemoComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-org-demo-component',
        template: __webpack_require__(/*! raw-loader!./org-demo.component.html */ "./node_modules/raw-loader/index.js!./src/app/org-demo/org-demo.component.html"),
        styles: [__webpack_require__(/*! ./org-demo.component.css */ "./src/app/org-demo/org-demo.component.css")]
    }),
    __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], String])
], OrgDemoComponent);



/***/ }),

/***/ "./src/app/settings/options-configuration/configuration.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/settings/options-configuration/configuration.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.39)!important;\n}\ni.material-icons.config {\n  font-size: 17px;\n  height: 0;\n  width: 0;\n  top: 13px;\n  position: absolute;\n  right: 16px;\n  cursor: pointer;\n}\n.card-footer .stats{\n  width:100%;\n  display:block;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvb3B0aW9ucy1jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL29wdGlvbnMtY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4zOSkhaW1wb3J0YW50O1xufVxuaS5tYXRlcmlhbC1pY29ucy5jb25maWcge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIHRvcDogMTNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmQtZm9vdGVyIC5zdGF0c3tcbiAgd2lkdGg6MTAwJTtcbiAgZGlzcGxheTpibG9jaztcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/settings/options-configuration/configuration.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/settings/options-configuration/configuration.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function() { return ConfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/utility.service */ "./src/shared/utils/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ConfigurationComponent = class ConfigurationComponent {
    constructor(commonSvc, utilitySvc) {
        this.commonSvc = commonSvc;
        this.utilitySvc = utilitySvc;
        this.getOptions();
    }
    ngOnInit() {
    }
    getOptions() {
        this.commonSvc.getOptions().subscribe((res) => {
            this.options = res;
        });
    }
    update(id) {
        this.activeId = id;
    }
    updateOpton(option) {
        this.commonSvc.updateOptions(option).subscribe((res) => {
            if (res) {
                this.getOptions();
                this.utilitySvc.showNotification('success', 'Option updated successfully');
            }
        });
    }
};
ConfigurationComponent.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] },
    { type: _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] }
];
ConfigurationComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'settings-configuration',
        template: __webpack_require__(/*! raw-loader!./configuration.component.html */ "./node_modules/raw-loader/index.js!./src/app/settings/options-configuration/configuration.component.html"),
        styles: [__webpack_require__(/*! ./configuration.component.css */ "./src/app/settings/options-configuration/configuration.component.css")]
    }),
    __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"], _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])
], ConfigurationComponent);



/***/ }),

/***/ "./src/app/settings/settings-home/settingsHome.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/settings/settings-home/settingsHome.component.ts ***!
  \******************************************************************/
/*! exports provided: SettingsHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsHomeComponent", function() { return SettingsHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let SettingsHomeComponent = class SettingsHomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsHomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'settings-home',
        template: __webpack_require__(/*! raw-loader!./settingsHome.component.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings-home/settingsHome.component.html")
    }),
    __metadata("design:paramtypes", [])
], SettingsHomeComponent);



/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let SettingsComponent = class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html")
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _settings_home_settingsHome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-home/settingsHome.component */ "./src/app/settings/settings-home/settingsHome.component.ts");
/* harmony import */ var _options_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options-configuration/configuration.component */ "./src/app/settings/options-configuration/configuration.component.ts");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.routing.module */ "./src/app/settings/settings.routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let SettingsModule = class SettingsModule {
};
SettingsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__["SettingsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ],
        declarations: [
            _settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"],
            _settings_home_settingsHome_component__WEBPACK_IMPORTED_MODULE_3__["SettingsHomeComponent"],
            _options_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_4__["ConfigurationComponent"]
        ],
        exports: [
            _settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"],
            _settings_home_settingsHome_component__WEBPACK_IMPORTED_MODULE_3__["SettingsHomeComponent"],
            _options_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_4__["ConfigurationComponent"]
        ]
    })
], SettingsModule);



/***/ }),

/***/ "./src/app/settings/settings.routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings.routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _settings_home_settingsHome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-home/settingsHome.component */ "./src/app/settings/settings-home/settingsHome.component.ts");
/* harmony import */ var _options_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options-configuration/configuration.component */ "./src/app/settings/options-configuration/configuration.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [
    {
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"],
        children: [{
                path: '',
                children: [
                    { path: '', component: _settings_home_settingsHome_component__WEBPACK_IMPORTED_MODULE_3__["SettingsHomeComponent"], pathMatch: 'full' },
                    { path: 'options-configuration', component: _options_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_4__["ConfigurationComponent"] },
                ]
            }]
    }
];
let SettingsRoutingModule = class SettingsRoutingModule {
};
SettingsRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], SettingsRoutingModule);



/***/ }),

/***/ "./src/app/users/style.css":
/*!*********************************!*\
  !*** ./src/app/users/style.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  h4.card-title{\n    position: relative;\n    display: inline;\n    top: -13px;\n  }\n  \n  /* td, th {\n    width: 25%;\n  } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsVUFBVTtFQUNaOztFQUNBOztLQUVHIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvc3R5bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBoNC5jYXJkLXRpdGxle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgdG9wOiAtMTNweDtcbiAgfVxuICAvKiB0ZCwgdGgge1xuICAgIHdpZHRoOiAyNSU7XG4gIH0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/utility.service */ "./src/shared/utils/utility.service.ts");
/* harmony import */ var _services_Data_Users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Data/Users */ "./src/services/Data/Users.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var option;
(function (option) {
    option[option["ADD"] = 1] = "ADD";
    option[option["EDIT"] = 2] = "EDIT";
    option[option["DETAIL"] = 3] = "DETAIL";
})(option || (option = {}));
let UsersComponent = class UsersComponent {
    constructor(modalService, commonSvc, utilitySvc) {
        this.modalService = modalService;
        this.commonSvc = commonSvc;
        this.utilitySvc = utilitySvc;
        this.displayedColumns = ['id', 'name', 'email', 'phone', 'action'];
        this.getUsers();
    }
    ngOnInit() {
        this.getUsers();
    }
    getTitle(id) {
        return this.commonSvc.getOptionTitle(id);
    }
    getUsers() {
        this.commonSvc.getUsers().subscribe((res) => {
            this.model = res;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    deleteUser(id) {
        this.commonSvc.deleteUser(id).subscribe((isDeleted) => {
            if (isDeleted) {
                this.getUsers();
                this.utilitySvc.showNotification('success', 'Congratulation! Deleted Successfully');
            }
            else {
                this.utilitySvc.showNotification('danger', `Alert! ${this.getTitle(2)} is already in use.`);
            }
        });
    }
    open(content, type, modalDimension, userOption, user) {
        this.operationOption = userOption;
        if (option.EDIT == userOption) {
            let headerTitle = "EDIT " + this.getTitle(2);
            let buttonTitle = "Save changes";
            this.modelDialog = { headerTitle, buttonTitle };
            this.user = user;
        }
        if (option.ADD == userOption) {
            let headerTitle = "ADD " + this.getTitle(2);
            let buttonTitle = "Save";
            this.modelDialog = { headerTitle, buttonTitle };
            this.user = new _services_Data_Users__WEBPACK_IMPORTED_MODULE_4__["User"]();
        }
        if (option.DETAIL == userOption) {
            let headerTitle = this.getTitle(2) + " DETAIL";
            let buttonTitle = "";
            this.modelDialog = { headerTitle, buttonTitle };
            this.user = user;
        }
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
        else if (modalDimension === '' && type === 'Notification') {
            this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
        else {
            this.modalService.open(content, { centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    updateUser() {
        this.commonSvc.updateUser(this.user).subscribe((isUpdated) => {
            if (isUpdated) {
                this.getUsers();
                this.modalService.dismissAll();
                this.utilitySvc.showNotification('success', 'Record updated successfully!');
            }
        });
    }
    addUser() {
        this.commonSvc.addUser(this.user).subscribe((isAdded) => {
            if (isAdded) {
                this.getUsers();
                this.modalService.dismissAll();
                this.utilitySvc.showNotification('success', 'Record added successfully!');
            }
        });
    }
    showDetail() {
        alert('ok');
    }
};
UsersComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
], UsersComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], { static: true }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
], UsersComponent.prototype, "sort", void 0);
UsersComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-users-component',
        template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html"),
        styles: [__webpack_require__(/*! ./style.css */ "./src/app/users/style.css")]
    }),
    __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
], UsersComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "./src/services/Data/AddToGroup.ts":
/*!*****************************************!*\
  !*** ./src/services/Data/AddToGroup.ts ***!
  \*****************************************/
/*! exports provided: AddToGroup, AddToGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToGroup", function() { return AddToGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToGroups", function() { return AddToGroups; });
class AddToGroup {
}
const AddToGroups = [
// {
//    "id":1100,
//    "pid": 1000,
//    "tags":"",
//    "name":"",
//    "title":"",
//    "img":""
// }
];


/***/ }),

/***/ "./src/services/Data/Groups.ts":
/*!*************************************!*\
  !*** ./src/services/Data/Groups.ts ***!
  \*************************************/
/*! exports provided: Group, groupinfo, Groups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupinfo", function() { return groupinfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Groups", function() { return Groups; });
class Group {
    constructor() {
        this.pid = 1;
    }
}
class groupinfo {
    constructor() {
        this.group = true;
        this.groupState = 0;
        this.template = "group_orange";
    }
}
const Groups = [
// {
//     "id": 1,
//     "name": "CEO",
//     "isActive": true,
//     "img":"https://source.unsplash.com/random/40x40",
//     "groupinfo":
//     {
//      "group": true,
//      "groupName": "CEO Team",
//      "groupState": "OrgChart.EXPAND",
//      "template": "group_orange"
//     }
// },
// {
//     "id": 2,
//     "name": "Sales",
//     "isActive": true,
//     "img": "https://source.unsplash.com/random/40x40",
//     "groupinfo":
//     {
//      "group": true,
//      "groupName": "CEO Team",
//      "groupState": "OrgChart.EXPAND",
//      "template": "group_orange"
//     }
// },
// {
//     "id": 3,
//     "name": "Marketing",
//     "isActive": true,
//     "img": "https://source.unsplash.com/random/40x40",
//     "groupinfo":
//     {
//      "group": true,
//      "groupName": "CEO Team",
//      "groupState": "OrgChart.EXPAND",
//      "template": "group_orange"
//     }
// },
// {
//     "id": 4,
//     "name": "Financial",
//     "isActive": false,
//     "img": "https://source.unsplash.com/random/40x40",
//     "groupinfo":
//     {
//      "group": true,
//      "groupName": "CEO Team",
//      "groupState": "OrgChart.EXPAND",
//      "template": "group_orange"
//     }
// }
];


/***/ }),

/***/ "./src/services/Data/Options.ts":
/*!**************************************!*\
  !*** ./src/services/Data/Options.ts ***!
  \**************************************/
/*! exports provided: Option, Options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
class Option {
}
const Options = [
    {
        "id": 1,
        "name": "Groups",
    },
    {
        "id": 2,
        "name": "Users",
    }
];


/***/ }),

/***/ "./src/services/Data/OrgChartsData.ts":
/*!********************************************!*\
  !*** ./src/services/Data/OrgChartsData.ts ***!
  \********************************************/
/*! exports provided: OrgChartM, OrgCharts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgChartM", function() { return OrgChartM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgCharts", function() { return OrgCharts; });
class OrgChartM {
}
const OrgCharts = [
    { id: 1, name: "Jack Hill", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
    { id: 2, pid: 1, name: "Lexie Cole", title: "QA Lead", img: "https://balkangraph.com/js/img/2.jpg" },
    { id: 3, pid: 1, name: "Janae Barrett", title: "Technical Director", img: "https://balkangraph.com/js/img/3.jpg" },
    { id: 4, pid: 1, name: "Aaliyah Webb", title: "Manager", img: "https://balkangraph.com/js/img/4.jpg" },
    { id: 5, pid: 2, name: "Elliot Ross", title: "QA", img: "https://balkangraph.com/js/img/5.jpg" },
    { id: 6, pid: 2, name: "Anahi Gordon", title: "QA", img: "https://balkangraph.com/js/img/6.jpg" },
    { id: 7, pid: 2, name: "Knox Macias", title: "QA", img: "https://balkangraph.com/js/img/7.jpg" },
    { id: 8, pid: 3, name: "Nash Ingram", title: ".NET Team Lead", img: "https://balkangraph.com/js/img/8.jpg" },
    { id: 9, pid: 3, name: "Sage Barnett", title: "JS Team Lead", img: "https://balkangraph.com/js/img/9.jpg" },
    { id: 10, pid: 3, name: "Alice Gray", title: "Programmer", img: "https://balkangraph.com/js/img/10.jpg" },
    { id: 11, pid: 3, name: "Anne Ewing", title: "Programmer", img: "https://balkangraph.com/js/img/11.jpg" },
    { id: 12, pid: 3, name: "Reuben Mcleod", title: "Programmer", img: "https://balkangraph.com/js/img/12.jpg" },
    { id: 13, pid: 3, name: "Ariel Wiley", title: "Programmer", img: "https://balkangraph.com/js/img/13.jpg" },
    { id: 14, pid: 4, name: "Lucas West", title: "Marketer", img: "https://balkangraph.com/js/img/14.jpg" },
    { id: 15, pid: 4, name: "Adan Travis", title: "Designer", img: "https://balkangraph.com/js/img/15.jpg" },
    { id: 16, pid: 4, name: "Alex Snider", title: "Sales Manager", img: "https://balkangraph.com/js/img/16.jpg" }
];


/***/ }),

/***/ "./src/services/Data/Users.ts":
/*!************************************!*\
  !*** ./src/services/Data/Users.ts ***!
  \************************************/
/*! exports provided: User, Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
class User {
}
const Users = [
    {
        "id": 1001,
        "name": "Jack Hill",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "img": "https://balkangraph.com/js/img/1.jpg"
    },
    {
        "id": 1002,
        "name": "Lexie Cole",
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "img": "https://balkangraph.com/js/img/2.jpg"
    },
    {
        "id": 1003,
        "name": "Janae Barrett",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
        "img": "https://balkangraph.com/js/img/3.jpg"
    },
    {
        "id": 1004,
        "name": "Aaliyah Webb",
        "email": "Julianne.OConner@kory.org",
        "phone": "493-170-9623 x156",
        "img": "https://balkangraph.com/js/img/4.jpg"
    },
    {
        "id": 1005,
        "name": "Elliot Ross",
        "email": "Lucio_Hettinger@annie.ca",
        "phone": "(254)954-1289",
        "img": "https://balkangraph.com/js/img/5.jpg"
    },
    {
        "id": 1006,
        "name": "Anahi Gordon",
        "email": "Gordon@annie.ca",
        "phone": "(254)954-1289",
        "img": "https://balkangraph.com/js/img/6.jpg"
    },
    {
        "id": 1007,
        "name": "Knox Macias",
        "email": "Macias@annie.ca",
        "phone": "(453)545-3435",
        "img": "https://balkangraph.com/js/img/7.jpg"
    },
    {
        "id": 1008,
        "name": "Nash Ingram",
        "email": "Nash@annie.ca",
        "phone": "(264)854-0281",
        "img": "https://balkangraph.com/js/img/8.jpg"
    },
    {
        "id": 1009,
        "name": "Sage Barnett",
        "email": "Sage@annie.ca",
        "phone": "(354)884-0383",
        "img": "https://balkangraph.com/js/img/9.jpg"
    },
    {
        "id": 1010,
        "name": "Alice Gray",
        "email": "Alice@annie.ca",
        "phone": "(864)054-4482",
        "img": "https://balkangraph.com/js/img/10.jpg"
    },
    {
        "id": 1011,
        "name": "Anne Ewing",
        "email": "Ewing@annie.ca",
        "phone": "(254)954-1284",
        "img": "https://balkangraph.com/js/img/11.jpg"
    },
    {
        "id": 1012,
        "name": "Reuben Mcleod",
        "email": "Mcleod@annie.ca",
        "phone": "(254)954-1283",
        "img": "https://balkangraph.com/js/img/12.jpg"
    },
    {
        "id": 1013,
        "name": "Ariel Wiley",
        "email": "Wiley@annie.ca",
        "phone": "(254)954-1280",
        "img": "https://balkangraph.com/js/img/13.jpg"
    },
    {
        "id": 1014,
        "name": "Lucas West",
        "email": "West@annie.ca",
        "phone": "(254)954-1281",
        "img": "https://balkangraph.com/js/img/14.jpg"
    },
    {
        "id": 1015,
        "name": "Adan Travis",
        "email": "Travis@annie.ca",
        "phone": "(254)954-1282",
        "img": "https://balkangraph.com/js/img/15.jpg"
    },
    {
        "id": 1016,
        "name": "Alex Snider",
        "email": "Snider@annie.ca",
        "phone": "(254)954-1289",
        "img": "https://balkangraph.com/js/img/16.jpg"
    },
    {
        "id": 1017,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "img": "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        "id": 1018,
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "img": "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        "id": 1019,
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
        "img": "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        "id": 1020,
        "name": "Patricia Lebsack",
        "email": "Julianne.OConner@kory.org",
        "phone": "493-170-9623 x156",
        "img": "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
        "id": 1021,
        "name": "Chelsey Dietrich",
        "email": "Lucio_Hettinger@annie.ca",
        "phone": "(784)954-1259",
        "img": "https://randomuser.me/api/portraits/women/10.jpg"
    }
];


/***/ }),

/***/ "./src/services/Data/newOrgData.ts":
/*!*****************************************!*\
  !*** ./src/services/Data/newOrgData.ts ***!
  \*****************************************/
/*! exports provided: NewOrgData, NewOrgCharts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrgData", function() { return NewOrgData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrgCharts", function() { return NewOrgCharts; });
class NewOrgData {
}
const NewOrgCharts = [
    {
        "id": "1",
        "text": "Chairman & CEO",
        "title": "Henry Bennett",
        "img": "https://balkangraph.com/js/img/1.jpg"
    },
    {
        "id": "2",
        "text": "QA Lead",
        "title": "Emma Lynch",
        "img": "https://balkangraph.com/js/img/2.jpg",
        "parent": 1,
        "dir": "vertical"
    },
    {
        "id": "2.1",
        "text": "QA",
        "title": "Charles Little",
        "img": "https://balkangraph.com/js/img/3.jpg",
        "parent": 2
    },
    {
        "id": "2.2",
        "text": "QA",
        "title": "Douglas Riley",
        "img": "https://balkangraph.com/js/img/4.jpg",
        "parent": 2
    },
    {
        "id": "2.3",
        "text": "QA",
        "title": "Eugene Foster",
        "img": "https://balkangraph.com/js/img/5.jpg",
        "parent": 2
    },
    {
        "id": "3",
        "text": "Technical Director",
        "title": "Jerry Wagner",
        "img": "https://balkangraph.com/js/img/6.jpg",
        "parent": 1
    },
    {
        "id": "3.1",
        "text": "Team Lead",
        "title": "Mark Nichols",
        "img": "https://balkangraph.com/js/img/7.jpg",
        "parent": 3
    },
    {
        "id": "3.1.1",
        "text": "Programmer",
        "title": "Sean Parker",
        "img": "https://balkangraph.com/js/img/8.jpg",
        "parent": 3.1,
        "open": false
    },
    {
        "id": "3.1.1.1",
        "text": "Junior",
        "title": "Laura Alvarez",
        "img": "https://balkangraph.com/js/img/9.jpg",
        "parent": "3.1.1"
    },
    {
        "id": "4",
        "text": "Manager",
        "title": "Jonathan Lane",
        "img": "https://balkangraph.com/js/img/10.jpg",
        "parent": "1",
        "dir": "vertical"
    },
    {
        "id": "4.1",
        "text": "Marketer",
        "title": "Sandra Butler",
        "img": "https://balkangraph.com/js/img/11.jpg",
        "parent": "4"
    },
    {
        "id": "4.2",
        "text": "Designer",
        "title": "Julie Green",
        "img": "https://balkangraph.com/js/img/12.jpg",
        "parent": "4"
    },
    {
        "id": "4.3",
        "text": "Sales Manager",
        "title": "Richard Hicks",
        "img": "https://balkangraph.com/js/img/13.jpg",
        "parent": "4"
    },
    {
        "id": "3.2",
        "text": "Team Lead",
        "title": "Nicholas Cruz",
        "img": "https://balkangraph.com/js/img/14.jpg",
        "parent": 3
    },
    {
        "id": "3.2.1",
        "text": "Programmer",
        "title": "Michael Shaw",
        "img": "https://balkangraph.com/js/img/15.jpg",
        "parent": "3.2"
    },
    {
        "id": "3.2.1.1",
        "text": "Junior",
        "title": "John Flores",
        "img": "https://balkangraph.com/js/img/16.jpg",
        "parent": "3.2.1"
    }
];


/***/ }),

/***/ "./src/services/auth.service.ts":
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm2015/add/observable/of.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {AuthenticationDetails, CognitoUser, CognitoUserPool} from 'amazon-cognito-identity-js';
// const poolData = {
//   UserPoolId: 'us-east-1_f5CYhm9Hw', // Your user pool id here
//   ClientId: '6ff0qksomf8oj5ff8ifj7733tn' // Your client id here  
// };
// const userPool = new CognitoUserPool(poolData);
let AuthService = class AuthService {
    constructor(router) {
        this.router = router;
    }
    get isLogedIn() {
        return parseInt(localStorage.getItem('isLoggedIn'));
    }
    login(email, password) {
        // const authenticationData = {
        //     Username : email,
        //     Password : password,
        //   };
        //   const authenticationDetails = new AuthenticationDetails(authenticationData);
        //   const userData = {
        //     Username : email,
        //     Pool : userPool
        //   };
        //   const cognitoUser = new CognitoUser(userData);
        //   return Observable.create(observer => {
        //     cognitoUser.authenticateUser(authenticationDetails, {
        //       onSuccess: function (result) {
        //         //console.log(result);
        //         observer.next(result);
        //         observer.complete();
        //       },
        //       onFailure: function(err) {
        //         console.log(err);
        //         observer.error(err);
        //       },
        //     });
        //   });
        if (email == 'Happy' && password == "happy") {
            localStorage.setItem('isLoggedIn', '1');
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(true);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(false);
        }
    }
    // getAuthenticatedUser() {
    //     // gets the current user from the local storage
    //     return userPool.getCurrentUser();
    //   }
    logout() {
        // this.getAuthenticatedUser().signOut();
        // this.cognitoUser = null;
        localStorage.setItem('isLoggedIn', '0');
        this.router.navigate(['/login']);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthService);



/***/ }),

/***/ "./src/services/common.service.ts":
/*!****************************************!*\
  !*** ./src/services/common.service.ts ***!
  \****************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm2015/add/observable/of.js");
/* harmony import */ var _Data_Users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Data/Users */ "./src/services/Data/Users.ts");
/* harmony import */ var _Data_Groups__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Data/Groups */ "./src/services/Data/Groups.ts");
/* harmony import */ var _Data_OrgChartsData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Data/OrgChartsData */ "./src/services/Data/OrgChartsData.ts");
/* harmony import */ var _Data_Options__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Data/Options */ "./src/services/Data/Options.ts");
/* harmony import */ var _Data_AddToGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Data/AddToGroup */ "./src/services/Data/AddToGroup.ts");
/* harmony import */ var _Data_newOrgData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Data/newOrgData */ "./src/services/Data/newOrgData.ts");
/* harmony import */ var _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/utils/utility.service */ "./src/shared/utils/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













let CommonService = class CommonService {
    constructor(router, utilitySvc) {
        this.router = router;
        this.utilitySvc = utilitySvc;
    }
    initializeData() {
        debugger;
        localStorage.setItem('options', JSON.stringify(_Data_Options__WEBPACK_IMPORTED_MODULE_9__["Options"]));
        localStorage.setItem('users', JSON.stringify(_Data_Users__WEBPACK_IMPORTED_MODULE_6__["Users"]));
        localStorage.setItem('Groups', JSON.stringify(_Data_Groups__WEBPACK_IMPORTED_MODULE_7__["Groups"]));
        localStorage.setItem('orgChart', JSON.stringify(_Data_OrgChartsData__WEBPACK_IMPORTED_MODULE_8__["OrgCharts"]));
        localStorage.setItem('addtogrp', JSON.stringify(_Data_AddToGroup__WEBPACK_IMPORTED_MODULE_10__["AddToGroups"]));
        localStorage.setItem('newOrgData', JSON.stringify(_Data_newOrgData__WEBPACK_IMPORTED_MODULE_11__["NewOrgCharts"]));
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of("Data Initialized");
    }
    //Options
    getOptions() {
        let data = JSON.parse(localStorage.getItem('options'));
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(data);
    }
    getOption(id) {
        let data = JSON.parse(localStorage.getItem('options'));
        var result;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                result = data[i];
                break;
            }
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(result);
    }
    updateOptions(option) {
        let data = JSON.parse(localStorage.getItem('options'));
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == option.id) {
                data[i] = option;
                break;
            }
        }
        localStorage.setItem('options', JSON.stringify(data));
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(true);
    }
    getOptionTitle(id) {
        let data = JSON.parse(localStorage.getItem('options'));
        var result;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                result = data[i].name;
                break;
            }
        }
        return result;
    }
    getUsers() {
        let data = JSON.parse(localStorage.getItem('users'));
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(data);
    }
    getUser(id) {
        let data = JSON.parse(localStorage.getItem('users'));
        var result;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                result = data[i];
                break;
            }
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(result);
    }
    addUser(user) {
        let data = JSON.parse(localStorage.getItem('users'));
        let allIds = [];
        for (let i = 0; i < data.length; i++) {
            allIds.push(data[i].id);
        }
        let maxIDNumber = Math.max(...allIds);
        //  user.id = maxIDNumber + 1;
        user.id = maxIDNumber + 1;
        user.img = `https://randomuser.me/api/portraits/women/${maxIDNumber + 1}.jpg`;
        data.push(user);
        localStorage.setItem('users', JSON.stringify(data));
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(true);
    }
    deleteUser(id) {
        let data = JSON.parse(localStorage.getItem('users'));
        let orgdata = JSON.parse(localStorage.getItem('orgChart'));
        var allIds = lodash__WEBPACK_IMPORTED_MODULE_3__["map"](orgdata, 'id');
        var result;
        var status = false;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                result = data[i];
                break;
            }
        }
        if (!allIds.includes(result.id)) {
            let newData = data.filter((item) => {
                return item.id != id;
            });
            localStorage.setItem('users', JSON.stringify(newData));
            status = true;
        }
        else {
            status = false;
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(status);
    }
    updateUser(user) {
        let data = JSON.parse(localStorage.getItem('users'));
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == user.id) {
                data[i] = user;
                break;
            }
        }
        localStorage.setItem('users', JSON.stringify(data));
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(true);
    }
    getGroups() {
        let data = JSON.parse(localStorage.getItem('Groups'));
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(data);
    }
    getGroup(id) {
        let data = JSON.parse(localStorage.getItem('Groups'));
        var result;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                result = data[i];
                break;
            }
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(result);
    }
    deleteGroup(id) {
        let data = JSON.parse(localStorage.getItem('Groups'));
        let orgdata = JSON.parse(localStorage.getItem('orgChart'));
        var allGroups = lodash__WEBPACK_IMPORTED_MODULE_3__["map"](orgdata, 'title');
        var result;
        var status = false;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                result = data[i];
                break;
            }
        }
        if (!allGroups.includes(result.name)) {
            let newData = data.filter((item) => {
                return item.id != id;
            });
            localStorage.setItem('Groups', JSON.stringify(newData));
            status = true;
        }
        else {
            status = false;
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(status);
    }
    addSubGroup(group, subgrupid) {
        debugger;
        //------------------------------this data will save inside addgrp array---------------------------- //
        let addgrpdata = JSON.parse(localStorage.getItem('addtogrp'));
        let users = JSON.parse(localStorage.getItem('users'));
        var d;
        let allIds = [];
        // let alluserid = [];
        let maxIDNumber;
        var id = [];
        if (addgrpdata.length > 0) {
            for (let i = 0; i < addgrpdata.length; i++) {
                if (addgrpdata[i].id < 999) {
                    id[i] = addgrpdata[i].id;
                    // alert(id[i])
                    /// maxIDNumber = Math.max(...id)+1;
                    maxIDNumber = id[i] + 1;
                }
            }
            debugger;
            addgrpdata.id = maxIDNumber;
        }
        else {
            addgrpdata.id = 1;
        }
        debugger;
        d = { id: addgrpdata.id, img: "", name: group.name, pid: subgrupid, tags: group.name, title: "" };
        addgrpdata.push(d);
        localStorage.setItem('addtogrp', JSON.stringify(addgrpdata));
        //----------------------this data will save groups ----------------------------//           
        let data = JSON.parse(localStorage.getItem('Groups'));
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                allIds.push(data[i].id);
            }
            let maxIDNumber = Math.max(...allIds);
            group.id = maxIDNumber + 1;
        }
        else {
            group.id = 1;
        }
        var temp = new _Data_Groups__WEBPACK_IMPORTED_MODULE_7__["groupinfo"]();
        temp.groupName = group.name;
        group[group.name] = temp;
        group[group.pid] = subgrupid;
        data.push(group);
        console.log(data);
        localStorage.setItem('Groups', JSON.stringify(data));
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(true);
    }
    addGroup(group) {
        debugger;
        //------------------------------this data will save inside addgrp array---------------------------- //
        let addgrpdata = JSON.parse(localStorage.getItem('addtogrp'));
        let users = JSON.parse(localStorage.getItem('users'));
        var d;
        let allIds = [];
        // let alluserid = [];
        let maxIDNumber;
        var id = [];
        debugger;
        if (addgrpdata.length > 0) {
            for (let i = 0; i < addgrpdata.length; i++) {
                if (addgrpdata[i].id < 999) {
                    id[i] = addgrpdata[i].id;
                    maxIDNumber = Math.max(...id) + 1;
                }
            }
            debugger;
            addgrpdata.id = maxIDNumber;
            //  addgrpdata.id =addgrpdata.length+1;
        }
        else {
            addgrpdata.id = 1;
        }
        d = { id: addgrpdata.id, img: "", name: group.name, pid: 0, tags: group.name, title: "" };
        addgrpdata.push(d);
        localStorage.setItem('addtogrp', JSON.stringify(addgrpdata));
        //----------------------this data will save groups ----------------------------//           
        let data = JSON.parse(localStorage.getItem('Groups'));
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                allIds.push(data[i].id);
            }
            let maxIDNumber = Math.max(...allIds);
            group.id = maxIDNumber + 1;
        }
        else {
            group.id = 1;
        }
        var temp = new _Data_Groups__WEBPACK_IMPORTED_MODULE_7__["groupinfo"]();
        temp.groupName = group.name;
        group[group.name] = temp;
        data.push(group);
        console.log(data);
        localStorage.setItem('Groups', JSON.stringify(data));
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(true);
    }
    updateGroup(group) {
        let data = JSON.parse(localStorage.getItem('Groups'));
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == group.id) {
                data[i] = group;
                break;
            }
        }
        localStorage.setItem('Groups', JSON.stringify(data));
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(true);
    }
    getOrgChart(id) {
        debugger;
        let data = JSON.parse(localStorage.getItem('orgChart'));
        var result;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                result = data[i];
                break;
            }
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(result);
    }
    getDemoChart(id) {
        debugger;
        let data = JSON.parse(localStorage.getItem('newOrgData'));
        var result;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                result = data[i];
                break;
            }
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(result);
    }
    addToGroup(UserID, groupId) {
        var userid = +UserID;
        userid = userid + 1000;
        try {
            debugger;
            let user = JSON.parse(localStorage.getItem('users'));
            let group = JSON.parse(localStorage.getItem('Groups'));
            var filteredUser;
            var filteredGroup;
            for (let i = 0; i < user.length; i++) {
                // if (user[i].id == UserID) 
                // {
                //     filteredUser = user[i];
                //     break;
                // }
                if (user[i].id == userid) {
                    filteredUser = user[i];
                    break;
                }
            }
            for (let i = 0; i < group.length; i++) {
                if (group[i].id == groupId) {
                    filteredGroup = group[i];
                    break;
                }
            }
            let data = JSON.parse(localStorage.getItem('addtogrp'));
            let allIds = [];
            for (let i = 0; i < data.length; i++) {
                allIds.push(data[i].id);
            }
            // ---------------user tittle is not given in user array so i jsut pass null it , if you changes in future user array than pass here tittle values 
            var d = { id: filteredUser.id, pid: filteredGroup.id, tags: [filteredGroup.name], name: filteredUser.name, title: " ", img: filteredUser.img };
            var dataname, dataid;
            for (let i = 0; i < data.length; i++) {
                // if (data[i].id == UserID) 
                // {
                //     dataid=data[i].id; 
                //     dataname=data[i].tags;
                // }
                if (data[i].id == userid) {
                    dataid = data[i].id;
                    dataname = data[i].tags;
                }
            }
            if (filteredGroup.isActive == true) {
                if (dataid == filteredUser.id && dataname == filteredGroup.name) {
                    return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(false);
                }
                else {
                    data.push(d);
                    localStorage.setItem('addtogrp', JSON.stringify(data));
                    return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(true);
                }
            }
            else {
                this.utilitySvc.showNotification('danger', 'Group is Inactive');
            }
        }
        catch (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(false);
        }
    }
    addToOrganization(userId, orgId, groupId) {
        try {
            let user = JSON.parse(localStorage.getItem('users'));
            let group = JSON.parse(localStorage.getItem('Groups'));
            var filteredUser;
            var filteredGroup;
            for (let i = 0; i < user.length; i++) {
                if (user[i].id == userId) {
                    filteredUser = user[i];
                    break;
                }
            }
            for (let i = 0; i < group.length; i++) {
                if (group[i].id == groupId) {
                    filteredGroup = group[i];
                    break;
                }
            }
            let data = JSON.parse(localStorage.getItem('orgChart'));
            let allIds = [];
            for (let i = 0; i < data.length; i++) {
                allIds.push(data[i].id);
            }
            let maxIDNumber = Math.max(...allIds);
            var d = { date: "", id: filteredUser.id, name: filteredUser.name, pid: parseInt(orgId), img: filteredUser.img, title: filteredGroup ? filteredGroup.name : '' };
            data.push(d);
            localStorage.setItem('orgChart', JSON.stringify(data));
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(true);
        }
        catch (ex) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(false);
        }
    }
    removeFromOrganization(id) {
        let data = JSON.parse(localStorage.getItem('orgChart'));
        let newData = data.filter((item) => {
            return item.id != id;
        });
        localStorage.setItem('orgChart', JSON.stringify(newData));
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(true);
    }
    getUsersForOrganization() {
        let users = JSON.parse(localStorage.getItem('users'));
        let data = JSON.parse(localStorage.getItem('orgChart'));
        let allUsersIds = lodash__WEBPACK_IMPORTED_MODULE_3__["map"](users, 'id');
        let allOrgIds = lodash__WEBPACK_IMPORTED_MODULE_3__["map"](data, 'id');
        let ids = allUsersIds.filter(e => !allOrgIds.includes(e));
        let result = users.filter(e => ids.includes(e.id));
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(result);
    }
    getOrganizationLevel() {
        let data = JSON.parse(localStorage.getItem('orgChart'));
        let allIds = lodash__WEBPACK_IMPORTED_MODULE_3__["map"](data, 'pid');
        let uniqIds = Array.from(new Set(allIds));
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(uniqIds.length);
    }
};
CommonService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"] }
];
CommonService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_utils_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"]])
], CommonService);



/***/ }),

/***/ "./src/shared/directives/auto-focus.directive.ts":
/*!*******************************************************!*\
  !*** ./src/shared/directives/auto-focus.directive.ts ***!
  \*******************************************************/
/*! exports provided: AutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AutofocusDirective = class AutofocusDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.el.nativeElement.focus();
        }, 500);
    }
};
AutofocusDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], AutofocusDirective.prototype, "appAutoFocus", void 0);
AutofocusDirective = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[autoFocus]'
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
], AutofocusDirective);



/***/ }),

/***/ "./src/shared/pipes/groupsfilter.ts":
/*!******************************************!*\
  !*** ./src/shared/pipes/groupsfilter.ts ***!
  \******************************************/
/*! exports provided: GroupsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsFilter", function() { return GroupsFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let GroupsFilter = class GroupsFilter {
    transform(items, filter) {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) != -1);
    }
};
GroupsFilter = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'groupsfilter',
        pure: false
    })
], GroupsFilter);



/***/ }),

/***/ "./src/shared/pipes/myfilter.ts":
/*!**************************************!*\
  !*** ./src/shared/pipes/myfilter.ts ***!
  \**************************************/
/*! exports provided: MyFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFilter", function() { return MyFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let MyFilter = class MyFilter {
    transform(items, filter) {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) != -1 || item.email.toLowerCase().indexOf(filter.toLowerCase()) != -1 || item.phone.toLowerCase().indexOf(filter.toLowerCase()) != -1);
    }
};
MyFilter = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'myfilter',
        pure: false
    })
], MyFilter);



/***/ }),

/***/ "./src/shared/utils/utility.service.ts":
/*!*********************************************!*\
  !*** ./src/shared/utils/utility.service.ts ***!
  \*********************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm2015/add/observable/of.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let UtilityService = class UtilityService {
    constructor(router) {
        this.router = router;
    }
    showNotification(type, msg) {
        let from = 'top';
        let align = 'right';
        $.notify({
            icon: "notifications",
            message: msg
        }, {
            type: type,
            timer: 10,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    }
};
UtilityService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
UtilityService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], UtilityService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Zoom\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map