// tslint:disable:variable-name
declare namespace cp {
  export enum BodyType {
    Dynamic,
    Kinematic,
    Static,
  }

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
  export const SHAPE_FILTER_ALL: IShapeFilter
  export const ALLOW_PRIVATE_ACCESS: number
  export const ALL_CATEGORIES: number
  export const ARBITER_STATE_CACHED: number
  export const ARBITER_STATE_FIRST_COLLISION: number
  export const ARBITER_STATE_IGNORE: number
  export const ARBITER_STATE_INVALIDATED: number
  export const ARBITER_STATE_NORMAL: number
  export const BODY_TYPE_DYNAMIC: number
  export const BODY_TYPE_KINEMATIC: number
  export const BODY_TYPE_STATIC: number
  export const BUFFER_BYTES: number
  export const CIRCLE_SHAPE: number
  export const HASH_COEF: number
  export const MAX_CONTACTS_PER_ARBITER: number
  export const NO_GROUP: number
  export const NUM_SHAPES: number
  export const POLY_SHAPE: number
  export const POLY_SHAPE_INLINE_ALLOC: number
  export const SEGMENT_SHAPE: number
  export const SPACE_DEBUG_DRAW_COLLISION_POINTS: number
  export const SPACE_DEBUG_DRAW_CONSTRAINTS: number
  export const SPACE_DEBUG_DRAW_SHAPES: number
  export const USE_DOUBLES: number
  export const VERSION_MAJOR: number
  export const VERSION_MINOR: number
  export const VERSION_RELEASE: number
  export const WILDCARD_COLLISION_TYPE: number

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

  export function fabs (f: number): number
  export function fclamp (f: number, min: number, max: number): number
  export function fclamp01 (f: number): number
  export function clamp01 (f: number): number
  export function flerp (f1: number, f2: number, t: number): number
  export function flerpconst (f1: number, f2: number, d: number): number
  export function fmax (a: number, b: number): number
  export function fmin (a: number, b: number): number

  export function momentForCircle (m: number, r1: number, r2: number, offset: Vect): number
  export function areaForCircle (r1: number, r2: number): number
  export function momentForSegment (m: number, a: Vect, b: Vect): number
  export function areaForSegment (a: Vect, b: Vect, r: number): number
  export function momentForPoly (m: number, verts: Vect[], offset: Vect): number
  export function areaForPoly (verts: Vect[]): number
  export function centroidForPoly (verts: Vect[]): Vect
  export function recenterPoly (verts: Vect[]): void
  export function momentForBox (m: number, width: number, height: number): number
  export function momentForBox2 (m: number, box: BB): number

  export function shapeFilterNew (group: number, categories: number, mask: number): IShapeFilter

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

  export interface ISegmentQueryInfo {
    shape: Shape
    point: Vect
    normal: Vect
    alpha: number
  }

  export interface IPointQueryInfo  {
    shape: Shape
    point: Vect
    distance: number
    gradient: Vect
  }

  export interface IShapeFilter {
    group?: number
    categories?: number
    mask?: number
  }

  export class Space {
    public gravity: Vect
    public iterations: number
    public damping: number
    public idleSpeedThreshold: number
    public sleepTimeThreshold: number
    public collisionSlop: number
    public collisionBias: number
    public collisionPersistence: number
    public enableContactGraph: boolean
    public readonly staticBody: Body
    public pointQueryNearest (point: Vect, maxDistance: number, filter: IShapeFilter): IPointQueryInfo
    public segmentQueryFirst (start: Vect, end: Vect, radius: number, filter: IShapeFilter): ISegmentQueryInfo
    public addBody (body: Body): Body
    public addConstraint (constraint: Constraint): Constraint
    public addShape (shape: Shape): Shape
    public addStaticShape (shape: Shape): Shape
    public containsBody (body: Body): boolean
    public containsConstraint (constraint: Constraint): boolean
    public containsShape (shape: Shape): boolean
    public getCurrentTimeStep (): number
    public isLocked (): boolean
    public reindexShape (shape: Shape): void
    public reindexShapesForBody (body: Body): void
    public reindexStatic (): void
    public removeBody (body: Body): void
    public removeCollisionHandler (a: number, b: number): void
    public removeConstraint (constraint: Constraint): void
    public removeShape (shape: Shape): void
    public step (dt: number): void
    public useSpatialHash (dim: number, count: number): void
    public destroy (): void
    public eachConstraint (callback: (constraint: Constraint) => void): void
    public eachBody (callback: (constraint: Body) => void): void
    public eachShape (callback: (constraint: Shape) => void): void
    public addCollisionHandler (
      a: number,
      b: number,
      begin: (arbiter: Arbiter, space: Space) => boolean,
      preSolve: (arbiter: Arbiter, space: Space) => boolean,
      postSolve: (arbiter: Arbiter, space: Space) => void,
      separate: (arbiter: Arbiter, space: Space) => void): void
  }

  export class Body {
    public a: number
    public w: number
    public p: Vect
    public v: Vect
    public f: Vect
    public t: number
    public v_limit: number
    public w_limit: number
    public m: number
    public i: number
    public readonly vx: number
    public readonly vy: number
    public readonly space: Space
    public readonly rot: Vect
    public constructor (m: number, i: number)
    public activate (): void
    public activateStatic (filter: Shape): void
    public applyForce (f: Vect, r: Vect): void
    public applyImpulse (j: Vect, r: Vect): void
    public getVelAtLocalPoint (point: Vect): Vect
    public getVelAtWorldPoint (point: Vect): Vect
    public isSleeping (): boolean
    public kineticEnergy (): number
    public local2World (vec: Vect): Vect
    public sleep (): void
    public sleepWithGroup (group: Body): void
    public updatePosition (dt: number): void
    public updateVelocity (gravity: Vect, damping: number, dt: number): void
    public world2Local (vec: Vect): Vect
    public setType (type: BodyType): void
    public getType (): BodyType
  }

  export class Shape {
    public body: Body
    public group: number
    public collision_type: number
    public sensor: boolean
    public surface_v: Vect
    public e: number
    public u: number
    public readonly bb_l: number
    public readonly bb_b: number
    public readonly bb_r: number
    public readonly bb_t: number
    public readonly space: Space
    public cacheBB (): BB
    public getBB (): BB
    public pointQuery (p: Vect): IPointQueryInfo
    public segmentQuery (a: Vect, b: Vect, radius?: number): ISegmentQueryInfo
    public update (pos: Vect, rot: Vect): BB
    public getFilter (): IShapeFilter
    public setFilter (filter: IShapeFilter): void
  }

  export class CircleShape extends Shape {
    public readonly r: number
    public readonly c: Vect
    public constructor (body: Body, r: number, c: Vect)
  }

  export class SegmentShape extends Shape {
    public readonly a: Vect
    public readonly b: Vect
    public readonly n: Vect
    public readonly r: number
    public constructor (body: Body, a: Vect, b: Vect, r: number)
    public setNeighbors (prev: Vect, next: Vect): void
  }

  export class PolyShape extends Shape {
    public readonly verts: Vect[]
    public constructor (body: Body, verts: Vect[], c: Vect)
    public getVert (idx: number): Vect
  }

  export function BoxShape2 (body: Body, box: BB): PolyShape
  export function BoxShape (body: Body, width: number, height: number): PolyShape

  export class Constraint {
    public a: Body
    public b: Body
    public maxForce: Vect
    public errorBias: number
    public maxBias: number
    public readonly space: Space
    public isDampedRotarySpring (): boolean
    public isDampedSpring (): boolean
    public isGearJoint (): boolean
    public isGrooveJoint (): boolean
    public isPinJoint (): boolean
    public isPivotJoint (): boolean
    public isRatchetJoint (): boolean
    public isRotaryLimitJoint (): boolean
    public isSimpleMotor (): boolean
    public isSlideJoint (): boolean
    public getImpulse (): number
    public getCollideBodies (): boolean
  }

  export class PinJoint extends Constraint {
    public readonly anchr1: Vect
    public readonly anchr2: Vect
    public dist: number
    public constructor (a: Body, b: Body, anchorA: Vect, anchorB: Vect)
    public getAnchorA (): Vect
    public getAnchorB (): Vect
    public setAnchorA (anchorA: Vect): void
    public setAnchorB (anchorB: Vect): void
  }

  export class SlideJoint extends Constraint {
    public readonly anchr1: Vect
    public readonly anchr2: Vect
    public min: number
    public max: number
    public constructor (a: Body, b: Body, anchorA: Vect, anchorB: Vect, min: number, max: number)
    public getAnchorA (): Vect
    public getAnchorB (): Vect
    public setAnchorA (anchorA: Vect): void
    public setAnchorB (anchorB: Vect): void
  }

  export class PivotJoint extends Constraint {
    public readonly anchr1: Vect
    public readonly anchr2: Vect
    public constructor (a: Body, b: Body, pivot: Vect)
    public getAnchorA (): Vect
    public getAnchorB (): Vect
    public setAnchorA (anchorA: Vect): void
    public setAnchorB (anchorB: Vect): void
  }

  export class GrooveJoint extends Constraint {
    public anchr2: Vect
    public grv_a: Vect
    public grv_b: Vect
    public constructor (a: Body, b: Body, grooveA: Vect, grooveB: Vect, anchorB: Vect)
    public getAnchorB (): Vect
    public setAnchorB (anchorB: Vect): void
    public getGrooveA (): Vect
    public getGrooveB (): Vect
    public setGrooveA (anchorA: Vect): void
    public setGrooveB (anchorB: Vect): void
  }

  export class DampedSpring extends Constraint {
    public readonly anchr1: Vect
    public readonly anchr2: Vect
    public damping: number
    public restLength: number
    public stiffness: number
    public constructor (a: Body, b: Body, anchorA: Vect, anchorB: Vect, restLength: number, stiffness: number, damping: number)
    public getAnchorA (): Vect
    public getAnchorB (): Vect
    public setAnchorA (anchorA: Vect): void
    public setAnchorB (anchorB: Vect): void
  }

  export class DampedRotarySpring extends Constraint {
    public restAngle: number
    public stiffness: number
    public damping: number
    public constructor (a: Body, b: Body, restAngle: number, stiffness: number, damping: number)
  }

  export class RotaryLimitJoint extends Constraint {
    public min: number
    public max: number
    public constructor (a: Body, b: Body, min: number, max: number)
  }

  export class RatchetJoint extends Constraint {
    public angle: number
    public phase: number
    public ratchet: number
    public constructor (a: Body, b: Body, phase: number, ratchet: number)
  }

  export class GearJoint extends Constraint {
    public phase: number
    public ratio: number
    public constructor (a: Body, b: Body, phase: number, ratio: number)
  }

  export class SimpleMotor extends Constraint {
    public rate: number
    constructor (a: Body, b: Body, rate: number)
  }

  export class Arbiter {
    public e: number
    public u: number
    public surface_vr: Vect
    public readonly a: Vect
    public readonly b: Vect
    public readonly body_a: Body
    public readonly body_b: Body
    public callWildcardBeginA (space: Space): boolean
    public callWildcardBeginB (space: Space): boolean
    public callWildcardPostSolveA (space: Space): void
    public callWildcardPostSolveB (space: Space): void
    public callWildcardPreSolveA (space: Space): void
    public callWildcardPreSolveB (space: Space): void
    public callWildcardSeparateA (space: Space): void
    public callWildcardSeparateB (space: Space): void
    public getCount (): number
    public getDepth (i: number): number
    public getFriction (): number
    public getNormal (): Vect
    public getPointA (): Vect
    public getPointB (): Vect
    public getRestitution (): number
    public getSurfaceVelocity (): Vect
    public ignore (): boolean
    public isFirstContact (): boolean
    public isRemoval (): boolean
    public setFriction (friction: number): void
    public setRestitution (restitution: number): void
    public setSurfaceVelocity (surfaceVelocity: Vect): void
    public totalImpulse (): Vect
    public totalKE (): number
    public getShapes (): Shape[]
    public getBodies (): Body[]
    public getBodyA (): Body
    public getBodyB (): Body
  }
}
