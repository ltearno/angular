/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Type} from '@angular/core';

import {reflector} from '../../core_private';

import {CanActivate, RouteLifecycleHook} from './lifecycle_annotations_impl';

export function hasLifecycleHook(e: RouteLifecycleHook, type: any /** TODO #9100 */): boolean {
  if (!((typeof type) === (typeof Type))) return false;
  return e.name in (<any>type).prototype;
}

export function getCanActivateHook(type: any /** TODO #9100 */): Function {
  var annotations = reflector.annotations(type);
  for (let i = 0; i < annotations.length; i += 1) {
    let annotation = annotations[i];
    if (annotation instanceof CanActivate) {
      return annotation.fn;
    }
  }

  return null;
}
