// tslint:disable:variable-name
declare namespace cp {
  export class Vect {
    public x: number
    public y: number
    public constructor (x: number, y: number)
    public add (v: this): this
    public sub (v: this): this
    public neg (): this
    public mult (s: number): this
    public rotate (v: this): this
    public project (v: this): this
  }

  export const vzero: Vect

  export function veql (v1: Vect, v2: Vect): boolean
  export function vadd (v1: Vect, v2: Vect): Vect
  export function vsub (v1: Vect, v2: Vect): Vect
  export function vneg (v: Vect): Vect
  export function vmult (v: Vect, s: number): Vect
  export function vdot (v1: Vect, v2: Vect): number
  export function vcross (v1: Vect, v2: Vect): number
  export function vperp (v: Vect): Vect
  export function vrperp (v: Vect): Vect
  export function vproject (v1: Vect, v2: Vect): Vect
  export function vrotate (v1: Vect, v2: Vect): Vect
  export function vunrotate (v1: Vect, v2: Vect): Vect
  export function vlength (v: Vect): number
  export function vlengthsq (v: Vect): number
  export function vlerp (v1: Vect, v2: Vect, t: number): Vect
  export function vlerpconst (v1: Vect, v2: Vect, d: number): Vect
  export function vslerp (v1: Vect, v2: Vect, t: number): Vect
  export function vslerpconst (v1: Vect, v2: Vect, a: number): Vect
  export function vnormalize (v: Vect): Vect
  export function vnormalize_safe (v: Vect): Vect
  export function vclamp (v: Vect, len: number): Vect
  export function vdist (v1: Vect, v2: Vect): number
  export function vdistsq (v1: Vect, v2: Vect): number
  export function vnear (v1: Vect, v2: Vect, dist: number): boolean
  export function vforangle (a: number): Vect
  export function vtoangle (v: Vect): number

  export function fclamp01 (f: number): number
  export function clamp01 (f: number): number

  interface IVectStatic {
    (x: number, y: number): Vect
    add (v1: Vect, v2: Vect): Vect
    clamp (v: Vect, len: number): Vect
    cross (v1: Vect, v2: Vect): number
    dist (v1: Vect, v2: Vect): number
    distsq (v1: Vect, v2: Vect): number
    dot (v1: Vect, v2: Vect): number
    eql (v1: Vect, v2: Vect): boolean
    forangle (a: number): Vect
    length (v: Vect): number
    lengthsq (v: Vect): number
    lerp (v1: Vect, v2: Vect, t: number): Vect
    lerpconst (v1: Vect, v2: Vect, d: number): Vect
    mult (v: Vect, s: number): Vect
    near (v1: Vect, v2: Vect, dist: number): boolean
    neg (v: Vect): Vect
    normalize (v: Vect): Vect
    normalize_safe (v: Vect): Vect
    perp (v: Vect): Vect
    project (v1: Vect, v2: Vect): Vect
    vrotate (v1: Vect, v2: Vect): Vect
    pvrperp (v: Vect): Vect
    slerp (v1: Vect, v2: Vect, t: number): Vect
    slerpconst (v1: Vect, v2: Vect, a: number): Vect
    sub (v1: Vect, v2: Vect): Vect
    toangle (v: Vect): number
    unrotate (v1: Vect, v2: Vect): Vect
    str (v: Vect): string
  }
  export const v: IVectStatic

  export class BB {
    public l: number
    public b: number
    public r: number
    public t: number
    public constructor (l: number, b: number, r: number, t: number)
  }

  export function bb (l: number, b: number, r: number, t: number): BB

  export class Space {
    public gravity: Vect
    public iterations: number
    public damping: number
    public staticBody: Body
    public idleSpeedThreshold: number
    public sleepTimeThreshold: number
    public collisionSlop: number
    public collisionBias: number
    public confirmPersistence: number
    public enableContactGraph: boolean
  }

  export class Body {
    public a: number
    public w: number
    public p: Vect
    public v: number
    public f: Vect
    public t: number
    public v_limit: number
    public w_limit: number
    public space: Space
    public rot: Vect
    public m: number
    public i: number
  }

  export class Shape {
    public body: Body
    public group: number
    public collision_type: number
    public layers: number
    public sensor: boolean
    public space: Space
    public surface_v: Vect
    public e: number
    public u: number
  }

  export class CircleShape extends Shape {
    public r: number
    public c: Vect
  }

  export class SegmentShape extends Shape {
    public a: Vect
    public b: Vect
    public n: Vect
    public r: number
  }

  export class PolyShape extends Shape {}

  export function BoxShape2 (body: Body, box: BB): PolyShape
  export function BoxShape (body: Body, width: number, height: number): PolyShape

  export class Constraint {
    public a: Body
    public b: Body
    public space: Space
    public maxForce: Vect
    public errorBias: number
    public maxBias: number
  }

  export class PinJoint extends Constraint {
    public anchr1: Vect
    public anchr2: Vect
    public dist: number
  }

  export class SlideJoint extends Constraint {
    public anchr1: Vect
    public anchr2: Vect
    public min: number
    public max: number
  }

  export class PivotJoint extends Constraint {
    public anchr1: Vect
    public anchr2: Vect
  }

  export class GrooveJoint extends Constraint {
    public anchr2: Vect
    public grv_a: Vect
    public grv_b: Vect
  }

  export class DampedSpring extends Constraint {
    public anchr1: Vect
    public anchr2: Vect
    public damping: number
    public restLength: number
    public stiffness: number
  }

  export class DampedRotarySpring extends Constraint {
    public restAngle: number
    public stiffness: number
    public damping: number
  }

  export class RotaryLimitJoint extends Constraint {
    public min: number
    public max: number
  }

  export class RatchetJoint extends Constraint {
    public angle: number
    public phase: number
    public ratchet: number
  }

  export class GearJoint extends Constraint {
    public phase: number
    public ratio: number
  }

  export class SimpleMotor extends Constraint {
    public rate: number
  }

  export class Arbiter {
    public e: number
    public u: number
    public surface_vr: Vect
  }
}
