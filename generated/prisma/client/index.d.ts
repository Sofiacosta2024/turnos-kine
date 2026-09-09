
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model diagnosticos
 * 
 */
export type diagnosticos = $Result.DefaultSelection<Prisma.$diagnosticosPayload>
/**
 * Model ejercicios
 * 
 */
export type ejercicios = $Result.DefaultSelection<Prisma.$ejerciciosPayload>
/**
 * Model ejercicios_asignados
 * 
 */
export type ejercicios_asignados = $Result.DefaultSelection<Prisma.$ejercicios_asignadosPayload>
/**
 * Model pacientes
 * 
 */
export type pacientes = $Result.DefaultSelection<Prisma.$pacientesPayload>
/**
 * Model progresos
 * 
 */
export type progresos = $Result.DefaultSelection<Prisma.$progresosPayload>
/**
 * Model turnos
 * 
 */
export type turnos = $Result.DefaultSelection<Prisma.$turnosPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AsignacionEstado: {
  ACTIVO: 'ACTIVO',
  PAUSADO: 'PAUSADO',
  FINALIZADO: 'FINALIZADO'
};

export type AsignacionEstado = (typeof AsignacionEstado)[keyof typeof AsignacionEstado]


export const Role: {
  KINESIOLOGO: 'KINESIOLOGO',
  PACIENTE: 'PACIENTE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TurnoEstado: {
  PENDIENTE: 'PENDIENTE',
  CONFIRMADO: 'CONFIRMADO',
  COMPLETADO: 'COMPLETADO',
  CANCELADO: 'CANCELADO'
};

export type TurnoEstado = (typeof TurnoEstado)[keyof typeof TurnoEstado]

}

export type AsignacionEstado = $Enums.AsignacionEstado

export const AsignacionEstado: typeof $Enums.AsignacionEstado

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TurnoEstado = $Enums.TurnoEstado

export const TurnoEstado: typeof $Enums.TurnoEstado

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Diagnosticos
 * const diagnosticos = await prisma.diagnosticos.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Diagnosticos
   * const diagnosticos = await prisma.diagnosticos.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.diagnosticos`: Exposes CRUD operations for the **diagnosticos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnosticos
    * const diagnosticos = await prisma.diagnosticos.findMany()
    * ```
    */
  get diagnosticos(): Prisma.diagnosticosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ejercicios`: Exposes CRUD operations for the **ejercicios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ejercicios
    * const ejercicios = await prisma.ejercicios.findMany()
    * ```
    */
  get ejercicios(): Prisma.ejerciciosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ejercicios_asignados`: Exposes CRUD operations for the **ejercicios_asignados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ejercicios_asignados
    * const ejercicios_asignados = await prisma.ejercicios_asignados.findMany()
    * ```
    */
  get ejercicios_asignados(): Prisma.ejercicios_asignadosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pacientes`: Exposes CRUD operations for the **pacientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.pacientes.findMany()
    * ```
    */
  get pacientes(): Prisma.pacientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progresos`: Exposes CRUD operations for the **progresos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Progresos
    * const progresos = await prisma.progresos.findMany()
    * ```
    */
  get progresos(): Prisma.progresosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turnos`: Exposes CRUD operations for the **turnos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turnos
    * const turnos = await prisma.turnos.findMany()
    * ```
    */
  get turnos(): Prisma.turnosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    diagnosticos: 'diagnosticos',
    ejercicios: 'ejercicios',
    ejercicios_asignados: 'ejercicios_asignados',
    pacientes: 'pacientes',
    progresos: 'progresos',
    turnos: 'turnos',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "diagnosticos" | "ejercicios" | "ejercicios_asignados" | "pacientes" | "progresos" | "turnos" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      diagnosticos: {
        payload: Prisma.$diagnosticosPayload<ExtArgs>
        fields: Prisma.diagnosticosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.diagnosticosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.diagnosticosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticosPayload>
          }
          findFirst: {
            args: Prisma.diagnosticosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.diagnosticosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticosPayload>
          }
          findMany: {
            args: Prisma.diagnosticosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticosPayload>[]
          }
          create: {
            args: Prisma.diagnosticosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticosPayload>
          }
          createMany: {
            args: Prisma.diagnosticosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.diagnosticosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticosPayload>[]
          }
          delete: {
            args: Prisma.diagnosticosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticosPayload>
          }
          update: {
            args: Prisma.diagnosticosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticosPayload>
          }
          deleteMany: {
            args: Prisma.diagnosticosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.diagnosticosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.diagnosticosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticosPayload>[]
          }
          upsert: {
            args: Prisma.diagnosticosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticosPayload>
          }
          aggregate: {
            args: Prisma.DiagnosticosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnosticos>
          }
          groupBy: {
            args: Prisma.diagnosticosGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticosGroupByOutputType>[]
          }
          count: {
            args: Prisma.diagnosticosCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticosCountAggregateOutputType> | number
          }
        }
      }
      ejercicios: {
        payload: Prisma.$ejerciciosPayload<ExtArgs>
        fields: Prisma.ejerciciosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ejerciciosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejerciciosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ejerciciosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejerciciosPayload>
          }
          findFirst: {
            args: Prisma.ejerciciosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejerciciosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ejerciciosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejerciciosPayload>
          }
          findMany: {
            args: Prisma.ejerciciosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejerciciosPayload>[]
          }
          create: {
            args: Prisma.ejerciciosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejerciciosPayload>
          }
          createMany: {
            args: Prisma.ejerciciosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ejerciciosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejerciciosPayload>[]
          }
          delete: {
            args: Prisma.ejerciciosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejerciciosPayload>
          }
          update: {
            args: Prisma.ejerciciosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejerciciosPayload>
          }
          deleteMany: {
            args: Prisma.ejerciciosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ejerciciosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ejerciciosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejerciciosPayload>[]
          }
          upsert: {
            args: Prisma.ejerciciosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejerciciosPayload>
          }
          aggregate: {
            args: Prisma.EjerciciosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEjercicios>
          }
          groupBy: {
            args: Prisma.ejerciciosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EjerciciosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ejerciciosCountArgs<ExtArgs>
            result: $Utils.Optional<EjerciciosCountAggregateOutputType> | number
          }
        }
      }
      ejercicios_asignados: {
        payload: Prisma.$ejercicios_asignadosPayload<ExtArgs>
        fields: Prisma.ejercicios_asignadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ejercicios_asignadosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejercicios_asignadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ejercicios_asignadosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejercicios_asignadosPayload>
          }
          findFirst: {
            args: Prisma.ejercicios_asignadosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejercicios_asignadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ejercicios_asignadosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejercicios_asignadosPayload>
          }
          findMany: {
            args: Prisma.ejercicios_asignadosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejercicios_asignadosPayload>[]
          }
          create: {
            args: Prisma.ejercicios_asignadosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejercicios_asignadosPayload>
          }
          createMany: {
            args: Prisma.ejercicios_asignadosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ejercicios_asignadosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejercicios_asignadosPayload>[]
          }
          delete: {
            args: Prisma.ejercicios_asignadosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejercicios_asignadosPayload>
          }
          update: {
            args: Prisma.ejercicios_asignadosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejercicios_asignadosPayload>
          }
          deleteMany: {
            args: Prisma.ejercicios_asignadosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ejercicios_asignadosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ejercicios_asignadosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejercicios_asignadosPayload>[]
          }
          upsert: {
            args: Prisma.ejercicios_asignadosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ejercicios_asignadosPayload>
          }
          aggregate: {
            args: Prisma.Ejercicios_asignadosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEjercicios_asignados>
          }
          groupBy: {
            args: Prisma.ejercicios_asignadosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ejercicios_asignadosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ejercicios_asignadosCountArgs<ExtArgs>
            result: $Utils.Optional<Ejercicios_asignadosCountAggregateOutputType> | number
          }
        }
      }
      pacientes: {
        payload: Prisma.$pacientesPayload<ExtArgs>
        fields: Prisma.pacientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pacientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pacientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          findFirst: {
            args: Prisma.pacientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pacientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          findMany: {
            args: Prisma.pacientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>[]
          }
          create: {
            args: Prisma.pacientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          createMany: {
            args: Prisma.pacientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pacientesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>[]
          }
          delete: {
            args: Prisma.pacientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          update: {
            args: Prisma.pacientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          deleteMany: {
            args: Prisma.pacientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pacientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pacientesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>[]
          }
          upsert: {
            args: Prisma.pacientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          aggregate: {
            args: Prisma.PacientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePacientes>
          }
          groupBy: {
            args: Prisma.pacientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.pacientesCountArgs<ExtArgs>
            result: $Utils.Optional<PacientesCountAggregateOutputType> | number
          }
        }
      }
      progresos: {
        payload: Prisma.$progresosPayload<ExtArgs>
        fields: Prisma.progresosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.progresosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.progresosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresosPayload>
          }
          findFirst: {
            args: Prisma.progresosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.progresosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresosPayload>
          }
          findMany: {
            args: Prisma.progresosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresosPayload>[]
          }
          create: {
            args: Prisma.progresosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresosPayload>
          }
          createMany: {
            args: Prisma.progresosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.progresosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresosPayload>[]
          }
          delete: {
            args: Prisma.progresosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresosPayload>
          }
          update: {
            args: Prisma.progresosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresosPayload>
          }
          deleteMany: {
            args: Prisma.progresosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.progresosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.progresosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresosPayload>[]
          }
          upsert: {
            args: Prisma.progresosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresosPayload>
          }
          aggregate: {
            args: Prisma.ProgresosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgresos>
          }
          groupBy: {
            args: Prisma.progresosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgresosGroupByOutputType>[]
          }
          count: {
            args: Prisma.progresosCountArgs<ExtArgs>
            result: $Utils.Optional<ProgresosCountAggregateOutputType> | number
          }
        }
      }
      turnos: {
        payload: Prisma.$turnosPayload<ExtArgs>
        fields: Prisma.turnosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.turnosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turnosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.turnosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turnosPayload>
          }
          findFirst: {
            args: Prisma.turnosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turnosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.turnosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turnosPayload>
          }
          findMany: {
            args: Prisma.turnosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turnosPayload>[]
          }
          create: {
            args: Prisma.turnosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turnosPayload>
          }
          createMany: {
            args: Prisma.turnosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.turnosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turnosPayload>[]
          }
          delete: {
            args: Prisma.turnosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turnosPayload>
          }
          update: {
            args: Prisma.turnosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turnosPayload>
          }
          deleteMany: {
            args: Prisma.turnosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.turnosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.turnosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turnosPayload>[]
          }
          upsert: {
            args: Prisma.turnosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turnosPayload>
          }
          aggregate: {
            args: Prisma.TurnosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurnos>
          }
          groupBy: {
            args: Prisma.turnosGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurnosGroupByOutputType>[]
          }
          count: {
            args: Prisma.turnosCountArgs<ExtArgs>
            result: $Utils.Optional<TurnosCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    diagnosticos?: diagnosticosOmit
    ejercicios?: ejerciciosOmit
    ejercicios_asignados?: ejercicios_asignadosOmit
    pacientes?: pacientesOmit
    progresos?: progresosOmit
    turnos?: turnosOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DiagnosticosCountOutputType
   */

  export type DiagnosticosCountOutputType = {
    ejercicios_asignados: number
  }

  export type DiagnosticosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ejercicios_asignados?: boolean | DiagnosticosCountOutputTypeCountEjercicios_asignadosArgs
  }

  // Custom InputTypes
  /**
   * DiagnosticosCountOutputType without action
   */
  export type DiagnosticosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticosCountOutputType
     */
    select?: DiagnosticosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiagnosticosCountOutputType without action
   */
  export type DiagnosticosCountOutputTypeCountEjercicios_asignadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ejercicios_asignadosWhereInput
  }


  /**
   * Count Type EjerciciosCountOutputType
   */

  export type EjerciciosCountOutputType = {
    ejercicios_asignados: number
  }

  export type EjerciciosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ejercicios_asignados?: boolean | EjerciciosCountOutputTypeCountEjercicios_asignadosArgs
  }

  // Custom InputTypes
  /**
   * EjerciciosCountOutputType without action
   */
  export type EjerciciosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjerciciosCountOutputType
     */
    select?: EjerciciosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EjerciciosCountOutputType without action
   */
  export type EjerciciosCountOutputTypeCountEjercicios_asignadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ejercicios_asignadosWhereInput
  }


  /**
   * Count Type Ejercicios_asignadosCountOutputType
   */

  export type Ejercicios_asignadosCountOutputType = {
    progresos: number
  }

  export type Ejercicios_asignadosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progresos?: boolean | Ejercicios_asignadosCountOutputTypeCountProgresosArgs
  }

  // Custom InputTypes
  /**
   * Ejercicios_asignadosCountOutputType without action
   */
  export type Ejercicios_asignadosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicios_asignadosCountOutputType
     */
    select?: Ejercicios_asignadosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Ejercicios_asignadosCountOutputType without action
   */
  export type Ejercicios_asignadosCountOutputTypeCountProgresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progresosWhereInput
  }


  /**
   * Count Type PacientesCountOutputType
   */

  export type PacientesCountOutputType = {
    diagnosticos: number
    ejercicios_asignados: number
    progresos: number
    turnos: number
  }

  export type PacientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosticos?: boolean | PacientesCountOutputTypeCountDiagnosticosArgs
    ejercicios_asignados?: boolean | PacientesCountOutputTypeCountEjercicios_asignadosArgs
    progresos?: boolean | PacientesCountOutputTypeCountProgresosArgs
    turnos?: boolean | PacientesCountOutputTypeCountTurnosArgs
  }

  // Custom InputTypes
  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacientesCountOutputType
     */
    select?: PacientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeCountDiagnosticosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diagnosticosWhereInput
  }

  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeCountEjercicios_asignadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ejercicios_asignadosWhereInput
  }

  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeCountProgresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progresosWhereInput
  }

  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeCountTurnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: turnosWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    diagnosticos: number
    ejercicios: number
    ejercicios_asignados: number
    pacientes_pacientes_kinesiologoIdTousers: number
    progresos: number
    turnos: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosticos?: boolean | UsersCountOutputTypeCountDiagnosticosArgs
    ejercicios?: boolean | UsersCountOutputTypeCountEjerciciosArgs
    ejercicios_asignados?: boolean | UsersCountOutputTypeCountEjercicios_asignadosArgs
    pacientes_pacientes_kinesiologoIdTousers?: boolean | UsersCountOutputTypeCountPacientes_pacientes_kinesiologoIdTousersArgs
    progresos?: boolean | UsersCountOutputTypeCountProgresosArgs
    turnos?: boolean | UsersCountOutputTypeCountTurnosArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDiagnosticosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diagnosticosWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ejerciciosWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEjercicios_asignadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ejercicios_asignadosWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPacientes_pacientes_kinesiologoIdTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pacientesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProgresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progresosWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTurnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: turnosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model diagnosticos
   */

  export type AggregateDiagnosticos = {
    _count: DiagnosticosCountAggregateOutputType | null
    _min: DiagnosticosMinAggregateOutputType | null
    _max: DiagnosticosMaxAggregateOutputType | null
  }

  export type DiagnosticosMinAggregateOutputType = {
    id: string | null
    pacienteId: string | null
    kinesiologoId: string | null
    lesion: string | null
    descripcion: string | null
    tratamiento: string | null
    creadoEl: Date | null
    activo: boolean | null
  }

  export type DiagnosticosMaxAggregateOutputType = {
    id: string | null
    pacienteId: string | null
    kinesiologoId: string | null
    lesion: string | null
    descripcion: string | null
    tratamiento: string | null
    creadoEl: Date | null
    activo: boolean | null
  }

  export type DiagnosticosCountAggregateOutputType = {
    id: number
    pacienteId: number
    kinesiologoId: number
    lesion: number
    descripcion: number
    tratamiento: number
    creadoEl: number
    activo: number
    _all: number
  }


  export type DiagnosticosMinAggregateInputType = {
    id?: true
    pacienteId?: true
    kinesiologoId?: true
    lesion?: true
    descripcion?: true
    tratamiento?: true
    creadoEl?: true
    activo?: true
  }

  export type DiagnosticosMaxAggregateInputType = {
    id?: true
    pacienteId?: true
    kinesiologoId?: true
    lesion?: true
    descripcion?: true
    tratamiento?: true
    creadoEl?: true
    activo?: true
  }

  export type DiagnosticosCountAggregateInputType = {
    id?: true
    pacienteId?: true
    kinesiologoId?: true
    lesion?: true
    descripcion?: true
    tratamiento?: true
    creadoEl?: true
    activo?: true
    _all?: true
  }

  export type DiagnosticosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diagnosticos to aggregate.
     */
    where?: diagnosticosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnosticos to fetch.
     */
    orderBy?: diagnosticosOrderByWithRelationInput | diagnosticosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: diagnosticosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned diagnosticos
    **/
    _count?: true | DiagnosticosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosticosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosticosMaxAggregateInputType
  }

  export type GetDiagnosticosAggregateType<T extends DiagnosticosAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnosticos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnosticos[P]>
      : GetScalarType<T[P], AggregateDiagnosticos[P]>
  }




  export type diagnosticosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diagnosticosWhereInput
    orderBy?: diagnosticosOrderByWithAggregationInput | diagnosticosOrderByWithAggregationInput[]
    by: DiagnosticosScalarFieldEnum[] | DiagnosticosScalarFieldEnum
    having?: diagnosticosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosticosCountAggregateInputType | true
    _min?: DiagnosticosMinAggregateInputType
    _max?: DiagnosticosMaxAggregateInputType
  }

  export type DiagnosticosGroupByOutputType = {
    id: string
    pacienteId: string
    kinesiologoId: string
    lesion: string
    descripcion: string
    tratamiento: string | null
    creadoEl: Date
    activo: boolean
    _count: DiagnosticosCountAggregateOutputType | null
    _min: DiagnosticosMinAggregateOutputType | null
    _max: DiagnosticosMaxAggregateOutputType | null
  }

  type GetDiagnosticosGroupByPayload<T extends diagnosticosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosticosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosticosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosticosGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosticosGroupByOutputType[P]>
        }
      >
    >


  export type diagnosticosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    kinesiologoId?: boolean
    lesion?: boolean
    descripcion?: boolean
    tratamiento?: boolean
    creadoEl?: boolean
    activo?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    ejercicios_asignados?: boolean | diagnosticos$ejercicios_asignadosArgs<ExtArgs>
    _count?: boolean | DiagnosticosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosticos"]>

  export type diagnosticosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    kinesiologoId?: boolean
    lesion?: boolean
    descripcion?: boolean
    tratamiento?: boolean
    creadoEl?: boolean
    activo?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosticos"]>

  export type diagnosticosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    kinesiologoId?: boolean
    lesion?: boolean
    descripcion?: boolean
    tratamiento?: boolean
    creadoEl?: boolean
    activo?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosticos"]>

  export type diagnosticosSelectScalar = {
    id?: boolean
    pacienteId?: boolean
    kinesiologoId?: boolean
    lesion?: boolean
    descripcion?: boolean
    tratamiento?: boolean
    creadoEl?: boolean
    activo?: boolean
  }

  export type diagnosticosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pacienteId" | "kinesiologoId" | "lesion" | "descripcion" | "tratamiento" | "creadoEl" | "activo", ExtArgs["result"]["diagnosticos"]>
  export type diagnosticosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    ejercicios_asignados?: boolean | diagnosticos$ejercicios_asignadosArgs<ExtArgs>
    _count?: boolean | DiagnosticosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type diagnosticosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }
  export type diagnosticosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }

  export type $diagnosticosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "diagnosticos"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      pacientes: Prisma.$pacientesPayload<ExtArgs>
      ejercicios_asignados: Prisma.$ejercicios_asignadosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pacienteId: string
      kinesiologoId: string
      lesion: string
      descripcion: string
      tratamiento: string | null
      creadoEl: Date
      activo: boolean
    }, ExtArgs["result"]["diagnosticos"]>
    composites: {}
  }

  type diagnosticosGetPayload<S extends boolean | null | undefined | diagnosticosDefaultArgs> = $Result.GetResult<Prisma.$diagnosticosPayload, S>

  type diagnosticosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<diagnosticosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosticosCountAggregateInputType | true
    }

  export interface diagnosticosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['diagnosticos'], meta: { name: 'diagnosticos' } }
    /**
     * Find zero or one Diagnosticos that matches the filter.
     * @param {diagnosticosFindUniqueArgs} args - Arguments to find a Diagnosticos
     * @example
     * // Get one Diagnosticos
     * const diagnosticos = await prisma.diagnosticos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends diagnosticosFindUniqueArgs>(args: SelectSubset<T, diagnosticosFindUniqueArgs<ExtArgs>>): Prisma__diagnosticosClient<$Result.GetResult<Prisma.$diagnosticosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diagnosticos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {diagnosticosFindUniqueOrThrowArgs} args - Arguments to find a Diagnosticos
     * @example
     * // Get one Diagnosticos
     * const diagnosticos = await prisma.diagnosticos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends diagnosticosFindUniqueOrThrowArgs>(args: SelectSubset<T, diagnosticosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__diagnosticosClient<$Result.GetResult<Prisma.$diagnosticosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnosticos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosticosFindFirstArgs} args - Arguments to find a Diagnosticos
     * @example
     * // Get one Diagnosticos
     * const diagnosticos = await prisma.diagnosticos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends diagnosticosFindFirstArgs>(args?: SelectSubset<T, diagnosticosFindFirstArgs<ExtArgs>>): Prisma__diagnosticosClient<$Result.GetResult<Prisma.$diagnosticosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnosticos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosticosFindFirstOrThrowArgs} args - Arguments to find a Diagnosticos
     * @example
     * // Get one Diagnosticos
     * const diagnosticos = await prisma.diagnosticos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends diagnosticosFindFirstOrThrowArgs>(args?: SelectSubset<T, diagnosticosFindFirstOrThrowArgs<ExtArgs>>): Prisma__diagnosticosClient<$Result.GetResult<Prisma.$diagnosticosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diagnosticos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosticosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnosticos
     * const diagnosticos = await prisma.diagnosticos.findMany()
     * 
     * // Get first 10 Diagnosticos
     * const diagnosticos = await prisma.diagnosticos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diagnosticosWithIdOnly = await prisma.diagnosticos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends diagnosticosFindManyArgs>(args?: SelectSubset<T, diagnosticosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosticosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diagnosticos.
     * @param {diagnosticosCreateArgs} args - Arguments to create a Diagnosticos.
     * @example
     * // Create one Diagnosticos
     * const Diagnosticos = await prisma.diagnosticos.create({
     *   data: {
     *     // ... data to create a Diagnosticos
     *   }
     * })
     * 
     */
    create<T extends diagnosticosCreateArgs>(args: SelectSubset<T, diagnosticosCreateArgs<ExtArgs>>): Prisma__diagnosticosClient<$Result.GetResult<Prisma.$diagnosticosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diagnosticos.
     * @param {diagnosticosCreateManyArgs} args - Arguments to create many Diagnosticos.
     * @example
     * // Create many Diagnosticos
     * const diagnosticos = await prisma.diagnosticos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends diagnosticosCreateManyArgs>(args?: SelectSubset<T, diagnosticosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diagnosticos and returns the data saved in the database.
     * @param {diagnosticosCreateManyAndReturnArgs} args - Arguments to create many Diagnosticos.
     * @example
     * // Create many Diagnosticos
     * const diagnosticos = await prisma.diagnosticos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diagnosticos and only return the `id`
     * const diagnosticosWithIdOnly = await prisma.diagnosticos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends diagnosticosCreateManyAndReturnArgs>(args?: SelectSubset<T, diagnosticosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosticosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diagnosticos.
     * @param {diagnosticosDeleteArgs} args - Arguments to delete one Diagnosticos.
     * @example
     * // Delete one Diagnosticos
     * const Diagnosticos = await prisma.diagnosticos.delete({
     *   where: {
     *     // ... filter to delete one Diagnosticos
     *   }
     * })
     * 
     */
    delete<T extends diagnosticosDeleteArgs>(args: SelectSubset<T, diagnosticosDeleteArgs<ExtArgs>>): Prisma__diagnosticosClient<$Result.GetResult<Prisma.$diagnosticosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diagnosticos.
     * @param {diagnosticosUpdateArgs} args - Arguments to update one Diagnosticos.
     * @example
     * // Update one Diagnosticos
     * const diagnosticos = await prisma.diagnosticos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends diagnosticosUpdateArgs>(args: SelectSubset<T, diagnosticosUpdateArgs<ExtArgs>>): Prisma__diagnosticosClient<$Result.GetResult<Prisma.$diagnosticosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diagnosticos.
     * @param {diagnosticosDeleteManyArgs} args - Arguments to filter Diagnosticos to delete.
     * @example
     * // Delete a few Diagnosticos
     * const { count } = await prisma.diagnosticos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends diagnosticosDeleteManyArgs>(args?: SelectSubset<T, diagnosticosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnosticos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosticosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnosticos
     * const diagnosticos = await prisma.diagnosticos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends diagnosticosUpdateManyArgs>(args: SelectSubset<T, diagnosticosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnosticos and returns the data updated in the database.
     * @param {diagnosticosUpdateManyAndReturnArgs} args - Arguments to update many Diagnosticos.
     * @example
     * // Update many Diagnosticos
     * const diagnosticos = await prisma.diagnosticos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diagnosticos and only return the `id`
     * const diagnosticosWithIdOnly = await prisma.diagnosticos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends diagnosticosUpdateManyAndReturnArgs>(args: SelectSubset<T, diagnosticosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosticosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diagnosticos.
     * @param {diagnosticosUpsertArgs} args - Arguments to update or create a Diagnosticos.
     * @example
     * // Update or create a Diagnosticos
     * const diagnosticos = await prisma.diagnosticos.upsert({
     *   create: {
     *     // ... data to create a Diagnosticos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnosticos we want to update
     *   }
     * })
     */
    upsert<T extends diagnosticosUpsertArgs>(args: SelectSubset<T, diagnosticosUpsertArgs<ExtArgs>>): Prisma__diagnosticosClient<$Result.GetResult<Prisma.$diagnosticosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diagnosticos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosticosCountArgs} args - Arguments to filter Diagnosticos to count.
     * @example
     * // Count the number of Diagnosticos
     * const count = await prisma.diagnosticos.count({
     *   where: {
     *     // ... the filter for the Diagnosticos we want to count
     *   }
     * })
    **/
    count<T extends diagnosticosCountArgs>(
      args?: Subset<T, diagnosticosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosticosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnosticos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiagnosticosAggregateArgs>(args: Subset<T, DiagnosticosAggregateArgs>): Prisma.PrismaPromise<GetDiagnosticosAggregateType<T>>

    /**
     * Group by Diagnosticos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosticosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends diagnosticosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: diagnosticosGroupByArgs['orderBy'] }
        : { orderBy?: diagnosticosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, diagnosticosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosticosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the diagnosticos model
   */
  readonly fields: diagnosticosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for diagnosticos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__diagnosticosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pacientes<T extends pacientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pacientesDefaultArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ejercicios_asignados<T extends diagnosticos$ejercicios_asignadosArgs<ExtArgs> = {}>(args?: Subset<T, diagnosticos$ejercicios_asignadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ejercicios_asignadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the diagnosticos model
   */
  interface diagnosticosFieldRefs {
    readonly id: FieldRef<"diagnosticos", 'String'>
    readonly pacienteId: FieldRef<"diagnosticos", 'String'>
    readonly kinesiologoId: FieldRef<"diagnosticos", 'String'>
    readonly lesion: FieldRef<"diagnosticos", 'String'>
    readonly descripcion: FieldRef<"diagnosticos", 'String'>
    readonly tratamiento: FieldRef<"diagnosticos", 'String'>
    readonly creadoEl: FieldRef<"diagnosticos", 'DateTime'>
    readonly activo: FieldRef<"diagnosticos", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * diagnosticos findUnique
   */
  export type diagnosticosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosticos
     */
    select?: diagnosticosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosticos
     */
    omit?: diagnosticosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticosInclude<ExtArgs> | null
    /**
     * Filter, which diagnosticos to fetch.
     */
    where: diagnosticosWhereUniqueInput
  }

  /**
   * diagnosticos findUniqueOrThrow
   */
  export type diagnosticosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosticos
     */
    select?: diagnosticosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosticos
     */
    omit?: diagnosticosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticosInclude<ExtArgs> | null
    /**
     * Filter, which diagnosticos to fetch.
     */
    where: diagnosticosWhereUniqueInput
  }

  /**
   * diagnosticos findFirst
   */
  export type diagnosticosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosticos
     */
    select?: diagnosticosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosticos
     */
    omit?: diagnosticosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticosInclude<ExtArgs> | null
    /**
     * Filter, which diagnosticos to fetch.
     */
    where?: diagnosticosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnosticos to fetch.
     */
    orderBy?: diagnosticosOrderByWithRelationInput | diagnosticosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diagnosticos.
     */
    cursor?: diagnosticosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diagnosticos.
     */
    distinct?: DiagnosticosScalarFieldEnum | DiagnosticosScalarFieldEnum[]
  }

  /**
   * diagnosticos findFirstOrThrow
   */
  export type diagnosticosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosticos
     */
    select?: diagnosticosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosticos
     */
    omit?: diagnosticosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticosInclude<ExtArgs> | null
    /**
     * Filter, which diagnosticos to fetch.
     */
    where?: diagnosticosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnosticos to fetch.
     */
    orderBy?: diagnosticosOrderByWithRelationInput | diagnosticosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diagnosticos.
     */
    cursor?: diagnosticosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diagnosticos.
     */
    distinct?: DiagnosticosScalarFieldEnum | DiagnosticosScalarFieldEnum[]
  }

  /**
   * diagnosticos findMany
   */
  export type diagnosticosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosticos
     */
    select?: diagnosticosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosticos
     */
    omit?: diagnosticosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticosInclude<ExtArgs> | null
    /**
     * Filter, which diagnosticos to fetch.
     */
    where?: diagnosticosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnosticos to fetch.
     */
    orderBy?: diagnosticosOrderByWithRelationInput | diagnosticosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing diagnosticos.
     */
    cursor?: diagnosticosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diagnosticos.
     */
    distinct?: DiagnosticosScalarFieldEnum | DiagnosticosScalarFieldEnum[]
  }

  /**
   * diagnosticos create
   */
  export type diagnosticosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosticos
     */
    select?: diagnosticosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosticos
     */
    omit?: diagnosticosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticosInclude<ExtArgs> | null
    /**
     * The data needed to create a diagnosticos.
     */
    data: XOR<diagnosticosCreateInput, diagnosticosUncheckedCreateInput>
  }

  /**
   * diagnosticos createMany
   */
  export type diagnosticosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many diagnosticos.
     */
    data: diagnosticosCreateManyInput | diagnosticosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * diagnosticos createManyAndReturn
   */
  export type diagnosticosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosticos
     */
    select?: diagnosticosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosticos
     */
    omit?: diagnosticosOmit<ExtArgs> | null
    /**
     * The data used to create many diagnosticos.
     */
    data: diagnosticosCreateManyInput | diagnosticosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * diagnosticos update
   */
  export type diagnosticosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosticos
     */
    select?: diagnosticosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosticos
     */
    omit?: diagnosticosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticosInclude<ExtArgs> | null
    /**
     * The data needed to update a diagnosticos.
     */
    data: XOR<diagnosticosUpdateInput, diagnosticosUncheckedUpdateInput>
    /**
     * Choose, which diagnosticos to update.
     */
    where: diagnosticosWhereUniqueInput
  }

  /**
   * diagnosticos updateMany
   */
  export type diagnosticosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update diagnosticos.
     */
    data: XOR<diagnosticosUpdateManyMutationInput, diagnosticosUncheckedUpdateManyInput>
    /**
     * Filter which diagnosticos to update
     */
    where?: diagnosticosWhereInput
    /**
     * Limit how many diagnosticos to update.
     */
    limit?: number
  }

  /**
   * diagnosticos updateManyAndReturn
   */
  export type diagnosticosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosticos
     */
    select?: diagnosticosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosticos
     */
    omit?: diagnosticosOmit<ExtArgs> | null
    /**
     * The data used to update diagnosticos.
     */
    data: XOR<diagnosticosUpdateManyMutationInput, diagnosticosUncheckedUpdateManyInput>
    /**
     * Filter which diagnosticos to update
     */
    where?: diagnosticosWhereInput
    /**
     * Limit how many diagnosticos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * diagnosticos upsert
   */
  export type diagnosticosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosticos
     */
    select?: diagnosticosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosticos
     */
    omit?: diagnosticosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticosInclude<ExtArgs> | null
    /**
     * The filter to search for the diagnosticos to update in case it exists.
     */
    where: diagnosticosWhereUniqueInput
    /**
     * In case the diagnosticos found by the `where` argument doesn't exist, create a new diagnosticos with this data.
     */
    create: XOR<diagnosticosCreateInput, diagnosticosUncheckedCreateInput>
    /**
     * In case the diagnosticos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<diagnosticosUpdateInput, diagnosticosUncheckedUpdateInput>
  }

  /**
   * diagnosticos delete
   */
  export type diagnosticosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosticos
     */
    select?: diagnosticosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosticos
     */
    omit?: diagnosticosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticosInclude<ExtArgs> | null
    /**
     * Filter which diagnosticos to delete.
     */
    where: diagnosticosWhereUniqueInput
  }

  /**
   * diagnosticos deleteMany
   */
  export type diagnosticosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diagnosticos to delete
     */
    where?: diagnosticosWhereInput
    /**
     * Limit how many diagnosticos to delete.
     */
    limit?: number
  }

  /**
   * diagnosticos.ejercicios_asignados
   */
  export type diagnosticos$ejercicios_asignadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios_asignados
     */
    select?: ejercicios_asignadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios_asignados
     */
    omit?: ejercicios_asignadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejercicios_asignadosInclude<ExtArgs> | null
    where?: ejercicios_asignadosWhereInput
    orderBy?: ejercicios_asignadosOrderByWithRelationInput | ejercicios_asignadosOrderByWithRelationInput[]
    cursor?: ejercicios_asignadosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ejercicios_asignadosScalarFieldEnum | Ejercicios_asignadosScalarFieldEnum[]
  }

  /**
   * diagnosticos without action
   */
  export type diagnosticosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosticos
     */
    select?: diagnosticosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosticos
     */
    omit?: diagnosticosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticosInclude<ExtArgs> | null
  }


  /**
   * Model ejercicios
   */

  export type AggregateEjercicios = {
    _count: EjerciciosCountAggregateOutputType | null
    _min: EjerciciosMinAggregateOutputType | null
    _max: EjerciciosMaxAggregateOutputType | null
  }

  export type EjerciciosMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    instrucciones: string | null
    zonaCuerpo: string | null
    nivel: string | null
    creadoPorId: string | null
    creadoEl: Date | null
  }

  export type EjerciciosMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    instrucciones: string | null
    zonaCuerpo: string | null
    nivel: string | null
    creadoPorId: string | null
    creadoEl: Date | null
  }

  export type EjerciciosCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    instrucciones: number
    zonaCuerpo: number
    nivel: number
    creadoPorId: number
    creadoEl: number
    _all: number
  }


  export type EjerciciosMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    instrucciones?: true
    zonaCuerpo?: true
    nivel?: true
    creadoPorId?: true
    creadoEl?: true
  }

  export type EjerciciosMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    instrucciones?: true
    zonaCuerpo?: true
    nivel?: true
    creadoPorId?: true
    creadoEl?: true
  }

  export type EjerciciosCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    instrucciones?: true
    zonaCuerpo?: true
    nivel?: true
    creadoPorId?: true
    creadoEl?: true
    _all?: true
  }

  export type EjerciciosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ejercicios to aggregate.
     */
    where?: ejerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ejercicios to fetch.
     */
    orderBy?: ejerciciosOrderByWithRelationInput | ejerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ejerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ejercicios
    **/
    _count?: true | EjerciciosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EjerciciosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EjerciciosMaxAggregateInputType
  }

  export type GetEjerciciosAggregateType<T extends EjerciciosAggregateArgs> = {
        [P in keyof T & keyof AggregateEjercicios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEjercicios[P]>
      : GetScalarType<T[P], AggregateEjercicios[P]>
  }




  export type ejerciciosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ejerciciosWhereInput
    orderBy?: ejerciciosOrderByWithAggregationInput | ejerciciosOrderByWithAggregationInput[]
    by: EjerciciosScalarFieldEnum[] | EjerciciosScalarFieldEnum
    having?: ejerciciosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EjerciciosCountAggregateInputType | true
    _min?: EjerciciosMinAggregateInputType
    _max?: EjerciciosMaxAggregateInputType
  }

  export type EjerciciosGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string
    instrucciones: string | null
    zonaCuerpo: string
    nivel: string
    creadoPorId: string
    creadoEl: Date
    _count: EjerciciosCountAggregateOutputType | null
    _min: EjerciciosMinAggregateOutputType | null
    _max: EjerciciosMaxAggregateOutputType | null
  }

  type GetEjerciciosGroupByPayload<T extends ejerciciosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EjerciciosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EjerciciosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EjerciciosGroupByOutputType[P]>
            : GetScalarType<T[P], EjerciciosGroupByOutputType[P]>
        }
      >
    >


  export type ejerciciosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    instrucciones?: boolean
    zonaCuerpo?: boolean
    nivel?: boolean
    creadoPorId?: boolean
    creadoEl?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    ejercicios_asignados?: boolean | ejercicios$ejercicios_asignadosArgs<ExtArgs>
    _count?: boolean | EjerciciosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ejercicios"]>

  export type ejerciciosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    instrucciones?: boolean
    zonaCuerpo?: boolean
    nivel?: boolean
    creadoPorId?: boolean
    creadoEl?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ejercicios"]>

  export type ejerciciosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    instrucciones?: boolean
    zonaCuerpo?: boolean
    nivel?: boolean
    creadoPorId?: boolean
    creadoEl?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ejercicios"]>

  export type ejerciciosSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    instrucciones?: boolean
    zonaCuerpo?: boolean
    nivel?: boolean
    creadoPorId?: boolean
    creadoEl?: boolean
  }

  export type ejerciciosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "instrucciones" | "zonaCuerpo" | "nivel" | "creadoPorId" | "creadoEl", ExtArgs["result"]["ejercicios"]>
  export type ejerciciosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    ejercicios_asignados?: boolean | ejercicios$ejercicios_asignadosArgs<ExtArgs>
    _count?: boolean | EjerciciosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ejerciciosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type ejerciciosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $ejerciciosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ejercicios"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      ejercicios_asignados: Prisma.$ejercicios_asignadosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string
      instrucciones: string | null
      zonaCuerpo: string
      nivel: string
      creadoPorId: string
      creadoEl: Date
    }, ExtArgs["result"]["ejercicios"]>
    composites: {}
  }

  type ejerciciosGetPayload<S extends boolean | null | undefined | ejerciciosDefaultArgs> = $Result.GetResult<Prisma.$ejerciciosPayload, S>

  type ejerciciosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ejerciciosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EjerciciosCountAggregateInputType | true
    }

  export interface ejerciciosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ejercicios'], meta: { name: 'ejercicios' } }
    /**
     * Find zero or one Ejercicios that matches the filter.
     * @param {ejerciciosFindUniqueArgs} args - Arguments to find a Ejercicios
     * @example
     * // Get one Ejercicios
     * const ejercicios = await prisma.ejercicios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ejerciciosFindUniqueArgs>(args: SelectSubset<T, ejerciciosFindUniqueArgs<ExtArgs>>): Prisma__ejerciciosClient<$Result.GetResult<Prisma.$ejerciciosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ejercicios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ejerciciosFindUniqueOrThrowArgs} args - Arguments to find a Ejercicios
     * @example
     * // Get one Ejercicios
     * const ejercicios = await prisma.ejercicios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ejerciciosFindUniqueOrThrowArgs>(args: SelectSubset<T, ejerciciosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ejerciciosClient<$Result.GetResult<Prisma.$ejerciciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ejercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ejerciciosFindFirstArgs} args - Arguments to find a Ejercicios
     * @example
     * // Get one Ejercicios
     * const ejercicios = await prisma.ejercicios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ejerciciosFindFirstArgs>(args?: SelectSubset<T, ejerciciosFindFirstArgs<ExtArgs>>): Prisma__ejerciciosClient<$Result.GetResult<Prisma.$ejerciciosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ejercicios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ejerciciosFindFirstOrThrowArgs} args - Arguments to find a Ejercicios
     * @example
     * // Get one Ejercicios
     * const ejercicios = await prisma.ejercicios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ejerciciosFindFirstOrThrowArgs>(args?: SelectSubset<T, ejerciciosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ejerciciosClient<$Result.GetResult<Prisma.$ejerciciosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ejercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ejerciciosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ejercicios
     * const ejercicios = await prisma.ejercicios.findMany()
     * 
     * // Get first 10 Ejercicios
     * const ejercicios = await prisma.ejercicios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ejerciciosWithIdOnly = await prisma.ejercicios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ejerciciosFindManyArgs>(args?: SelectSubset<T, ejerciciosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ejerciciosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ejercicios.
     * @param {ejerciciosCreateArgs} args - Arguments to create a Ejercicios.
     * @example
     * // Create one Ejercicios
     * const Ejercicios = await prisma.ejercicios.create({
     *   data: {
     *     // ... data to create a Ejercicios
     *   }
     * })
     * 
     */
    create<T extends ejerciciosCreateArgs>(args: SelectSubset<T, ejerciciosCreateArgs<ExtArgs>>): Prisma__ejerciciosClient<$Result.GetResult<Prisma.$ejerciciosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ejercicios.
     * @param {ejerciciosCreateManyArgs} args - Arguments to create many Ejercicios.
     * @example
     * // Create many Ejercicios
     * const ejercicios = await prisma.ejercicios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ejerciciosCreateManyArgs>(args?: SelectSubset<T, ejerciciosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ejercicios and returns the data saved in the database.
     * @param {ejerciciosCreateManyAndReturnArgs} args - Arguments to create many Ejercicios.
     * @example
     * // Create many Ejercicios
     * const ejercicios = await prisma.ejercicios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ejercicios and only return the `id`
     * const ejerciciosWithIdOnly = await prisma.ejercicios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ejerciciosCreateManyAndReturnArgs>(args?: SelectSubset<T, ejerciciosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ejerciciosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ejercicios.
     * @param {ejerciciosDeleteArgs} args - Arguments to delete one Ejercicios.
     * @example
     * // Delete one Ejercicios
     * const Ejercicios = await prisma.ejercicios.delete({
     *   where: {
     *     // ... filter to delete one Ejercicios
     *   }
     * })
     * 
     */
    delete<T extends ejerciciosDeleteArgs>(args: SelectSubset<T, ejerciciosDeleteArgs<ExtArgs>>): Prisma__ejerciciosClient<$Result.GetResult<Prisma.$ejerciciosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ejercicios.
     * @param {ejerciciosUpdateArgs} args - Arguments to update one Ejercicios.
     * @example
     * // Update one Ejercicios
     * const ejercicios = await prisma.ejercicios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ejerciciosUpdateArgs>(args: SelectSubset<T, ejerciciosUpdateArgs<ExtArgs>>): Prisma__ejerciciosClient<$Result.GetResult<Prisma.$ejerciciosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ejercicios.
     * @param {ejerciciosDeleteManyArgs} args - Arguments to filter Ejercicios to delete.
     * @example
     * // Delete a few Ejercicios
     * const { count } = await prisma.ejercicios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ejerciciosDeleteManyArgs>(args?: SelectSubset<T, ejerciciosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ejerciciosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ejercicios
     * const ejercicios = await prisma.ejercicios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ejerciciosUpdateManyArgs>(args: SelectSubset<T, ejerciciosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ejercicios and returns the data updated in the database.
     * @param {ejerciciosUpdateManyAndReturnArgs} args - Arguments to update many Ejercicios.
     * @example
     * // Update many Ejercicios
     * const ejercicios = await prisma.ejercicios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ejercicios and only return the `id`
     * const ejerciciosWithIdOnly = await prisma.ejercicios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ejerciciosUpdateManyAndReturnArgs>(args: SelectSubset<T, ejerciciosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ejerciciosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ejercicios.
     * @param {ejerciciosUpsertArgs} args - Arguments to update or create a Ejercicios.
     * @example
     * // Update or create a Ejercicios
     * const ejercicios = await prisma.ejercicios.upsert({
     *   create: {
     *     // ... data to create a Ejercicios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ejercicios we want to update
     *   }
     * })
     */
    upsert<T extends ejerciciosUpsertArgs>(args: SelectSubset<T, ejerciciosUpsertArgs<ExtArgs>>): Prisma__ejerciciosClient<$Result.GetResult<Prisma.$ejerciciosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ejerciciosCountArgs} args - Arguments to filter Ejercicios to count.
     * @example
     * // Count the number of Ejercicios
     * const count = await prisma.ejercicios.count({
     *   where: {
     *     // ... the filter for the Ejercicios we want to count
     *   }
     * })
    **/
    count<T extends ejerciciosCountArgs>(
      args?: Subset<T, ejerciciosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EjerciciosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjerciciosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EjerciciosAggregateArgs>(args: Subset<T, EjerciciosAggregateArgs>): Prisma.PrismaPromise<GetEjerciciosAggregateType<T>>

    /**
     * Group by Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ejerciciosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ejerciciosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ejerciciosGroupByArgs['orderBy'] }
        : { orderBy?: ejerciciosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ejerciciosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEjerciciosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ejercicios model
   */
  readonly fields: ejerciciosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ejercicios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ejerciciosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ejercicios_asignados<T extends ejercicios$ejercicios_asignadosArgs<ExtArgs> = {}>(args?: Subset<T, ejercicios$ejercicios_asignadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ejercicios_asignadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ejercicios model
   */
  interface ejerciciosFieldRefs {
    readonly id: FieldRef<"ejercicios", 'String'>
    readonly nombre: FieldRef<"ejercicios", 'String'>
    readonly descripcion: FieldRef<"ejercicios", 'String'>
    readonly instrucciones: FieldRef<"ejercicios", 'String'>
    readonly zonaCuerpo: FieldRef<"ejercicios", 'String'>
    readonly nivel: FieldRef<"ejercicios", 'String'>
    readonly creadoPorId: FieldRef<"ejercicios", 'String'>
    readonly creadoEl: FieldRef<"ejercicios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ejercicios findUnique
   */
  export type ejerciciosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios
     */
    select?: ejerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios
     */
    omit?: ejerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejerciciosInclude<ExtArgs> | null
    /**
     * Filter, which ejercicios to fetch.
     */
    where: ejerciciosWhereUniqueInput
  }

  /**
   * ejercicios findUniqueOrThrow
   */
  export type ejerciciosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios
     */
    select?: ejerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios
     */
    omit?: ejerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejerciciosInclude<ExtArgs> | null
    /**
     * Filter, which ejercicios to fetch.
     */
    where: ejerciciosWhereUniqueInput
  }

  /**
   * ejercicios findFirst
   */
  export type ejerciciosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios
     */
    select?: ejerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios
     */
    omit?: ejerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejerciciosInclude<ExtArgs> | null
    /**
     * Filter, which ejercicios to fetch.
     */
    where?: ejerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ejercicios to fetch.
     */
    orderBy?: ejerciciosOrderByWithRelationInput | ejerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ejercicios.
     */
    cursor?: ejerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ejercicios.
     */
    distinct?: EjerciciosScalarFieldEnum | EjerciciosScalarFieldEnum[]
  }

  /**
   * ejercicios findFirstOrThrow
   */
  export type ejerciciosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios
     */
    select?: ejerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios
     */
    omit?: ejerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejerciciosInclude<ExtArgs> | null
    /**
     * Filter, which ejercicios to fetch.
     */
    where?: ejerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ejercicios to fetch.
     */
    orderBy?: ejerciciosOrderByWithRelationInput | ejerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ejercicios.
     */
    cursor?: ejerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ejercicios.
     */
    distinct?: EjerciciosScalarFieldEnum | EjerciciosScalarFieldEnum[]
  }

  /**
   * ejercicios findMany
   */
  export type ejerciciosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios
     */
    select?: ejerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios
     */
    omit?: ejerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejerciciosInclude<ExtArgs> | null
    /**
     * Filter, which ejercicios to fetch.
     */
    where?: ejerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ejercicios to fetch.
     */
    orderBy?: ejerciciosOrderByWithRelationInput | ejerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ejercicios.
     */
    cursor?: ejerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ejercicios.
     */
    distinct?: EjerciciosScalarFieldEnum | EjerciciosScalarFieldEnum[]
  }

  /**
   * ejercicios create
   */
  export type ejerciciosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios
     */
    select?: ejerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios
     */
    omit?: ejerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejerciciosInclude<ExtArgs> | null
    /**
     * The data needed to create a ejercicios.
     */
    data: XOR<ejerciciosCreateInput, ejerciciosUncheckedCreateInput>
  }

  /**
   * ejercicios createMany
   */
  export type ejerciciosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ejercicios.
     */
    data: ejerciciosCreateManyInput | ejerciciosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ejercicios createManyAndReturn
   */
  export type ejerciciosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios
     */
    select?: ejerciciosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios
     */
    omit?: ejerciciosOmit<ExtArgs> | null
    /**
     * The data used to create many ejercicios.
     */
    data: ejerciciosCreateManyInput | ejerciciosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejerciciosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ejercicios update
   */
  export type ejerciciosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios
     */
    select?: ejerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios
     */
    omit?: ejerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejerciciosInclude<ExtArgs> | null
    /**
     * The data needed to update a ejercicios.
     */
    data: XOR<ejerciciosUpdateInput, ejerciciosUncheckedUpdateInput>
    /**
     * Choose, which ejercicios to update.
     */
    where: ejerciciosWhereUniqueInput
  }

  /**
   * ejercicios updateMany
   */
  export type ejerciciosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ejercicios.
     */
    data: XOR<ejerciciosUpdateManyMutationInput, ejerciciosUncheckedUpdateManyInput>
    /**
     * Filter which ejercicios to update
     */
    where?: ejerciciosWhereInput
    /**
     * Limit how many ejercicios to update.
     */
    limit?: number
  }

  /**
   * ejercicios updateManyAndReturn
   */
  export type ejerciciosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios
     */
    select?: ejerciciosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios
     */
    omit?: ejerciciosOmit<ExtArgs> | null
    /**
     * The data used to update ejercicios.
     */
    data: XOR<ejerciciosUpdateManyMutationInput, ejerciciosUncheckedUpdateManyInput>
    /**
     * Filter which ejercicios to update
     */
    where?: ejerciciosWhereInput
    /**
     * Limit how many ejercicios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejerciciosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ejercicios upsert
   */
  export type ejerciciosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios
     */
    select?: ejerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios
     */
    omit?: ejerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejerciciosInclude<ExtArgs> | null
    /**
     * The filter to search for the ejercicios to update in case it exists.
     */
    where: ejerciciosWhereUniqueInput
    /**
     * In case the ejercicios found by the `where` argument doesn't exist, create a new ejercicios with this data.
     */
    create: XOR<ejerciciosCreateInput, ejerciciosUncheckedCreateInput>
    /**
     * In case the ejercicios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ejerciciosUpdateInput, ejerciciosUncheckedUpdateInput>
  }

  /**
   * ejercicios delete
   */
  export type ejerciciosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios
     */
    select?: ejerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios
     */
    omit?: ejerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejerciciosInclude<ExtArgs> | null
    /**
     * Filter which ejercicios to delete.
     */
    where: ejerciciosWhereUniqueInput
  }

  /**
   * ejercicios deleteMany
   */
  export type ejerciciosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ejercicios to delete
     */
    where?: ejerciciosWhereInput
    /**
     * Limit how many ejercicios to delete.
     */
    limit?: number
  }

  /**
   * ejercicios.ejercicios_asignados
   */
  export type ejercicios$ejercicios_asignadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios_asignados
     */
    select?: ejercicios_asignadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios_asignados
     */
    omit?: ejercicios_asignadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejercicios_asignadosInclude<ExtArgs> | null
    where?: ejercicios_asignadosWhereInput
    orderBy?: ejercicios_asignadosOrderByWithRelationInput | ejercicios_asignadosOrderByWithRelationInput[]
    cursor?: ejercicios_asignadosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ejercicios_asignadosScalarFieldEnum | Ejercicios_asignadosScalarFieldEnum[]
  }

  /**
   * ejercicios without action
   */
  export type ejerciciosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios
     */
    select?: ejerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios
     */
    omit?: ejerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejerciciosInclude<ExtArgs> | null
  }


  /**
   * Model ejercicios_asignados
   */

  export type AggregateEjercicios_asignados = {
    _count: Ejercicios_asignadosCountAggregateOutputType | null
    _avg: Ejercicios_asignadosAvgAggregateOutputType | null
    _sum: Ejercicios_asignadosSumAggregateOutputType | null
    _min: Ejercicios_asignadosMinAggregateOutputType | null
    _max: Ejercicios_asignadosMaxAggregateOutputType | null
  }

  export type Ejercicios_asignadosAvgAggregateOutputType = {
    series: number | null
    repeticiones: number | null
    duracionMinutos: number | null
  }

  export type Ejercicios_asignadosSumAggregateOutputType = {
    series: number | null
    repeticiones: number | null
    duracionMinutos: number | null
  }

  export type Ejercicios_asignadosMinAggregateOutputType = {
    id: string | null
    pacienteId: string | null
    ejercicioId: string | null
    kinesiologoId: string | null
    diagnosticoId: string | null
    objetivo: string | null
    series: number | null
    repeticiones: number | null
    frecuencia: string | null
    duracionMinutos: number | null
    estado: $Enums.AsignacionEstado | null
    asignadaEl: Date | null
  }

  export type Ejercicios_asignadosMaxAggregateOutputType = {
    id: string | null
    pacienteId: string | null
    ejercicioId: string | null
    kinesiologoId: string | null
    diagnosticoId: string | null
    objetivo: string | null
    series: number | null
    repeticiones: number | null
    frecuencia: string | null
    duracionMinutos: number | null
    estado: $Enums.AsignacionEstado | null
    asignadaEl: Date | null
  }

  export type Ejercicios_asignadosCountAggregateOutputType = {
    id: number
    pacienteId: number
    ejercicioId: number
    kinesiologoId: number
    diagnosticoId: number
    objetivo: number
    series: number
    repeticiones: number
    frecuencia: number
    duracionMinutos: number
    estado: number
    asignadaEl: number
    _all: number
  }


  export type Ejercicios_asignadosAvgAggregateInputType = {
    series?: true
    repeticiones?: true
    duracionMinutos?: true
  }

  export type Ejercicios_asignadosSumAggregateInputType = {
    series?: true
    repeticiones?: true
    duracionMinutos?: true
  }

  export type Ejercicios_asignadosMinAggregateInputType = {
    id?: true
    pacienteId?: true
    ejercicioId?: true
    kinesiologoId?: true
    diagnosticoId?: true
    objetivo?: true
    series?: true
    repeticiones?: true
    frecuencia?: true
    duracionMinutos?: true
    estado?: true
    asignadaEl?: true
  }

  export type Ejercicios_asignadosMaxAggregateInputType = {
    id?: true
    pacienteId?: true
    ejercicioId?: true
    kinesiologoId?: true
    diagnosticoId?: true
    objetivo?: true
    series?: true
    repeticiones?: true
    frecuencia?: true
    duracionMinutos?: true
    estado?: true
    asignadaEl?: true
  }

  export type Ejercicios_asignadosCountAggregateInputType = {
    id?: true
    pacienteId?: true
    ejercicioId?: true
    kinesiologoId?: true
    diagnosticoId?: true
    objetivo?: true
    series?: true
    repeticiones?: true
    frecuencia?: true
    duracionMinutos?: true
    estado?: true
    asignadaEl?: true
    _all?: true
  }

  export type Ejercicios_asignadosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ejercicios_asignados to aggregate.
     */
    where?: ejercicios_asignadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ejercicios_asignados to fetch.
     */
    orderBy?: ejercicios_asignadosOrderByWithRelationInput | ejercicios_asignadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ejercicios_asignadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ejercicios_asignados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ejercicios_asignados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ejercicios_asignados
    **/
    _count?: true | Ejercicios_asignadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ejercicios_asignadosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ejercicios_asignadosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ejercicios_asignadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ejercicios_asignadosMaxAggregateInputType
  }

  export type GetEjercicios_asignadosAggregateType<T extends Ejercicios_asignadosAggregateArgs> = {
        [P in keyof T & keyof AggregateEjercicios_asignados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEjercicios_asignados[P]>
      : GetScalarType<T[P], AggregateEjercicios_asignados[P]>
  }




  export type ejercicios_asignadosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ejercicios_asignadosWhereInput
    orderBy?: ejercicios_asignadosOrderByWithAggregationInput | ejercicios_asignadosOrderByWithAggregationInput[]
    by: Ejercicios_asignadosScalarFieldEnum[] | Ejercicios_asignadosScalarFieldEnum
    having?: ejercicios_asignadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ejercicios_asignadosCountAggregateInputType | true
    _avg?: Ejercicios_asignadosAvgAggregateInputType
    _sum?: Ejercicios_asignadosSumAggregateInputType
    _min?: Ejercicios_asignadosMinAggregateInputType
    _max?: Ejercicios_asignadosMaxAggregateInputType
  }

  export type Ejercicios_asignadosGroupByOutputType = {
    id: string
    pacienteId: string
    ejercicioId: string
    kinesiologoId: string
    diagnosticoId: string | null
    objetivo: string | null
    series: number
    repeticiones: number
    frecuencia: string | null
    duracionMinutos: number | null
    estado: $Enums.AsignacionEstado
    asignadaEl: Date
    _count: Ejercicios_asignadosCountAggregateOutputType | null
    _avg: Ejercicios_asignadosAvgAggregateOutputType | null
    _sum: Ejercicios_asignadosSumAggregateOutputType | null
    _min: Ejercicios_asignadosMinAggregateOutputType | null
    _max: Ejercicios_asignadosMaxAggregateOutputType | null
  }

  type GetEjercicios_asignadosGroupByPayload<T extends ejercicios_asignadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ejercicios_asignadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ejercicios_asignadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ejercicios_asignadosGroupByOutputType[P]>
            : GetScalarType<T[P], Ejercicios_asignadosGroupByOutputType[P]>
        }
      >
    >


  export type ejercicios_asignadosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    ejercicioId?: boolean
    kinesiologoId?: boolean
    diagnosticoId?: boolean
    objetivo?: boolean
    series?: boolean
    repeticiones?: boolean
    frecuencia?: boolean
    duracionMinutos?: boolean
    estado?: boolean
    asignadaEl?: boolean
    diagnosticos?: boolean | ejercicios_asignados$diagnosticosArgs<ExtArgs>
    ejercicios?: boolean | ejerciciosDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    progresos?: boolean | ejercicios_asignados$progresosArgs<ExtArgs>
    _count?: boolean | Ejercicios_asignadosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ejercicios_asignados"]>

  export type ejercicios_asignadosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    ejercicioId?: boolean
    kinesiologoId?: boolean
    diagnosticoId?: boolean
    objetivo?: boolean
    series?: boolean
    repeticiones?: boolean
    frecuencia?: boolean
    duracionMinutos?: boolean
    estado?: boolean
    asignadaEl?: boolean
    diagnosticos?: boolean | ejercicios_asignados$diagnosticosArgs<ExtArgs>
    ejercicios?: boolean | ejerciciosDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ejercicios_asignados"]>

  export type ejercicios_asignadosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    ejercicioId?: boolean
    kinesiologoId?: boolean
    diagnosticoId?: boolean
    objetivo?: boolean
    series?: boolean
    repeticiones?: boolean
    frecuencia?: boolean
    duracionMinutos?: boolean
    estado?: boolean
    asignadaEl?: boolean
    diagnosticos?: boolean | ejercicios_asignados$diagnosticosArgs<ExtArgs>
    ejercicios?: boolean | ejerciciosDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ejercicios_asignados"]>

  export type ejercicios_asignadosSelectScalar = {
    id?: boolean
    pacienteId?: boolean
    ejercicioId?: boolean
    kinesiologoId?: boolean
    diagnosticoId?: boolean
    objetivo?: boolean
    series?: boolean
    repeticiones?: boolean
    frecuencia?: boolean
    duracionMinutos?: boolean
    estado?: boolean
    asignadaEl?: boolean
  }

  export type ejercicios_asignadosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pacienteId" | "ejercicioId" | "kinesiologoId" | "diagnosticoId" | "objetivo" | "series" | "repeticiones" | "frecuencia" | "duracionMinutos" | "estado" | "asignadaEl", ExtArgs["result"]["ejercicios_asignados"]>
  export type ejercicios_asignadosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosticos?: boolean | ejercicios_asignados$diagnosticosArgs<ExtArgs>
    ejercicios?: boolean | ejerciciosDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    progresos?: boolean | ejercicios_asignados$progresosArgs<ExtArgs>
    _count?: boolean | Ejercicios_asignadosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ejercicios_asignadosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosticos?: boolean | ejercicios_asignados$diagnosticosArgs<ExtArgs>
    ejercicios?: boolean | ejerciciosDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }
  export type ejercicios_asignadosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosticos?: boolean | ejercicios_asignados$diagnosticosArgs<ExtArgs>
    ejercicios?: boolean | ejerciciosDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }

  export type $ejercicios_asignadosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ejercicios_asignados"
    objects: {
      diagnosticos: Prisma.$diagnosticosPayload<ExtArgs> | null
      ejercicios: Prisma.$ejerciciosPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
      pacientes: Prisma.$pacientesPayload<ExtArgs>
      progresos: Prisma.$progresosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pacienteId: string
      ejercicioId: string
      kinesiologoId: string
      diagnosticoId: string | null
      objetivo: string | null
      series: number
      repeticiones: number
      frecuencia: string | null
      duracionMinutos: number | null
      estado: $Enums.AsignacionEstado
      asignadaEl: Date
    }, ExtArgs["result"]["ejercicios_asignados"]>
    composites: {}
  }

  type ejercicios_asignadosGetPayload<S extends boolean | null | undefined | ejercicios_asignadosDefaultArgs> = $Result.GetResult<Prisma.$ejercicios_asignadosPayload, S>

  type ejercicios_asignadosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ejercicios_asignadosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ejercicios_asignadosCountAggregateInputType | true
    }

  export interface ejercicios_asignadosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ejercicios_asignados'], meta: { name: 'ejercicios_asignados' } }
    /**
     * Find zero or one Ejercicios_asignados that matches the filter.
     * @param {ejercicios_asignadosFindUniqueArgs} args - Arguments to find a Ejercicios_asignados
     * @example
     * // Get one Ejercicios_asignados
     * const ejercicios_asignados = await prisma.ejercicios_asignados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ejercicios_asignadosFindUniqueArgs>(args: SelectSubset<T, ejercicios_asignadosFindUniqueArgs<ExtArgs>>): Prisma__ejercicios_asignadosClient<$Result.GetResult<Prisma.$ejercicios_asignadosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ejercicios_asignados that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ejercicios_asignadosFindUniqueOrThrowArgs} args - Arguments to find a Ejercicios_asignados
     * @example
     * // Get one Ejercicios_asignados
     * const ejercicios_asignados = await prisma.ejercicios_asignados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ejercicios_asignadosFindUniqueOrThrowArgs>(args: SelectSubset<T, ejercicios_asignadosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ejercicios_asignadosClient<$Result.GetResult<Prisma.$ejercicios_asignadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ejercicios_asignados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ejercicios_asignadosFindFirstArgs} args - Arguments to find a Ejercicios_asignados
     * @example
     * // Get one Ejercicios_asignados
     * const ejercicios_asignados = await prisma.ejercicios_asignados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ejercicios_asignadosFindFirstArgs>(args?: SelectSubset<T, ejercicios_asignadosFindFirstArgs<ExtArgs>>): Prisma__ejercicios_asignadosClient<$Result.GetResult<Prisma.$ejercicios_asignadosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ejercicios_asignados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ejercicios_asignadosFindFirstOrThrowArgs} args - Arguments to find a Ejercicios_asignados
     * @example
     * // Get one Ejercicios_asignados
     * const ejercicios_asignados = await prisma.ejercicios_asignados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ejercicios_asignadosFindFirstOrThrowArgs>(args?: SelectSubset<T, ejercicios_asignadosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ejercicios_asignadosClient<$Result.GetResult<Prisma.$ejercicios_asignadosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ejercicios_asignados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ejercicios_asignadosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ejercicios_asignados
     * const ejercicios_asignados = await prisma.ejercicios_asignados.findMany()
     * 
     * // Get first 10 Ejercicios_asignados
     * const ejercicios_asignados = await prisma.ejercicios_asignados.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ejercicios_asignadosWithIdOnly = await prisma.ejercicios_asignados.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ejercicios_asignadosFindManyArgs>(args?: SelectSubset<T, ejercicios_asignadosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ejercicios_asignadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ejercicios_asignados.
     * @param {ejercicios_asignadosCreateArgs} args - Arguments to create a Ejercicios_asignados.
     * @example
     * // Create one Ejercicios_asignados
     * const Ejercicios_asignados = await prisma.ejercicios_asignados.create({
     *   data: {
     *     // ... data to create a Ejercicios_asignados
     *   }
     * })
     * 
     */
    create<T extends ejercicios_asignadosCreateArgs>(args: SelectSubset<T, ejercicios_asignadosCreateArgs<ExtArgs>>): Prisma__ejercicios_asignadosClient<$Result.GetResult<Prisma.$ejercicios_asignadosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ejercicios_asignados.
     * @param {ejercicios_asignadosCreateManyArgs} args - Arguments to create many Ejercicios_asignados.
     * @example
     * // Create many Ejercicios_asignados
     * const ejercicios_asignados = await prisma.ejercicios_asignados.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ejercicios_asignadosCreateManyArgs>(args?: SelectSubset<T, ejercicios_asignadosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ejercicios_asignados and returns the data saved in the database.
     * @param {ejercicios_asignadosCreateManyAndReturnArgs} args - Arguments to create many Ejercicios_asignados.
     * @example
     * // Create many Ejercicios_asignados
     * const ejercicios_asignados = await prisma.ejercicios_asignados.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ejercicios_asignados and only return the `id`
     * const ejercicios_asignadosWithIdOnly = await prisma.ejercicios_asignados.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ejercicios_asignadosCreateManyAndReturnArgs>(args?: SelectSubset<T, ejercicios_asignadosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ejercicios_asignadosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ejercicios_asignados.
     * @param {ejercicios_asignadosDeleteArgs} args - Arguments to delete one Ejercicios_asignados.
     * @example
     * // Delete one Ejercicios_asignados
     * const Ejercicios_asignados = await prisma.ejercicios_asignados.delete({
     *   where: {
     *     // ... filter to delete one Ejercicios_asignados
     *   }
     * })
     * 
     */
    delete<T extends ejercicios_asignadosDeleteArgs>(args: SelectSubset<T, ejercicios_asignadosDeleteArgs<ExtArgs>>): Prisma__ejercicios_asignadosClient<$Result.GetResult<Prisma.$ejercicios_asignadosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ejercicios_asignados.
     * @param {ejercicios_asignadosUpdateArgs} args - Arguments to update one Ejercicios_asignados.
     * @example
     * // Update one Ejercicios_asignados
     * const ejercicios_asignados = await prisma.ejercicios_asignados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ejercicios_asignadosUpdateArgs>(args: SelectSubset<T, ejercicios_asignadosUpdateArgs<ExtArgs>>): Prisma__ejercicios_asignadosClient<$Result.GetResult<Prisma.$ejercicios_asignadosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ejercicios_asignados.
     * @param {ejercicios_asignadosDeleteManyArgs} args - Arguments to filter Ejercicios_asignados to delete.
     * @example
     * // Delete a few Ejercicios_asignados
     * const { count } = await prisma.ejercicios_asignados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ejercicios_asignadosDeleteManyArgs>(args?: SelectSubset<T, ejercicios_asignadosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ejercicios_asignados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ejercicios_asignadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ejercicios_asignados
     * const ejercicios_asignados = await prisma.ejercicios_asignados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ejercicios_asignadosUpdateManyArgs>(args: SelectSubset<T, ejercicios_asignadosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ejercicios_asignados and returns the data updated in the database.
     * @param {ejercicios_asignadosUpdateManyAndReturnArgs} args - Arguments to update many Ejercicios_asignados.
     * @example
     * // Update many Ejercicios_asignados
     * const ejercicios_asignados = await prisma.ejercicios_asignados.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ejercicios_asignados and only return the `id`
     * const ejercicios_asignadosWithIdOnly = await prisma.ejercicios_asignados.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ejercicios_asignadosUpdateManyAndReturnArgs>(args: SelectSubset<T, ejercicios_asignadosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ejercicios_asignadosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ejercicios_asignados.
     * @param {ejercicios_asignadosUpsertArgs} args - Arguments to update or create a Ejercicios_asignados.
     * @example
     * // Update or create a Ejercicios_asignados
     * const ejercicios_asignados = await prisma.ejercicios_asignados.upsert({
     *   create: {
     *     // ... data to create a Ejercicios_asignados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ejercicios_asignados we want to update
     *   }
     * })
     */
    upsert<T extends ejercicios_asignadosUpsertArgs>(args: SelectSubset<T, ejercicios_asignadosUpsertArgs<ExtArgs>>): Prisma__ejercicios_asignadosClient<$Result.GetResult<Prisma.$ejercicios_asignadosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ejercicios_asignados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ejercicios_asignadosCountArgs} args - Arguments to filter Ejercicios_asignados to count.
     * @example
     * // Count the number of Ejercicios_asignados
     * const count = await prisma.ejercicios_asignados.count({
     *   where: {
     *     // ... the filter for the Ejercicios_asignados we want to count
     *   }
     * })
    **/
    count<T extends ejercicios_asignadosCountArgs>(
      args?: Subset<T, ejercicios_asignadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ejercicios_asignadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ejercicios_asignados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ejercicios_asignadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ejercicios_asignadosAggregateArgs>(args: Subset<T, Ejercicios_asignadosAggregateArgs>): Prisma.PrismaPromise<GetEjercicios_asignadosAggregateType<T>>

    /**
     * Group by Ejercicios_asignados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ejercicios_asignadosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ejercicios_asignadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ejercicios_asignadosGroupByArgs['orderBy'] }
        : { orderBy?: ejercicios_asignadosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ejercicios_asignadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEjercicios_asignadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ejercicios_asignados model
   */
  readonly fields: ejercicios_asignadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ejercicios_asignados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ejercicios_asignadosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnosticos<T extends ejercicios_asignados$diagnosticosArgs<ExtArgs> = {}>(args?: Subset<T, ejercicios_asignados$diagnosticosArgs<ExtArgs>>): Prisma__diagnosticosClient<$Result.GetResult<Prisma.$diagnosticosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ejercicios<T extends ejerciciosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ejerciciosDefaultArgs<ExtArgs>>): Prisma__ejerciciosClient<$Result.GetResult<Prisma.$ejerciciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pacientes<T extends pacientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pacientesDefaultArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    progresos<T extends ejercicios_asignados$progresosArgs<ExtArgs> = {}>(args?: Subset<T, ejercicios_asignados$progresosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progresosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ejercicios_asignados model
   */
  interface ejercicios_asignadosFieldRefs {
    readonly id: FieldRef<"ejercicios_asignados", 'String'>
    readonly pacienteId: FieldRef<"ejercicios_asignados", 'String'>
    readonly ejercicioId: FieldRef<"ejercicios_asignados", 'String'>
    readonly kinesiologoId: FieldRef<"ejercicios_asignados", 'String'>
    readonly diagnosticoId: FieldRef<"ejercicios_asignados", 'String'>
    readonly objetivo: FieldRef<"ejercicios_asignados", 'String'>
    readonly series: FieldRef<"ejercicios_asignados", 'Int'>
    readonly repeticiones: FieldRef<"ejercicios_asignados", 'Int'>
    readonly frecuencia: FieldRef<"ejercicios_asignados", 'String'>
    readonly duracionMinutos: FieldRef<"ejercicios_asignados", 'Int'>
    readonly estado: FieldRef<"ejercicios_asignados", 'AsignacionEstado'>
    readonly asignadaEl: FieldRef<"ejercicios_asignados", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ejercicios_asignados findUnique
   */
  export type ejercicios_asignadosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios_asignados
     */
    select?: ejercicios_asignadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios_asignados
     */
    omit?: ejercicios_asignadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejercicios_asignadosInclude<ExtArgs> | null
    /**
     * Filter, which ejercicios_asignados to fetch.
     */
    where: ejercicios_asignadosWhereUniqueInput
  }

  /**
   * ejercicios_asignados findUniqueOrThrow
   */
  export type ejercicios_asignadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios_asignados
     */
    select?: ejercicios_asignadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios_asignados
     */
    omit?: ejercicios_asignadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejercicios_asignadosInclude<ExtArgs> | null
    /**
     * Filter, which ejercicios_asignados to fetch.
     */
    where: ejercicios_asignadosWhereUniqueInput
  }

  /**
   * ejercicios_asignados findFirst
   */
  export type ejercicios_asignadosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios_asignados
     */
    select?: ejercicios_asignadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios_asignados
     */
    omit?: ejercicios_asignadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejercicios_asignadosInclude<ExtArgs> | null
    /**
     * Filter, which ejercicios_asignados to fetch.
     */
    where?: ejercicios_asignadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ejercicios_asignados to fetch.
     */
    orderBy?: ejercicios_asignadosOrderByWithRelationInput | ejercicios_asignadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ejercicios_asignados.
     */
    cursor?: ejercicios_asignadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ejercicios_asignados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ejercicios_asignados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ejercicios_asignados.
     */
    distinct?: Ejercicios_asignadosScalarFieldEnum | Ejercicios_asignadosScalarFieldEnum[]
  }

  /**
   * ejercicios_asignados findFirstOrThrow
   */
  export type ejercicios_asignadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios_asignados
     */
    select?: ejercicios_asignadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios_asignados
     */
    omit?: ejercicios_asignadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejercicios_asignadosInclude<ExtArgs> | null
    /**
     * Filter, which ejercicios_asignados to fetch.
     */
    where?: ejercicios_asignadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ejercicios_asignados to fetch.
     */
    orderBy?: ejercicios_asignadosOrderByWithRelationInput | ejercicios_asignadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ejercicios_asignados.
     */
    cursor?: ejercicios_asignadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ejercicios_asignados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ejercicios_asignados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ejercicios_asignados.
     */
    distinct?: Ejercicios_asignadosScalarFieldEnum | Ejercicios_asignadosScalarFieldEnum[]
  }

  /**
   * ejercicios_asignados findMany
   */
  export type ejercicios_asignadosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios_asignados
     */
    select?: ejercicios_asignadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios_asignados
     */
    omit?: ejercicios_asignadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejercicios_asignadosInclude<ExtArgs> | null
    /**
     * Filter, which ejercicios_asignados to fetch.
     */
    where?: ejercicios_asignadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ejercicios_asignados to fetch.
     */
    orderBy?: ejercicios_asignadosOrderByWithRelationInput | ejercicios_asignadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ejercicios_asignados.
     */
    cursor?: ejercicios_asignadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ejercicios_asignados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ejercicios_asignados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ejercicios_asignados.
     */
    distinct?: Ejercicios_asignadosScalarFieldEnum | Ejercicios_asignadosScalarFieldEnum[]
  }

  /**
   * ejercicios_asignados create
   */
  export type ejercicios_asignadosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios_asignados
     */
    select?: ejercicios_asignadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios_asignados
     */
    omit?: ejercicios_asignadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejercicios_asignadosInclude<ExtArgs> | null
    /**
     * The data needed to create a ejercicios_asignados.
     */
    data: XOR<ejercicios_asignadosCreateInput, ejercicios_asignadosUncheckedCreateInput>
  }

  /**
   * ejercicios_asignados createMany
   */
  export type ejercicios_asignadosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ejercicios_asignados.
     */
    data: ejercicios_asignadosCreateManyInput | ejercicios_asignadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ejercicios_asignados createManyAndReturn
   */
  export type ejercicios_asignadosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios_asignados
     */
    select?: ejercicios_asignadosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios_asignados
     */
    omit?: ejercicios_asignadosOmit<ExtArgs> | null
    /**
     * The data used to create many ejercicios_asignados.
     */
    data: ejercicios_asignadosCreateManyInput | ejercicios_asignadosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejercicios_asignadosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ejercicios_asignados update
   */
  export type ejercicios_asignadosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios_asignados
     */
    select?: ejercicios_asignadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios_asignados
     */
    omit?: ejercicios_asignadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejercicios_asignadosInclude<ExtArgs> | null
    /**
     * The data needed to update a ejercicios_asignados.
     */
    data: XOR<ejercicios_asignadosUpdateInput, ejercicios_asignadosUncheckedUpdateInput>
    /**
     * Choose, which ejercicios_asignados to update.
     */
    where: ejercicios_asignadosWhereUniqueInput
  }

  /**
   * ejercicios_asignados updateMany
   */
  export type ejercicios_asignadosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ejercicios_asignados.
     */
    data: XOR<ejercicios_asignadosUpdateManyMutationInput, ejercicios_asignadosUncheckedUpdateManyInput>
    /**
     * Filter which ejercicios_asignados to update
     */
    where?: ejercicios_asignadosWhereInput
    /**
     * Limit how many ejercicios_asignados to update.
     */
    limit?: number
  }

  /**
   * ejercicios_asignados updateManyAndReturn
   */
  export type ejercicios_asignadosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios_asignados
     */
    select?: ejercicios_asignadosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios_asignados
     */
    omit?: ejercicios_asignadosOmit<ExtArgs> | null
    /**
     * The data used to update ejercicios_asignados.
     */
    data: XOR<ejercicios_asignadosUpdateManyMutationInput, ejercicios_asignadosUncheckedUpdateManyInput>
    /**
     * Filter which ejercicios_asignados to update
     */
    where?: ejercicios_asignadosWhereInput
    /**
     * Limit how many ejercicios_asignados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejercicios_asignadosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ejercicios_asignados upsert
   */
  export type ejercicios_asignadosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios_asignados
     */
    select?: ejercicios_asignadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios_asignados
     */
    omit?: ejercicios_asignadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejercicios_asignadosInclude<ExtArgs> | null
    /**
     * The filter to search for the ejercicios_asignados to update in case it exists.
     */
    where: ejercicios_asignadosWhereUniqueInput
    /**
     * In case the ejercicios_asignados found by the `where` argument doesn't exist, create a new ejercicios_asignados with this data.
     */
    create: XOR<ejercicios_asignadosCreateInput, ejercicios_asignadosUncheckedCreateInput>
    /**
     * In case the ejercicios_asignados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ejercicios_asignadosUpdateInput, ejercicios_asignadosUncheckedUpdateInput>
  }

  /**
   * ejercicios_asignados delete
   */
  export type ejercicios_asignadosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios_asignados
     */
    select?: ejercicios_asignadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios_asignados
     */
    omit?: ejercicios_asignadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejercicios_asignadosInclude<ExtArgs> | null
    /**
     * Filter which ejercicios_asignados to delete.
     */
    where: ejercicios_asignadosWhereUniqueInput
  }

  /**
   * ejercicios_asignados deleteMany
   */
  export type ejercicios_asignadosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ejercicios_asignados to delete
     */
    where?: ejercicios_asignadosWhereInput
    /**
     * Limit how many ejercicios_asignados to delete.
     */
    limit?: number
  }

  /**
   * ejercicios_asignados.diagnosticos
   */
  export type ejercicios_asignados$diagnosticosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosticos
     */
    select?: diagnosticosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosticos
     */
    omit?: diagnosticosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticosInclude<ExtArgs> | null
    where?: diagnosticosWhereInput
  }

  /**
   * ejercicios_asignados.progresos
   */
  export type ejercicios_asignados$progresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progresos
     */
    select?: progresosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progresos
     */
    omit?: progresosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresosInclude<ExtArgs> | null
    where?: progresosWhereInput
    orderBy?: progresosOrderByWithRelationInput | progresosOrderByWithRelationInput[]
    cursor?: progresosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgresosScalarFieldEnum | ProgresosScalarFieldEnum[]
  }

  /**
   * ejercicios_asignados without action
   */
  export type ejercicios_asignadosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios_asignados
     */
    select?: ejercicios_asignadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios_asignados
     */
    omit?: ejercicios_asignadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejercicios_asignadosInclude<ExtArgs> | null
  }


  /**
   * Model pacientes
   */

  export type AggregatePacientes = {
    _count: PacientesCountAggregateOutputType | null
    _min: PacientesMinAggregateOutputType | null
    _max: PacientesMaxAggregateOutputType | null
  }

  export type PacientesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    kinesiologoId: string | null
    dni: string | null
    fechaNacimiento: Date | null
    telefono: string | null
    recibeRecordatorios: boolean | null
    domicilio: string | null
    obraSocial: string | null
    createdAt: Date | null
    email: string | null
    nombre: string | null
  }

  export type PacientesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    kinesiologoId: string | null
    dni: string | null
    fechaNacimiento: Date | null
    telefono: string | null
    recibeRecordatorios: boolean | null
    domicilio: string | null
    obraSocial: string | null
    createdAt: Date | null
    email: string | null
    nombre: string | null
  }

  export type PacientesCountAggregateOutputType = {
    id: number
    userId: number
    kinesiologoId: number
    dni: number
    fechaNacimiento: number
    telefono: number
    recibeRecordatorios: number
    domicilio: number
    obraSocial: number
    createdAt: number
    email: number
    nombre: number
    _all: number
  }


  export type PacientesMinAggregateInputType = {
    id?: true
    userId?: true
    kinesiologoId?: true
    dni?: true
    fechaNacimiento?: true
    telefono?: true
    recibeRecordatorios?: true
    domicilio?: true
    obraSocial?: true
    createdAt?: true
    email?: true
    nombre?: true
  }

  export type PacientesMaxAggregateInputType = {
    id?: true
    userId?: true
    kinesiologoId?: true
    dni?: true
    fechaNacimiento?: true
    telefono?: true
    recibeRecordatorios?: true
    domicilio?: true
    obraSocial?: true
    createdAt?: true
    email?: true
    nombre?: true
  }

  export type PacientesCountAggregateInputType = {
    id?: true
    userId?: true
    kinesiologoId?: true
    dni?: true
    fechaNacimiento?: true
    telefono?: true
    recibeRecordatorios?: true
    domicilio?: true
    obraSocial?: true
    createdAt?: true
    email?: true
    nombre?: true
    _all?: true
  }

  export type PacientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pacientes to aggregate.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pacientes
    **/
    _count?: true | PacientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacientesMaxAggregateInputType
  }

  export type GetPacientesAggregateType<T extends PacientesAggregateArgs> = {
        [P in keyof T & keyof AggregatePacientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePacientes[P]>
      : GetScalarType<T[P], AggregatePacientes[P]>
  }




  export type pacientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pacientesWhereInput
    orderBy?: pacientesOrderByWithAggregationInput | pacientesOrderByWithAggregationInput[]
    by: PacientesScalarFieldEnum[] | PacientesScalarFieldEnum
    having?: pacientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacientesCountAggregateInputType | true
    _min?: PacientesMinAggregateInputType
    _max?: PacientesMaxAggregateInputType
  }

  export type PacientesGroupByOutputType = {
    id: string
    userId: string | null
    kinesiologoId: string | null
    dni: string
    fechaNacimiento: Date | null
    telefono: string | null
    recibeRecordatorios: boolean
    domicilio: string | null
    obraSocial: string | null
    createdAt: Date
    email: string | null
    nombre: string | null
    _count: PacientesCountAggregateOutputType | null
    _min: PacientesMinAggregateOutputType | null
    _max: PacientesMaxAggregateOutputType | null
  }

  type GetPacientesGroupByPayload<T extends pacientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacientesGroupByOutputType[P]>
            : GetScalarType<T[P], PacientesGroupByOutputType[P]>
        }
      >
    >


  export type pacientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kinesiologoId?: boolean
    dni?: boolean
    fechaNacimiento?: boolean
    telefono?: boolean
    recibeRecordatorios?: boolean
    domicilio?: boolean
    obraSocial?: boolean
    createdAt?: boolean
    email?: boolean
    nombre?: boolean
    diagnosticos?: boolean | pacientes$diagnosticosArgs<ExtArgs>
    ejercicios_asignados?: boolean | pacientes$ejercicios_asignadosArgs<ExtArgs>
    users_pacientes_kinesiologoIdTousers?: boolean | pacientes$users_pacientes_kinesiologoIdTousersArgs<ExtArgs>
    users_pacientes_userIdTousers?: boolean | pacientes$users_pacientes_userIdTousersArgs<ExtArgs>
    progresos?: boolean | pacientes$progresosArgs<ExtArgs>
    turnos?: boolean | pacientes$turnosArgs<ExtArgs>
    _count?: boolean | PacientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacientes"]>

  export type pacientesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kinesiologoId?: boolean
    dni?: boolean
    fechaNacimiento?: boolean
    telefono?: boolean
    recibeRecordatorios?: boolean
    domicilio?: boolean
    obraSocial?: boolean
    createdAt?: boolean
    email?: boolean
    nombre?: boolean
    users_pacientes_kinesiologoIdTousers?: boolean | pacientes$users_pacientes_kinesiologoIdTousersArgs<ExtArgs>
    users_pacientes_userIdTousers?: boolean | pacientes$users_pacientes_userIdTousersArgs<ExtArgs>
  }, ExtArgs["result"]["pacientes"]>

  export type pacientesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kinesiologoId?: boolean
    dni?: boolean
    fechaNacimiento?: boolean
    telefono?: boolean
    recibeRecordatorios?: boolean
    domicilio?: boolean
    obraSocial?: boolean
    createdAt?: boolean
    email?: boolean
    nombre?: boolean
    users_pacientes_kinesiologoIdTousers?: boolean | pacientes$users_pacientes_kinesiologoIdTousersArgs<ExtArgs>
    users_pacientes_userIdTousers?: boolean | pacientes$users_pacientes_userIdTousersArgs<ExtArgs>
  }, ExtArgs["result"]["pacientes"]>

  export type pacientesSelectScalar = {
    id?: boolean
    userId?: boolean
    kinesiologoId?: boolean
    dni?: boolean
    fechaNacimiento?: boolean
    telefono?: boolean
    recibeRecordatorios?: boolean
    domicilio?: boolean
    obraSocial?: boolean
    createdAt?: boolean
    email?: boolean
    nombre?: boolean
  }

  export type pacientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "kinesiologoId" | "dni" | "fechaNacimiento" | "telefono" | "recibeRecordatorios" | "domicilio" | "obraSocial" | "createdAt" | "email" | "nombre", ExtArgs["result"]["pacientes"]>
  export type pacientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosticos?: boolean | pacientes$diagnosticosArgs<ExtArgs>
    ejercicios_asignados?: boolean | pacientes$ejercicios_asignadosArgs<ExtArgs>
    users_pacientes_kinesiologoIdTousers?: boolean | pacientes$users_pacientes_kinesiologoIdTousersArgs<ExtArgs>
    users_pacientes_userIdTousers?: boolean | pacientes$users_pacientes_userIdTousersArgs<ExtArgs>
    progresos?: boolean | pacientes$progresosArgs<ExtArgs>
    turnos?: boolean | pacientes$turnosArgs<ExtArgs>
    _count?: boolean | PacientesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pacientesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_pacientes_kinesiologoIdTousers?: boolean | pacientes$users_pacientes_kinesiologoIdTousersArgs<ExtArgs>
    users_pacientes_userIdTousers?: boolean | pacientes$users_pacientes_userIdTousersArgs<ExtArgs>
  }
  export type pacientesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_pacientes_kinesiologoIdTousers?: boolean | pacientes$users_pacientes_kinesiologoIdTousersArgs<ExtArgs>
    users_pacientes_userIdTousers?: boolean | pacientes$users_pacientes_userIdTousersArgs<ExtArgs>
  }

  export type $pacientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pacientes"
    objects: {
      diagnosticos: Prisma.$diagnosticosPayload<ExtArgs>[]
      ejercicios_asignados: Prisma.$ejercicios_asignadosPayload<ExtArgs>[]
      users_pacientes_kinesiologoIdTousers: Prisma.$usersPayload<ExtArgs> | null
      users_pacientes_userIdTousers: Prisma.$usersPayload<ExtArgs> | null
      progresos: Prisma.$progresosPayload<ExtArgs>[]
      turnos: Prisma.$turnosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      kinesiologoId: string | null
      dni: string
      fechaNacimiento: Date | null
      telefono: string | null
      recibeRecordatorios: boolean
      domicilio: string | null
      obraSocial: string | null
      createdAt: Date
      email: string | null
      nombre: string | null
    }, ExtArgs["result"]["pacientes"]>
    composites: {}
  }

  type pacientesGetPayload<S extends boolean | null | undefined | pacientesDefaultArgs> = $Result.GetResult<Prisma.$pacientesPayload, S>

  type pacientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pacientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacientesCountAggregateInputType | true
    }

  export interface pacientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pacientes'], meta: { name: 'pacientes' } }
    /**
     * Find zero or one Pacientes that matches the filter.
     * @param {pacientesFindUniqueArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pacientesFindUniqueArgs>(args: SelectSubset<T, pacientesFindUniqueArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pacientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pacientesFindUniqueOrThrowArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pacientesFindUniqueOrThrowArgs>(args: SelectSubset<T, pacientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindFirstArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pacientesFindFirstArgs>(args?: SelectSubset<T, pacientesFindFirstArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pacientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindFirstOrThrowArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pacientesFindFirstOrThrowArgs>(args?: SelectSubset<T, pacientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.pacientes.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.pacientes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacientesWithIdOnly = await prisma.pacientes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pacientesFindManyArgs>(args?: SelectSubset<T, pacientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pacientes.
     * @param {pacientesCreateArgs} args - Arguments to create a Pacientes.
     * @example
     * // Create one Pacientes
     * const Pacientes = await prisma.pacientes.create({
     *   data: {
     *     // ... data to create a Pacientes
     *   }
     * })
     * 
     */
    create<T extends pacientesCreateArgs>(args: SelectSubset<T, pacientesCreateArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {pacientesCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const pacientes = await prisma.pacientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pacientesCreateManyArgs>(args?: SelectSubset<T, pacientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {pacientesCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const pacientes = await prisma.pacientes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `id`
     * const pacientesWithIdOnly = await prisma.pacientes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pacientesCreateManyAndReturnArgs>(args?: SelectSubset<T, pacientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pacientes.
     * @param {pacientesDeleteArgs} args - Arguments to delete one Pacientes.
     * @example
     * // Delete one Pacientes
     * const Pacientes = await prisma.pacientes.delete({
     *   where: {
     *     // ... filter to delete one Pacientes
     *   }
     * })
     * 
     */
    delete<T extends pacientesDeleteArgs>(args: SelectSubset<T, pacientesDeleteArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pacientes.
     * @param {pacientesUpdateArgs} args - Arguments to update one Pacientes.
     * @example
     * // Update one Pacientes
     * const pacientes = await prisma.pacientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pacientesUpdateArgs>(args: SelectSubset<T, pacientesUpdateArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {pacientesDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.pacientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pacientesDeleteManyArgs>(args?: SelectSubset<T, pacientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const pacientes = await prisma.pacientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pacientesUpdateManyArgs>(args: SelectSubset<T, pacientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes and returns the data updated in the database.
     * @param {pacientesUpdateManyAndReturnArgs} args - Arguments to update many Pacientes.
     * @example
     * // Update many Pacientes
     * const pacientes = await prisma.pacientes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacientes and only return the `id`
     * const pacientesWithIdOnly = await prisma.pacientes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pacientesUpdateManyAndReturnArgs>(args: SelectSubset<T, pacientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pacientes.
     * @param {pacientesUpsertArgs} args - Arguments to update or create a Pacientes.
     * @example
     * // Update or create a Pacientes
     * const pacientes = await prisma.pacientes.upsert({
     *   create: {
     *     // ... data to create a Pacientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pacientes we want to update
     *   }
     * })
     */
    upsert<T extends pacientesUpsertArgs>(args: SelectSubset<T, pacientesUpsertArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.pacientes.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends pacientesCountArgs>(
      args?: Subset<T, pacientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PacientesAggregateArgs>(args: Subset<T, PacientesAggregateArgs>): Prisma.PrismaPromise<GetPacientesAggregateType<T>>

    /**
     * Group by Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pacientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pacientesGroupByArgs['orderBy'] }
        : { orderBy?: pacientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pacientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pacientes model
   */
  readonly fields: pacientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pacientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pacientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnosticos<T extends pacientes$diagnosticosArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$diagnosticosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosticosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ejercicios_asignados<T extends pacientes$ejercicios_asignadosArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$ejercicios_asignadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ejercicios_asignadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_pacientes_kinesiologoIdTousers<T extends pacientes$users_pacientes_kinesiologoIdTousersArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$users_pacientes_kinesiologoIdTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_pacientes_userIdTousers<T extends pacientes$users_pacientes_userIdTousersArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$users_pacientes_userIdTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    progresos<T extends pacientes$progresosArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$progresosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progresosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    turnos<T extends pacientes$turnosArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$turnosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pacientes model
   */
  interface pacientesFieldRefs {
    readonly id: FieldRef<"pacientes", 'String'>
    readonly userId: FieldRef<"pacientes", 'String'>
    readonly kinesiologoId: FieldRef<"pacientes", 'String'>
    readonly dni: FieldRef<"pacientes", 'String'>
    readonly fechaNacimiento: FieldRef<"pacientes", 'DateTime'>
    readonly telefono: FieldRef<"pacientes", 'String'>
    readonly recibeRecordatorios: FieldRef<"pacientes", 'Boolean'>
    readonly domicilio: FieldRef<"pacientes", 'String'>
    readonly obraSocial: FieldRef<"pacientes", 'String'>
    readonly createdAt: FieldRef<"pacientes", 'DateTime'>
    readonly email: FieldRef<"pacientes", 'String'>
    readonly nombre: FieldRef<"pacientes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pacientes findUnique
   */
  export type pacientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes findUniqueOrThrow
   */
  export type pacientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes findFirst
   */
  export type pacientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes findFirstOrThrow
   */
  export type pacientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes findMany
   */
  export type pacientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes create
   */
  export type pacientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The data needed to create a pacientes.
     */
    data: XOR<pacientesCreateInput, pacientesUncheckedCreateInput>
  }

  /**
   * pacientes createMany
   */
  export type pacientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pacientes.
     */
    data: pacientesCreateManyInput | pacientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pacientes createManyAndReturn
   */
  export type pacientesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * The data used to create many pacientes.
     */
    data: pacientesCreateManyInput | pacientesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pacientes update
   */
  export type pacientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The data needed to update a pacientes.
     */
    data: XOR<pacientesUpdateInput, pacientesUncheckedUpdateInput>
    /**
     * Choose, which pacientes to update.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes updateMany
   */
  export type pacientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pacientes.
     */
    data: XOR<pacientesUpdateManyMutationInput, pacientesUncheckedUpdateManyInput>
    /**
     * Filter which pacientes to update
     */
    where?: pacientesWhereInput
    /**
     * Limit how many pacientes to update.
     */
    limit?: number
  }

  /**
   * pacientes updateManyAndReturn
   */
  export type pacientesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * The data used to update pacientes.
     */
    data: XOR<pacientesUpdateManyMutationInput, pacientesUncheckedUpdateManyInput>
    /**
     * Filter which pacientes to update
     */
    where?: pacientesWhereInput
    /**
     * Limit how many pacientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pacientes upsert
   */
  export type pacientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The filter to search for the pacientes to update in case it exists.
     */
    where: pacientesWhereUniqueInput
    /**
     * In case the pacientes found by the `where` argument doesn't exist, create a new pacientes with this data.
     */
    create: XOR<pacientesCreateInput, pacientesUncheckedCreateInput>
    /**
     * In case the pacientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pacientesUpdateInput, pacientesUncheckedUpdateInput>
  }

  /**
   * pacientes delete
   */
  export type pacientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter which pacientes to delete.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes deleteMany
   */
  export type pacientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pacientes to delete
     */
    where?: pacientesWhereInput
    /**
     * Limit how many pacientes to delete.
     */
    limit?: number
  }

  /**
   * pacientes.diagnosticos
   */
  export type pacientes$diagnosticosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosticos
     */
    select?: diagnosticosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosticos
     */
    omit?: diagnosticosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticosInclude<ExtArgs> | null
    where?: diagnosticosWhereInput
    orderBy?: diagnosticosOrderByWithRelationInput | diagnosticosOrderByWithRelationInput[]
    cursor?: diagnosticosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticosScalarFieldEnum | DiagnosticosScalarFieldEnum[]
  }

  /**
   * pacientes.ejercicios_asignados
   */
  export type pacientes$ejercicios_asignadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios_asignados
     */
    select?: ejercicios_asignadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios_asignados
     */
    omit?: ejercicios_asignadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejercicios_asignadosInclude<ExtArgs> | null
    where?: ejercicios_asignadosWhereInput
    orderBy?: ejercicios_asignadosOrderByWithRelationInput | ejercicios_asignadosOrderByWithRelationInput[]
    cursor?: ejercicios_asignadosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ejercicios_asignadosScalarFieldEnum | Ejercicios_asignadosScalarFieldEnum[]
  }

  /**
   * pacientes.users_pacientes_kinesiologoIdTousers
   */
  export type pacientes$users_pacientes_kinesiologoIdTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * pacientes.users_pacientes_userIdTousers
   */
  export type pacientes$users_pacientes_userIdTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * pacientes.progresos
   */
  export type pacientes$progresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progresos
     */
    select?: progresosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progresos
     */
    omit?: progresosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresosInclude<ExtArgs> | null
    where?: progresosWhereInput
    orderBy?: progresosOrderByWithRelationInput | progresosOrderByWithRelationInput[]
    cursor?: progresosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgresosScalarFieldEnum | ProgresosScalarFieldEnum[]
  }

  /**
   * pacientes.turnos
   */
  export type pacientes$turnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turnos
     */
    select?: turnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turnos
     */
    omit?: turnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turnosInclude<ExtArgs> | null
    where?: turnosWhereInput
    orderBy?: turnosOrderByWithRelationInput | turnosOrderByWithRelationInput[]
    cursor?: turnosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnosScalarFieldEnum | TurnosScalarFieldEnum[]
  }

  /**
   * pacientes without action
   */
  export type pacientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
  }


  /**
   * Model progresos
   */

  export type AggregateProgresos = {
    _count: ProgresosCountAggregateOutputType | null
    _avg: ProgresosAvgAggregateOutputType | null
    _sum: ProgresosSumAggregateOutputType | null
    _min: ProgresosMinAggregateOutputType | null
    _max: ProgresosMaxAggregateOutputType | null
  }

  export type ProgresosAvgAggregateOutputType = {
    seriesRealizadas: number | null
    repeticionesRealizadas: number | null
    pesoKg: number | null
  }

  export type ProgresosSumAggregateOutputType = {
    seriesRealizadas: number | null
    repeticionesRealizadas: number | null
    pesoKg: number | null
  }

  export type ProgresosMinAggregateOutputType = {
    id: string | null
    asignacionId: string | null
    pacienteId: string | null
    fecha: Date | null
    completado: boolean | null
    seriesRealizadas: number | null
    repeticionesRealizadas: number | null
    pesoKg: number | null
    observaciones: string | null
    registradoPorUserId: string | null
  }

  export type ProgresosMaxAggregateOutputType = {
    id: string | null
    asignacionId: string | null
    pacienteId: string | null
    fecha: Date | null
    completado: boolean | null
    seriesRealizadas: number | null
    repeticionesRealizadas: number | null
    pesoKg: number | null
    observaciones: string | null
    registradoPorUserId: string | null
  }

  export type ProgresosCountAggregateOutputType = {
    id: number
    asignacionId: number
    pacienteId: number
    fecha: number
    completado: number
    seriesRealizadas: number
    repeticionesRealizadas: number
    pesoKg: number
    observaciones: number
    registradoPorUserId: number
    _all: number
  }


  export type ProgresosAvgAggregateInputType = {
    seriesRealizadas?: true
    repeticionesRealizadas?: true
    pesoKg?: true
  }

  export type ProgresosSumAggregateInputType = {
    seriesRealizadas?: true
    repeticionesRealizadas?: true
    pesoKg?: true
  }

  export type ProgresosMinAggregateInputType = {
    id?: true
    asignacionId?: true
    pacienteId?: true
    fecha?: true
    completado?: true
    seriesRealizadas?: true
    repeticionesRealizadas?: true
    pesoKg?: true
    observaciones?: true
    registradoPorUserId?: true
  }

  export type ProgresosMaxAggregateInputType = {
    id?: true
    asignacionId?: true
    pacienteId?: true
    fecha?: true
    completado?: true
    seriesRealizadas?: true
    repeticionesRealizadas?: true
    pesoKg?: true
    observaciones?: true
    registradoPorUserId?: true
  }

  export type ProgresosCountAggregateInputType = {
    id?: true
    asignacionId?: true
    pacienteId?: true
    fecha?: true
    completado?: true
    seriesRealizadas?: true
    repeticionesRealizadas?: true
    pesoKg?: true
    observaciones?: true
    registradoPorUserId?: true
    _all?: true
  }

  export type ProgresosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which progresos to aggregate.
     */
    where?: progresosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progresos to fetch.
     */
    orderBy?: progresosOrderByWithRelationInput | progresosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: progresosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned progresos
    **/
    _count?: true | ProgresosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgresosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgresosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgresosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgresosMaxAggregateInputType
  }

  export type GetProgresosAggregateType<T extends ProgresosAggregateArgs> = {
        [P in keyof T & keyof AggregateProgresos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgresos[P]>
      : GetScalarType<T[P], AggregateProgresos[P]>
  }




  export type progresosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progresosWhereInput
    orderBy?: progresosOrderByWithAggregationInput | progresosOrderByWithAggregationInput[]
    by: ProgresosScalarFieldEnum[] | ProgresosScalarFieldEnum
    having?: progresosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgresosCountAggregateInputType | true
    _avg?: ProgresosAvgAggregateInputType
    _sum?: ProgresosSumAggregateInputType
    _min?: ProgresosMinAggregateInputType
    _max?: ProgresosMaxAggregateInputType
  }

  export type ProgresosGroupByOutputType = {
    id: string
    asignacionId: string
    pacienteId: string
    fecha: Date
    completado: boolean
    seriesRealizadas: number | null
    repeticionesRealizadas: number | null
    pesoKg: number | null
    observaciones: string | null
    registradoPorUserId: string
    _count: ProgresosCountAggregateOutputType | null
    _avg: ProgresosAvgAggregateOutputType | null
    _sum: ProgresosSumAggregateOutputType | null
    _min: ProgresosMinAggregateOutputType | null
    _max: ProgresosMaxAggregateOutputType | null
  }

  type GetProgresosGroupByPayload<T extends progresosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgresosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgresosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgresosGroupByOutputType[P]>
            : GetScalarType<T[P], ProgresosGroupByOutputType[P]>
        }
      >
    >


  export type progresosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asignacionId?: boolean
    pacienteId?: boolean
    fecha?: boolean
    completado?: boolean
    seriesRealizadas?: boolean
    repeticionesRealizadas?: boolean
    pesoKg?: boolean
    observaciones?: boolean
    registradoPorUserId?: boolean
    ejercicios_asignados?: boolean | ejercicios_asignadosDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progresos"]>

  export type progresosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asignacionId?: boolean
    pacienteId?: boolean
    fecha?: boolean
    completado?: boolean
    seriesRealizadas?: boolean
    repeticionesRealizadas?: boolean
    pesoKg?: boolean
    observaciones?: boolean
    registradoPorUserId?: boolean
    ejercicios_asignados?: boolean | ejercicios_asignadosDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progresos"]>

  export type progresosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asignacionId?: boolean
    pacienteId?: boolean
    fecha?: boolean
    completado?: boolean
    seriesRealizadas?: boolean
    repeticionesRealizadas?: boolean
    pesoKg?: boolean
    observaciones?: boolean
    registradoPorUserId?: boolean
    ejercicios_asignados?: boolean | ejercicios_asignadosDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progresos"]>

  export type progresosSelectScalar = {
    id?: boolean
    asignacionId?: boolean
    pacienteId?: boolean
    fecha?: boolean
    completado?: boolean
    seriesRealizadas?: boolean
    repeticionesRealizadas?: boolean
    pesoKg?: boolean
    observaciones?: boolean
    registradoPorUserId?: boolean
  }

  export type progresosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "asignacionId" | "pacienteId" | "fecha" | "completado" | "seriesRealizadas" | "repeticionesRealizadas" | "pesoKg" | "observaciones" | "registradoPorUserId", ExtArgs["result"]["progresos"]>
  export type progresosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ejercicios_asignados?: boolean | ejercicios_asignadosDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type progresosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ejercicios_asignados?: boolean | ejercicios_asignadosDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type progresosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ejercicios_asignados?: boolean | ejercicios_asignadosDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $progresosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "progresos"
    objects: {
      ejercicios_asignados: Prisma.$ejercicios_asignadosPayload<ExtArgs>
      pacientes: Prisma.$pacientesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      asignacionId: string
      pacienteId: string
      fecha: Date
      completado: boolean
      seriesRealizadas: number | null
      repeticionesRealizadas: number | null
      pesoKg: number | null
      observaciones: string | null
      registradoPorUserId: string
    }, ExtArgs["result"]["progresos"]>
    composites: {}
  }

  type progresosGetPayload<S extends boolean | null | undefined | progresosDefaultArgs> = $Result.GetResult<Prisma.$progresosPayload, S>

  type progresosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<progresosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgresosCountAggregateInputType | true
    }

  export interface progresosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['progresos'], meta: { name: 'progresos' } }
    /**
     * Find zero or one Progresos that matches the filter.
     * @param {progresosFindUniqueArgs} args - Arguments to find a Progresos
     * @example
     * // Get one Progresos
     * const progresos = await prisma.progresos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends progresosFindUniqueArgs>(args: SelectSubset<T, progresosFindUniqueArgs<ExtArgs>>): Prisma__progresosClient<$Result.GetResult<Prisma.$progresosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Progresos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {progresosFindUniqueOrThrowArgs} args - Arguments to find a Progresos
     * @example
     * // Get one Progresos
     * const progresos = await prisma.progresos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends progresosFindUniqueOrThrowArgs>(args: SelectSubset<T, progresosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__progresosClient<$Result.GetResult<Prisma.$progresosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progresos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progresosFindFirstArgs} args - Arguments to find a Progresos
     * @example
     * // Get one Progresos
     * const progresos = await prisma.progresos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends progresosFindFirstArgs>(args?: SelectSubset<T, progresosFindFirstArgs<ExtArgs>>): Prisma__progresosClient<$Result.GetResult<Prisma.$progresosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progresos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progresosFindFirstOrThrowArgs} args - Arguments to find a Progresos
     * @example
     * // Get one Progresos
     * const progresos = await prisma.progresos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends progresosFindFirstOrThrowArgs>(args?: SelectSubset<T, progresosFindFirstOrThrowArgs<ExtArgs>>): Prisma__progresosClient<$Result.GetResult<Prisma.$progresosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Progresos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progresosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Progresos
     * const progresos = await prisma.progresos.findMany()
     * 
     * // Get first 10 Progresos
     * const progresos = await prisma.progresos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progresosWithIdOnly = await prisma.progresos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends progresosFindManyArgs>(args?: SelectSubset<T, progresosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progresosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Progresos.
     * @param {progresosCreateArgs} args - Arguments to create a Progresos.
     * @example
     * // Create one Progresos
     * const Progresos = await prisma.progresos.create({
     *   data: {
     *     // ... data to create a Progresos
     *   }
     * })
     * 
     */
    create<T extends progresosCreateArgs>(args: SelectSubset<T, progresosCreateArgs<ExtArgs>>): Prisma__progresosClient<$Result.GetResult<Prisma.$progresosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Progresos.
     * @param {progresosCreateManyArgs} args - Arguments to create many Progresos.
     * @example
     * // Create many Progresos
     * const progresos = await prisma.progresos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends progresosCreateManyArgs>(args?: SelectSubset<T, progresosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Progresos and returns the data saved in the database.
     * @param {progresosCreateManyAndReturnArgs} args - Arguments to create many Progresos.
     * @example
     * // Create many Progresos
     * const progresos = await prisma.progresos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Progresos and only return the `id`
     * const progresosWithIdOnly = await prisma.progresos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends progresosCreateManyAndReturnArgs>(args?: SelectSubset<T, progresosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progresosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Progresos.
     * @param {progresosDeleteArgs} args - Arguments to delete one Progresos.
     * @example
     * // Delete one Progresos
     * const Progresos = await prisma.progresos.delete({
     *   where: {
     *     // ... filter to delete one Progresos
     *   }
     * })
     * 
     */
    delete<T extends progresosDeleteArgs>(args: SelectSubset<T, progresosDeleteArgs<ExtArgs>>): Prisma__progresosClient<$Result.GetResult<Prisma.$progresosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Progresos.
     * @param {progresosUpdateArgs} args - Arguments to update one Progresos.
     * @example
     * // Update one Progresos
     * const progresos = await prisma.progresos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends progresosUpdateArgs>(args: SelectSubset<T, progresosUpdateArgs<ExtArgs>>): Prisma__progresosClient<$Result.GetResult<Prisma.$progresosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Progresos.
     * @param {progresosDeleteManyArgs} args - Arguments to filter Progresos to delete.
     * @example
     * // Delete a few Progresos
     * const { count } = await prisma.progresos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends progresosDeleteManyArgs>(args?: SelectSubset<T, progresosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progresosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Progresos
     * const progresos = await prisma.progresos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends progresosUpdateManyArgs>(args: SelectSubset<T, progresosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresos and returns the data updated in the database.
     * @param {progresosUpdateManyAndReturnArgs} args - Arguments to update many Progresos.
     * @example
     * // Update many Progresos
     * const progresos = await prisma.progresos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Progresos and only return the `id`
     * const progresosWithIdOnly = await prisma.progresos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends progresosUpdateManyAndReturnArgs>(args: SelectSubset<T, progresosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progresosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Progresos.
     * @param {progresosUpsertArgs} args - Arguments to update or create a Progresos.
     * @example
     * // Update or create a Progresos
     * const progresos = await prisma.progresos.upsert({
     *   create: {
     *     // ... data to create a Progresos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Progresos we want to update
     *   }
     * })
     */
    upsert<T extends progresosUpsertArgs>(args: SelectSubset<T, progresosUpsertArgs<ExtArgs>>): Prisma__progresosClient<$Result.GetResult<Prisma.$progresosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Progresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progresosCountArgs} args - Arguments to filter Progresos to count.
     * @example
     * // Count the number of Progresos
     * const count = await prisma.progresos.count({
     *   where: {
     *     // ... the filter for the Progresos we want to count
     *   }
     * })
    **/
    count<T extends progresosCountArgs>(
      args?: Subset<T, progresosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgresosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Progresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgresosAggregateArgs>(args: Subset<T, ProgresosAggregateArgs>): Prisma.PrismaPromise<GetProgresosAggregateType<T>>

    /**
     * Group by Progresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progresosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends progresosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: progresosGroupByArgs['orderBy'] }
        : { orderBy?: progresosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, progresosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgresosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the progresos model
   */
  readonly fields: progresosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for progresos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__progresosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ejercicios_asignados<T extends ejercicios_asignadosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ejercicios_asignadosDefaultArgs<ExtArgs>>): Prisma__ejercicios_asignadosClient<$Result.GetResult<Prisma.$ejercicios_asignadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pacientes<T extends pacientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pacientesDefaultArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the progresos model
   */
  interface progresosFieldRefs {
    readonly id: FieldRef<"progresos", 'String'>
    readonly asignacionId: FieldRef<"progresos", 'String'>
    readonly pacienteId: FieldRef<"progresos", 'String'>
    readonly fecha: FieldRef<"progresos", 'DateTime'>
    readonly completado: FieldRef<"progresos", 'Boolean'>
    readonly seriesRealizadas: FieldRef<"progresos", 'Int'>
    readonly repeticionesRealizadas: FieldRef<"progresos", 'Int'>
    readonly pesoKg: FieldRef<"progresos", 'Float'>
    readonly observaciones: FieldRef<"progresos", 'String'>
    readonly registradoPorUserId: FieldRef<"progresos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * progresos findUnique
   */
  export type progresosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progresos
     */
    select?: progresosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progresos
     */
    omit?: progresosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresosInclude<ExtArgs> | null
    /**
     * Filter, which progresos to fetch.
     */
    where: progresosWhereUniqueInput
  }

  /**
   * progresos findUniqueOrThrow
   */
  export type progresosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progresos
     */
    select?: progresosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progresos
     */
    omit?: progresosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresosInclude<ExtArgs> | null
    /**
     * Filter, which progresos to fetch.
     */
    where: progresosWhereUniqueInput
  }

  /**
   * progresos findFirst
   */
  export type progresosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progresos
     */
    select?: progresosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progresos
     */
    omit?: progresosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresosInclude<ExtArgs> | null
    /**
     * Filter, which progresos to fetch.
     */
    where?: progresosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progresos to fetch.
     */
    orderBy?: progresosOrderByWithRelationInput | progresosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for progresos.
     */
    cursor?: progresosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of progresos.
     */
    distinct?: ProgresosScalarFieldEnum | ProgresosScalarFieldEnum[]
  }

  /**
   * progresos findFirstOrThrow
   */
  export type progresosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progresos
     */
    select?: progresosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progresos
     */
    omit?: progresosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresosInclude<ExtArgs> | null
    /**
     * Filter, which progresos to fetch.
     */
    where?: progresosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progresos to fetch.
     */
    orderBy?: progresosOrderByWithRelationInput | progresosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for progresos.
     */
    cursor?: progresosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of progresos.
     */
    distinct?: ProgresosScalarFieldEnum | ProgresosScalarFieldEnum[]
  }

  /**
   * progresos findMany
   */
  export type progresosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progresos
     */
    select?: progresosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progresos
     */
    omit?: progresosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresosInclude<ExtArgs> | null
    /**
     * Filter, which progresos to fetch.
     */
    where?: progresosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progresos to fetch.
     */
    orderBy?: progresosOrderByWithRelationInput | progresosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing progresos.
     */
    cursor?: progresosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of progresos.
     */
    distinct?: ProgresosScalarFieldEnum | ProgresosScalarFieldEnum[]
  }

  /**
   * progresos create
   */
  export type progresosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progresos
     */
    select?: progresosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progresos
     */
    omit?: progresosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresosInclude<ExtArgs> | null
    /**
     * The data needed to create a progresos.
     */
    data: XOR<progresosCreateInput, progresosUncheckedCreateInput>
  }

  /**
   * progresos createMany
   */
  export type progresosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many progresos.
     */
    data: progresosCreateManyInput | progresosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * progresos createManyAndReturn
   */
  export type progresosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progresos
     */
    select?: progresosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the progresos
     */
    omit?: progresosOmit<ExtArgs> | null
    /**
     * The data used to create many progresos.
     */
    data: progresosCreateManyInput | progresosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * progresos update
   */
  export type progresosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progresos
     */
    select?: progresosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progresos
     */
    omit?: progresosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresosInclude<ExtArgs> | null
    /**
     * The data needed to update a progresos.
     */
    data: XOR<progresosUpdateInput, progresosUncheckedUpdateInput>
    /**
     * Choose, which progresos to update.
     */
    where: progresosWhereUniqueInput
  }

  /**
   * progresos updateMany
   */
  export type progresosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update progresos.
     */
    data: XOR<progresosUpdateManyMutationInput, progresosUncheckedUpdateManyInput>
    /**
     * Filter which progresos to update
     */
    where?: progresosWhereInput
    /**
     * Limit how many progresos to update.
     */
    limit?: number
  }

  /**
   * progresos updateManyAndReturn
   */
  export type progresosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progresos
     */
    select?: progresosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the progresos
     */
    omit?: progresosOmit<ExtArgs> | null
    /**
     * The data used to update progresos.
     */
    data: XOR<progresosUpdateManyMutationInput, progresosUncheckedUpdateManyInput>
    /**
     * Filter which progresos to update
     */
    where?: progresosWhereInput
    /**
     * Limit how many progresos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * progresos upsert
   */
  export type progresosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progresos
     */
    select?: progresosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progresos
     */
    omit?: progresosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresosInclude<ExtArgs> | null
    /**
     * The filter to search for the progresos to update in case it exists.
     */
    where: progresosWhereUniqueInput
    /**
     * In case the progresos found by the `where` argument doesn't exist, create a new progresos with this data.
     */
    create: XOR<progresosCreateInput, progresosUncheckedCreateInput>
    /**
     * In case the progresos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<progresosUpdateInput, progresosUncheckedUpdateInput>
  }

  /**
   * progresos delete
   */
  export type progresosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progresos
     */
    select?: progresosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progresos
     */
    omit?: progresosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresosInclude<ExtArgs> | null
    /**
     * Filter which progresos to delete.
     */
    where: progresosWhereUniqueInput
  }

  /**
   * progresos deleteMany
   */
  export type progresosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which progresos to delete
     */
    where?: progresosWhereInput
    /**
     * Limit how many progresos to delete.
     */
    limit?: number
  }

  /**
   * progresos without action
   */
  export type progresosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progresos
     */
    select?: progresosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progresos
     */
    omit?: progresosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresosInclude<ExtArgs> | null
  }


  /**
   * Model turnos
   */

  export type AggregateTurnos = {
    _count: TurnosCountAggregateOutputType | null
    _min: TurnosMinAggregateOutputType | null
    _max: TurnosMaxAggregateOutputType | null
  }

  export type TurnosMinAggregateOutputType = {
    id: string | null
    pacienteId: string | null
    kinesiologoId: string | null
    iniciaEn: Date | null
    terminaEn: Date | null
    estado: $Enums.TurnoEstado | null
    motivo: string | null
    notas: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TurnosMaxAggregateOutputType = {
    id: string | null
    pacienteId: string | null
    kinesiologoId: string | null
    iniciaEn: Date | null
    terminaEn: Date | null
    estado: $Enums.TurnoEstado | null
    motivo: string | null
    notas: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TurnosCountAggregateOutputType = {
    id: number
    pacienteId: number
    kinesiologoId: number
    iniciaEn: number
    terminaEn: number
    estado: number
    motivo: number
    notas: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TurnosMinAggregateInputType = {
    id?: true
    pacienteId?: true
    kinesiologoId?: true
    iniciaEn?: true
    terminaEn?: true
    estado?: true
    motivo?: true
    notas?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TurnosMaxAggregateInputType = {
    id?: true
    pacienteId?: true
    kinesiologoId?: true
    iniciaEn?: true
    terminaEn?: true
    estado?: true
    motivo?: true
    notas?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TurnosCountAggregateInputType = {
    id?: true
    pacienteId?: true
    kinesiologoId?: true
    iniciaEn?: true
    terminaEn?: true
    estado?: true
    motivo?: true
    notas?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TurnosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which turnos to aggregate.
     */
    where?: turnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turnos to fetch.
     */
    orderBy?: turnosOrderByWithRelationInput | turnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: turnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned turnos
    **/
    _count?: true | TurnosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurnosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurnosMaxAggregateInputType
  }

  export type GetTurnosAggregateType<T extends TurnosAggregateArgs> = {
        [P in keyof T & keyof AggregateTurnos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurnos[P]>
      : GetScalarType<T[P], AggregateTurnos[P]>
  }




  export type turnosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: turnosWhereInput
    orderBy?: turnosOrderByWithAggregationInput | turnosOrderByWithAggregationInput[]
    by: TurnosScalarFieldEnum[] | TurnosScalarFieldEnum
    having?: turnosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurnosCountAggregateInputType | true
    _min?: TurnosMinAggregateInputType
    _max?: TurnosMaxAggregateInputType
  }

  export type TurnosGroupByOutputType = {
    id: string
    pacienteId: string
    kinesiologoId: string
    iniciaEn: Date
    terminaEn: Date
    estado: $Enums.TurnoEstado
    motivo: string | null
    notas: string | null
    createdAt: Date
    updatedAt: Date
    _count: TurnosCountAggregateOutputType | null
    _min: TurnosMinAggregateOutputType | null
    _max: TurnosMaxAggregateOutputType | null
  }

  type GetTurnosGroupByPayload<T extends turnosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurnosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurnosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurnosGroupByOutputType[P]>
            : GetScalarType<T[P], TurnosGroupByOutputType[P]>
        }
      >
    >


  export type turnosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    kinesiologoId?: boolean
    iniciaEn?: boolean
    terminaEn?: boolean
    estado?: boolean
    motivo?: boolean
    notas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turnos"]>

  export type turnosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    kinesiologoId?: boolean
    iniciaEn?: boolean
    terminaEn?: boolean
    estado?: boolean
    motivo?: boolean
    notas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turnos"]>

  export type turnosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    kinesiologoId?: boolean
    iniciaEn?: boolean
    terminaEn?: boolean
    estado?: boolean
    motivo?: boolean
    notas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turnos"]>

  export type turnosSelectScalar = {
    id?: boolean
    pacienteId?: boolean
    kinesiologoId?: boolean
    iniciaEn?: boolean
    terminaEn?: boolean
    estado?: boolean
    motivo?: boolean
    notas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type turnosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pacienteId" | "kinesiologoId" | "iniciaEn" | "terminaEn" | "estado" | "motivo" | "notas" | "createdAt" | "updatedAt", ExtArgs["result"]["turnos"]>
  export type turnosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }
  export type turnosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }
  export type turnosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }

  export type $turnosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "turnos"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      pacientes: Prisma.$pacientesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pacienteId: string
      kinesiologoId: string
      iniciaEn: Date
      terminaEn: Date
      estado: $Enums.TurnoEstado
      motivo: string | null
      notas: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["turnos"]>
    composites: {}
  }

  type turnosGetPayload<S extends boolean | null | undefined | turnosDefaultArgs> = $Result.GetResult<Prisma.$turnosPayload, S>

  type turnosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<turnosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurnosCountAggregateInputType | true
    }

  export interface turnosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['turnos'], meta: { name: 'turnos' } }
    /**
     * Find zero or one Turnos that matches the filter.
     * @param {turnosFindUniqueArgs} args - Arguments to find a Turnos
     * @example
     * // Get one Turnos
     * const turnos = await prisma.turnos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends turnosFindUniqueArgs>(args: SelectSubset<T, turnosFindUniqueArgs<ExtArgs>>): Prisma__turnosClient<$Result.GetResult<Prisma.$turnosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Turnos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {turnosFindUniqueOrThrowArgs} args - Arguments to find a Turnos
     * @example
     * // Get one Turnos
     * const turnos = await prisma.turnos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends turnosFindUniqueOrThrowArgs>(args: SelectSubset<T, turnosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__turnosClient<$Result.GetResult<Prisma.$turnosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turnosFindFirstArgs} args - Arguments to find a Turnos
     * @example
     * // Get one Turnos
     * const turnos = await prisma.turnos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends turnosFindFirstArgs>(args?: SelectSubset<T, turnosFindFirstArgs<ExtArgs>>): Prisma__turnosClient<$Result.GetResult<Prisma.$turnosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turnos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turnosFindFirstOrThrowArgs} args - Arguments to find a Turnos
     * @example
     * // Get one Turnos
     * const turnos = await prisma.turnos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends turnosFindFirstOrThrowArgs>(args?: SelectSubset<T, turnosFindFirstOrThrowArgs<ExtArgs>>): Prisma__turnosClient<$Result.GetResult<Prisma.$turnosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Turnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turnosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turnos
     * const turnos = await prisma.turnos.findMany()
     * 
     * // Get first 10 Turnos
     * const turnos = await prisma.turnos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turnosWithIdOnly = await prisma.turnos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends turnosFindManyArgs>(args?: SelectSubset<T, turnosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$turnosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Turnos.
     * @param {turnosCreateArgs} args - Arguments to create a Turnos.
     * @example
     * // Create one Turnos
     * const Turnos = await prisma.turnos.create({
     *   data: {
     *     // ... data to create a Turnos
     *   }
     * })
     * 
     */
    create<T extends turnosCreateArgs>(args: SelectSubset<T, turnosCreateArgs<ExtArgs>>): Prisma__turnosClient<$Result.GetResult<Prisma.$turnosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Turnos.
     * @param {turnosCreateManyArgs} args - Arguments to create many Turnos.
     * @example
     * // Create many Turnos
     * const turnos = await prisma.turnos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends turnosCreateManyArgs>(args?: SelectSubset<T, turnosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Turnos and returns the data saved in the database.
     * @param {turnosCreateManyAndReturnArgs} args - Arguments to create many Turnos.
     * @example
     * // Create many Turnos
     * const turnos = await prisma.turnos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Turnos and only return the `id`
     * const turnosWithIdOnly = await prisma.turnos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends turnosCreateManyAndReturnArgs>(args?: SelectSubset<T, turnosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$turnosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Turnos.
     * @param {turnosDeleteArgs} args - Arguments to delete one Turnos.
     * @example
     * // Delete one Turnos
     * const Turnos = await prisma.turnos.delete({
     *   where: {
     *     // ... filter to delete one Turnos
     *   }
     * })
     * 
     */
    delete<T extends turnosDeleteArgs>(args: SelectSubset<T, turnosDeleteArgs<ExtArgs>>): Prisma__turnosClient<$Result.GetResult<Prisma.$turnosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Turnos.
     * @param {turnosUpdateArgs} args - Arguments to update one Turnos.
     * @example
     * // Update one Turnos
     * const turnos = await prisma.turnos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends turnosUpdateArgs>(args: SelectSubset<T, turnosUpdateArgs<ExtArgs>>): Prisma__turnosClient<$Result.GetResult<Prisma.$turnosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Turnos.
     * @param {turnosDeleteManyArgs} args - Arguments to filter Turnos to delete.
     * @example
     * // Delete a few Turnos
     * const { count } = await prisma.turnos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends turnosDeleteManyArgs>(args?: SelectSubset<T, turnosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turnosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turnos
     * const turnos = await prisma.turnos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends turnosUpdateManyArgs>(args: SelectSubset<T, turnosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turnos and returns the data updated in the database.
     * @param {turnosUpdateManyAndReturnArgs} args - Arguments to update many Turnos.
     * @example
     * // Update many Turnos
     * const turnos = await prisma.turnos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Turnos and only return the `id`
     * const turnosWithIdOnly = await prisma.turnos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends turnosUpdateManyAndReturnArgs>(args: SelectSubset<T, turnosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$turnosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Turnos.
     * @param {turnosUpsertArgs} args - Arguments to update or create a Turnos.
     * @example
     * // Update or create a Turnos
     * const turnos = await prisma.turnos.upsert({
     *   create: {
     *     // ... data to create a Turnos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turnos we want to update
     *   }
     * })
     */
    upsert<T extends turnosUpsertArgs>(args: SelectSubset<T, turnosUpsertArgs<ExtArgs>>): Prisma__turnosClient<$Result.GetResult<Prisma.$turnosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turnosCountArgs} args - Arguments to filter Turnos to count.
     * @example
     * // Count the number of Turnos
     * const count = await prisma.turnos.count({
     *   where: {
     *     // ... the filter for the Turnos we want to count
     *   }
     * })
    **/
    count<T extends turnosCountArgs>(
      args?: Subset<T, turnosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurnosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TurnosAggregateArgs>(args: Subset<T, TurnosAggregateArgs>): Prisma.PrismaPromise<GetTurnosAggregateType<T>>

    /**
     * Group by Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turnosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends turnosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: turnosGroupByArgs['orderBy'] }
        : { orderBy?: turnosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, turnosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurnosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the turnos model
   */
  readonly fields: turnosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for turnos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__turnosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pacientes<T extends pacientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pacientesDefaultArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the turnos model
   */
  interface turnosFieldRefs {
    readonly id: FieldRef<"turnos", 'String'>
    readonly pacienteId: FieldRef<"turnos", 'String'>
    readonly kinesiologoId: FieldRef<"turnos", 'String'>
    readonly iniciaEn: FieldRef<"turnos", 'DateTime'>
    readonly terminaEn: FieldRef<"turnos", 'DateTime'>
    readonly estado: FieldRef<"turnos", 'TurnoEstado'>
    readonly motivo: FieldRef<"turnos", 'String'>
    readonly notas: FieldRef<"turnos", 'String'>
    readonly createdAt: FieldRef<"turnos", 'DateTime'>
    readonly updatedAt: FieldRef<"turnos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * turnos findUnique
   */
  export type turnosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turnos
     */
    select?: turnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turnos
     */
    omit?: turnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turnosInclude<ExtArgs> | null
    /**
     * Filter, which turnos to fetch.
     */
    where: turnosWhereUniqueInput
  }

  /**
   * turnos findUniqueOrThrow
   */
  export type turnosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turnos
     */
    select?: turnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turnos
     */
    omit?: turnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turnosInclude<ExtArgs> | null
    /**
     * Filter, which turnos to fetch.
     */
    where: turnosWhereUniqueInput
  }

  /**
   * turnos findFirst
   */
  export type turnosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turnos
     */
    select?: turnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turnos
     */
    omit?: turnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turnosInclude<ExtArgs> | null
    /**
     * Filter, which turnos to fetch.
     */
    where?: turnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turnos to fetch.
     */
    orderBy?: turnosOrderByWithRelationInput | turnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for turnos.
     */
    cursor?: turnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of turnos.
     */
    distinct?: TurnosScalarFieldEnum | TurnosScalarFieldEnum[]
  }

  /**
   * turnos findFirstOrThrow
   */
  export type turnosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turnos
     */
    select?: turnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turnos
     */
    omit?: turnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turnosInclude<ExtArgs> | null
    /**
     * Filter, which turnos to fetch.
     */
    where?: turnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turnos to fetch.
     */
    orderBy?: turnosOrderByWithRelationInput | turnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for turnos.
     */
    cursor?: turnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of turnos.
     */
    distinct?: TurnosScalarFieldEnum | TurnosScalarFieldEnum[]
  }

  /**
   * turnos findMany
   */
  export type turnosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turnos
     */
    select?: turnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turnos
     */
    omit?: turnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turnosInclude<ExtArgs> | null
    /**
     * Filter, which turnos to fetch.
     */
    where?: turnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turnos to fetch.
     */
    orderBy?: turnosOrderByWithRelationInput | turnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing turnos.
     */
    cursor?: turnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of turnos.
     */
    distinct?: TurnosScalarFieldEnum | TurnosScalarFieldEnum[]
  }

  /**
   * turnos create
   */
  export type turnosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turnos
     */
    select?: turnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turnos
     */
    omit?: turnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turnosInclude<ExtArgs> | null
    /**
     * The data needed to create a turnos.
     */
    data: XOR<turnosCreateInput, turnosUncheckedCreateInput>
  }

  /**
   * turnos createMany
   */
  export type turnosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many turnos.
     */
    data: turnosCreateManyInput | turnosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * turnos createManyAndReturn
   */
  export type turnosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turnos
     */
    select?: turnosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the turnos
     */
    omit?: turnosOmit<ExtArgs> | null
    /**
     * The data used to create many turnos.
     */
    data: turnosCreateManyInput | turnosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turnosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * turnos update
   */
  export type turnosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turnos
     */
    select?: turnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turnos
     */
    omit?: turnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turnosInclude<ExtArgs> | null
    /**
     * The data needed to update a turnos.
     */
    data: XOR<turnosUpdateInput, turnosUncheckedUpdateInput>
    /**
     * Choose, which turnos to update.
     */
    where: turnosWhereUniqueInput
  }

  /**
   * turnos updateMany
   */
  export type turnosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update turnos.
     */
    data: XOR<turnosUpdateManyMutationInput, turnosUncheckedUpdateManyInput>
    /**
     * Filter which turnos to update
     */
    where?: turnosWhereInput
    /**
     * Limit how many turnos to update.
     */
    limit?: number
  }

  /**
   * turnos updateManyAndReturn
   */
  export type turnosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turnos
     */
    select?: turnosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the turnos
     */
    omit?: turnosOmit<ExtArgs> | null
    /**
     * The data used to update turnos.
     */
    data: XOR<turnosUpdateManyMutationInput, turnosUncheckedUpdateManyInput>
    /**
     * Filter which turnos to update
     */
    where?: turnosWhereInput
    /**
     * Limit how many turnos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turnosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * turnos upsert
   */
  export type turnosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turnos
     */
    select?: turnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turnos
     */
    omit?: turnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turnosInclude<ExtArgs> | null
    /**
     * The filter to search for the turnos to update in case it exists.
     */
    where: turnosWhereUniqueInput
    /**
     * In case the turnos found by the `where` argument doesn't exist, create a new turnos with this data.
     */
    create: XOR<turnosCreateInput, turnosUncheckedCreateInput>
    /**
     * In case the turnos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<turnosUpdateInput, turnosUncheckedUpdateInput>
  }

  /**
   * turnos delete
   */
  export type turnosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turnos
     */
    select?: turnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turnos
     */
    omit?: turnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turnosInclude<ExtArgs> | null
    /**
     * Filter which turnos to delete.
     */
    where: turnosWhereUniqueInput
  }

  /**
   * turnos deleteMany
   */
  export type turnosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which turnos to delete
     */
    where?: turnosWhereInput
    /**
     * Limit how many turnos to delete.
     */
    limit?: number
  }

  /**
   * turnos without action
   */
  export type turnosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turnos
     */
    select?: turnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turnos
     */
    omit?: turnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turnosInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    nombre: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    diagnosticos?: boolean | users$diagnosticosArgs<ExtArgs>
    ejercicios?: boolean | users$ejerciciosArgs<ExtArgs>
    ejercicios_asignados?: boolean | users$ejercicios_asignadosArgs<ExtArgs>
    pacientes_pacientes_kinesiologoIdTousers?: boolean | users$pacientes_pacientes_kinesiologoIdTousersArgs<ExtArgs>
    pacientes_pacientes_userIdTousers?: boolean | users$pacientes_pacientes_userIdTousersArgs<ExtArgs>
    progresos?: boolean | users$progresosArgs<ExtArgs>
    turnos?: boolean | users$turnosArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "passwordHash" | "role" | "createdAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosticos?: boolean | users$diagnosticosArgs<ExtArgs>
    ejercicios?: boolean | users$ejerciciosArgs<ExtArgs>
    ejercicios_asignados?: boolean | users$ejercicios_asignadosArgs<ExtArgs>
    pacientes_pacientes_kinesiologoIdTousers?: boolean | users$pacientes_pacientes_kinesiologoIdTousersArgs<ExtArgs>
    pacientes_pacientes_userIdTousers?: boolean | users$pacientes_pacientes_userIdTousersArgs<ExtArgs>
    progresos?: boolean | users$progresosArgs<ExtArgs>
    turnos?: boolean | users$turnosArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      diagnosticos: Prisma.$diagnosticosPayload<ExtArgs>[]
      ejercicios: Prisma.$ejerciciosPayload<ExtArgs>[]
      ejercicios_asignados: Prisma.$ejercicios_asignadosPayload<ExtArgs>[]
      pacientes_pacientes_kinesiologoIdTousers: Prisma.$pacientesPayload<ExtArgs>[]
      pacientes_pacientes_userIdTousers: Prisma.$pacientesPayload<ExtArgs> | null
      progresos: Prisma.$progresosPayload<ExtArgs>[]
      turnos: Prisma.$turnosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      email: string
      passwordHash: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnosticos<T extends users$diagnosticosArgs<ExtArgs> = {}>(args?: Subset<T, users$diagnosticosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosticosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ejercicios<T extends users$ejerciciosArgs<ExtArgs> = {}>(args?: Subset<T, users$ejerciciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ejerciciosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ejercicios_asignados<T extends users$ejercicios_asignadosArgs<ExtArgs> = {}>(args?: Subset<T, users$ejercicios_asignadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ejercicios_asignadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pacientes_pacientes_kinesiologoIdTousers<T extends users$pacientes_pacientes_kinesiologoIdTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$pacientes_pacientes_kinesiologoIdTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pacientes_pacientes_userIdTousers<T extends users$pacientes_pacientes_userIdTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$pacientes_pacientes_userIdTousersArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    progresos<T extends users$progresosArgs<ExtArgs> = {}>(args?: Subset<T, users$progresosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progresosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    turnos<T extends users$turnosArgs<ExtArgs> = {}>(args?: Subset<T, users$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$turnosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly nombre: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly passwordHash: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'Role'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.diagnosticos
   */
  export type users$diagnosticosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosticos
     */
    select?: diagnosticosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosticos
     */
    omit?: diagnosticosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticosInclude<ExtArgs> | null
    where?: diagnosticosWhereInput
    orderBy?: diagnosticosOrderByWithRelationInput | diagnosticosOrderByWithRelationInput[]
    cursor?: diagnosticosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticosScalarFieldEnum | DiagnosticosScalarFieldEnum[]
  }

  /**
   * users.ejercicios
   */
  export type users$ejerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios
     */
    select?: ejerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios
     */
    omit?: ejerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejerciciosInclude<ExtArgs> | null
    where?: ejerciciosWhereInput
    orderBy?: ejerciciosOrderByWithRelationInput | ejerciciosOrderByWithRelationInput[]
    cursor?: ejerciciosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EjerciciosScalarFieldEnum | EjerciciosScalarFieldEnum[]
  }

  /**
   * users.ejercicios_asignados
   */
  export type users$ejercicios_asignadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicios_asignados
     */
    select?: ejercicios_asignadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ejercicios_asignados
     */
    omit?: ejercicios_asignadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ejercicios_asignadosInclude<ExtArgs> | null
    where?: ejercicios_asignadosWhereInput
    orderBy?: ejercicios_asignadosOrderByWithRelationInput | ejercicios_asignadosOrderByWithRelationInput[]
    cursor?: ejercicios_asignadosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ejercicios_asignadosScalarFieldEnum | Ejercicios_asignadosScalarFieldEnum[]
  }

  /**
   * users.pacientes_pacientes_kinesiologoIdTousers
   */
  export type users$pacientes_pacientes_kinesiologoIdTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    where?: pacientesWhereInput
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    cursor?: pacientesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * users.pacientes_pacientes_userIdTousers
   */
  export type users$pacientes_pacientes_userIdTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    where?: pacientesWhereInput
  }

  /**
   * users.progresos
   */
  export type users$progresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progresos
     */
    select?: progresosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progresos
     */
    omit?: progresosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresosInclude<ExtArgs> | null
    where?: progresosWhereInput
    orderBy?: progresosOrderByWithRelationInput | progresosOrderByWithRelationInput[]
    cursor?: progresosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgresosScalarFieldEnum | ProgresosScalarFieldEnum[]
  }

  /**
   * users.turnos
   */
  export type users$turnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turnos
     */
    select?: turnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turnos
     */
    omit?: turnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turnosInclude<ExtArgs> | null
    where?: turnosWhereInput
    orderBy?: turnosOrderByWithRelationInput | turnosOrderByWithRelationInput[]
    cursor?: turnosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnosScalarFieldEnum | TurnosScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DiagnosticosScalarFieldEnum: {
    id: 'id',
    pacienteId: 'pacienteId',
    kinesiologoId: 'kinesiologoId',
    lesion: 'lesion',
    descripcion: 'descripcion',
    tratamiento: 'tratamiento',
    creadoEl: 'creadoEl',
    activo: 'activo'
  };

  export type DiagnosticosScalarFieldEnum = (typeof DiagnosticosScalarFieldEnum)[keyof typeof DiagnosticosScalarFieldEnum]


  export const EjerciciosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    instrucciones: 'instrucciones',
    zonaCuerpo: 'zonaCuerpo',
    nivel: 'nivel',
    creadoPorId: 'creadoPorId',
    creadoEl: 'creadoEl'
  };

  export type EjerciciosScalarFieldEnum = (typeof EjerciciosScalarFieldEnum)[keyof typeof EjerciciosScalarFieldEnum]


  export const Ejercicios_asignadosScalarFieldEnum: {
    id: 'id',
    pacienteId: 'pacienteId',
    ejercicioId: 'ejercicioId',
    kinesiologoId: 'kinesiologoId',
    diagnosticoId: 'diagnosticoId',
    objetivo: 'objetivo',
    series: 'series',
    repeticiones: 'repeticiones',
    frecuencia: 'frecuencia',
    duracionMinutos: 'duracionMinutos',
    estado: 'estado',
    asignadaEl: 'asignadaEl'
  };

  export type Ejercicios_asignadosScalarFieldEnum = (typeof Ejercicios_asignadosScalarFieldEnum)[keyof typeof Ejercicios_asignadosScalarFieldEnum]


  export const PacientesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    kinesiologoId: 'kinesiologoId',
    dni: 'dni',
    fechaNacimiento: 'fechaNacimiento',
    telefono: 'telefono',
    recibeRecordatorios: 'recibeRecordatorios',
    domicilio: 'domicilio',
    obraSocial: 'obraSocial',
    createdAt: 'createdAt',
    email: 'email',
    nombre: 'nombre'
  };

  export type PacientesScalarFieldEnum = (typeof PacientesScalarFieldEnum)[keyof typeof PacientesScalarFieldEnum]


  export const ProgresosScalarFieldEnum: {
    id: 'id',
    asignacionId: 'asignacionId',
    pacienteId: 'pacienteId',
    fecha: 'fecha',
    completado: 'completado',
    seriesRealizadas: 'seriesRealizadas',
    repeticionesRealizadas: 'repeticionesRealizadas',
    pesoKg: 'pesoKg',
    observaciones: 'observaciones',
    registradoPorUserId: 'registradoPorUserId'
  };

  export type ProgresosScalarFieldEnum = (typeof ProgresosScalarFieldEnum)[keyof typeof ProgresosScalarFieldEnum]


  export const TurnosScalarFieldEnum: {
    id: 'id',
    pacienteId: 'pacienteId',
    kinesiologoId: 'kinesiologoId',
    iniciaEn: 'iniciaEn',
    terminaEn: 'terminaEn',
    estado: 'estado',
    motivo: 'motivo',
    notas: 'notas',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TurnosScalarFieldEnum = (typeof TurnosScalarFieldEnum)[keyof typeof TurnosScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AsignacionEstado'
   */
  export type EnumAsignacionEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AsignacionEstado'>
    


  /**
   * Reference to a field of type 'AsignacionEstado[]'
   */
  export type ListEnumAsignacionEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AsignacionEstado[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TurnoEstado'
   */
  export type EnumTurnoEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TurnoEstado'>
    


  /**
   * Reference to a field of type 'TurnoEstado[]'
   */
  export type ListEnumTurnoEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TurnoEstado[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    
  /**
   * Deep Input Types
   */


  export type diagnosticosWhereInput = {
    AND?: diagnosticosWhereInput | diagnosticosWhereInput[]
    OR?: diagnosticosWhereInput[]
    NOT?: diagnosticosWhereInput | diagnosticosWhereInput[]
    id?: StringFilter<"diagnosticos"> | string
    pacienteId?: StringFilter<"diagnosticos"> | string
    kinesiologoId?: StringFilter<"diagnosticos"> | string
    lesion?: StringFilter<"diagnosticos"> | string
    descripcion?: StringFilter<"diagnosticos"> | string
    tratamiento?: StringNullableFilter<"diagnosticos"> | string | null
    creadoEl?: DateTimeFilter<"diagnosticos"> | Date | string
    activo?: BoolFilter<"diagnosticos"> | boolean
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    pacientes?: XOR<PacientesScalarRelationFilter, pacientesWhereInput>
    ejercicios_asignados?: Ejercicios_asignadosListRelationFilter
  }

  export type diagnosticosOrderByWithRelationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    kinesiologoId?: SortOrder
    lesion?: SortOrder
    descripcion?: SortOrder
    tratamiento?: SortOrderInput | SortOrder
    creadoEl?: SortOrder
    activo?: SortOrder
    users?: usersOrderByWithRelationInput
    pacientes?: pacientesOrderByWithRelationInput
    ejercicios_asignados?: ejercicios_asignadosOrderByRelationAggregateInput
  }

  export type diagnosticosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: diagnosticosWhereInput | diagnosticosWhereInput[]
    OR?: diagnosticosWhereInput[]
    NOT?: diagnosticosWhereInput | diagnosticosWhereInput[]
    pacienteId?: StringFilter<"diagnosticos"> | string
    kinesiologoId?: StringFilter<"diagnosticos"> | string
    lesion?: StringFilter<"diagnosticos"> | string
    descripcion?: StringFilter<"diagnosticos"> | string
    tratamiento?: StringNullableFilter<"diagnosticos"> | string | null
    creadoEl?: DateTimeFilter<"diagnosticos"> | Date | string
    activo?: BoolFilter<"diagnosticos"> | boolean
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    pacientes?: XOR<PacientesScalarRelationFilter, pacientesWhereInput>
    ejercicios_asignados?: Ejercicios_asignadosListRelationFilter
  }, "id">

  export type diagnosticosOrderByWithAggregationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    kinesiologoId?: SortOrder
    lesion?: SortOrder
    descripcion?: SortOrder
    tratamiento?: SortOrderInput | SortOrder
    creadoEl?: SortOrder
    activo?: SortOrder
    _count?: diagnosticosCountOrderByAggregateInput
    _max?: diagnosticosMaxOrderByAggregateInput
    _min?: diagnosticosMinOrderByAggregateInput
  }

  export type diagnosticosScalarWhereWithAggregatesInput = {
    AND?: diagnosticosScalarWhereWithAggregatesInput | diagnosticosScalarWhereWithAggregatesInput[]
    OR?: diagnosticosScalarWhereWithAggregatesInput[]
    NOT?: diagnosticosScalarWhereWithAggregatesInput | diagnosticosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"diagnosticos"> | string
    pacienteId?: StringWithAggregatesFilter<"diagnosticos"> | string
    kinesiologoId?: StringWithAggregatesFilter<"diagnosticos"> | string
    lesion?: StringWithAggregatesFilter<"diagnosticos"> | string
    descripcion?: StringWithAggregatesFilter<"diagnosticos"> | string
    tratamiento?: StringNullableWithAggregatesFilter<"diagnosticos"> | string | null
    creadoEl?: DateTimeWithAggregatesFilter<"diagnosticos"> | Date | string
    activo?: BoolWithAggregatesFilter<"diagnosticos"> | boolean
  }

  export type ejerciciosWhereInput = {
    AND?: ejerciciosWhereInput | ejerciciosWhereInput[]
    OR?: ejerciciosWhereInput[]
    NOT?: ejerciciosWhereInput | ejerciciosWhereInput[]
    id?: StringFilter<"ejercicios"> | string
    nombre?: StringFilter<"ejercicios"> | string
    descripcion?: StringFilter<"ejercicios"> | string
    instrucciones?: StringNullableFilter<"ejercicios"> | string | null
    zonaCuerpo?: StringFilter<"ejercicios"> | string
    nivel?: StringFilter<"ejercicios"> | string
    creadoPorId?: StringFilter<"ejercicios"> | string
    creadoEl?: DateTimeFilter<"ejercicios"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    ejercicios_asignados?: Ejercicios_asignadosListRelationFilter
  }

  export type ejerciciosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    instrucciones?: SortOrderInput | SortOrder
    zonaCuerpo?: SortOrder
    nivel?: SortOrder
    creadoPorId?: SortOrder
    creadoEl?: SortOrder
    users?: usersOrderByWithRelationInput
    ejercicios_asignados?: ejercicios_asignadosOrderByRelationAggregateInput
  }

  export type ejerciciosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ejerciciosWhereInput | ejerciciosWhereInput[]
    OR?: ejerciciosWhereInput[]
    NOT?: ejerciciosWhereInput | ejerciciosWhereInput[]
    nombre?: StringFilter<"ejercicios"> | string
    descripcion?: StringFilter<"ejercicios"> | string
    instrucciones?: StringNullableFilter<"ejercicios"> | string | null
    zonaCuerpo?: StringFilter<"ejercicios"> | string
    nivel?: StringFilter<"ejercicios"> | string
    creadoPorId?: StringFilter<"ejercicios"> | string
    creadoEl?: DateTimeFilter<"ejercicios"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    ejercicios_asignados?: Ejercicios_asignadosListRelationFilter
  }, "id">

  export type ejerciciosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    instrucciones?: SortOrderInput | SortOrder
    zonaCuerpo?: SortOrder
    nivel?: SortOrder
    creadoPorId?: SortOrder
    creadoEl?: SortOrder
    _count?: ejerciciosCountOrderByAggregateInput
    _max?: ejerciciosMaxOrderByAggregateInput
    _min?: ejerciciosMinOrderByAggregateInput
  }

  export type ejerciciosScalarWhereWithAggregatesInput = {
    AND?: ejerciciosScalarWhereWithAggregatesInput | ejerciciosScalarWhereWithAggregatesInput[]
    OR?: ejerciciosScalarWhereWithAggregatesInput[]
    NOT?: ejerciciosScalarWhereWithAggregatesInput | ejerciciosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ejercicios"> | string
    nombre?: StringWithAggregatesFilter<"ejercicios"> | string
    descripcion?: StringWithAggregatesFilter<"ejercicios"> | string
    instrucciones?: StringNullableWithAggregatesFilter<"ejercicios"> | string | null
    zonaCuerpo?: StringWithAggregatesFilter<"ejercicios"> | string
    nivel?: StringWithAggregatesFilter<"ejercicios"> | string
    creadoPorId?: StringWithAggregatesFilter<"ejercicios"> | string
    creadoEl?: DateTimeWithAggregatesFilter<"ejercicios"> | Date | string
  }

  export type ejercicios_asignadosWhereInput = {
    AND?: ejercicios_asignadosWhereInput | ejercicios_asignadosWhereInput[]
    OR?: ejercicios_asignadosWhereInput[]
    NOT?: ejercicios_asignadosWhereInput | ejercicios_asignadosWhereInput[]
    id?: StringFilter<"ejercicios_asignados"> | string
    pacienteId?: StringFilter<"ejercicios_asignados"> | string
    ejercicioId?: StringFilter<"ejercicios_asignados"> | string
    kinesiologoId?: StringFilter<"ejercicios_asignados"> | string
    diagnosticoId?: StringNullableFilter<"ejercicios_asignados"> | string | null
    objetivo?: StringNullableFilter<"ejercicios_asignados"> | string | null
    series?: IntFilter<"ejercicios_asignados"> | number
    repeticiones?: IntFilter<"ejercicios_asignados"> | number
    frecuencia?: StringNullableFilter<"ejercicios_asignados"> | string | null
    duracionMinutos?: IntNullableFilter<"ejercicios_asignados"> | number | null
    estado?: EnumAsignacionEstadoFilter<"ejercicios_asignados"> | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFilter<"ejercicios_asignados"> | Date | string
    diagnosticos?: XOR<DiagnosticosNullableScalarRelationFilter, diagnosticosWhereInput> | null
    ejercicios?: XOR<EjerciciosScalarRelationFilter, ejerciciosWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    pacientes?: XOR<PacientesScalarRelationFilter, pacientesWhereInput>
    progresos?: ProgresosListRelationFilter
  }

  export type ejercicios_asignadosOrderByWithRelationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    ejercicioId?: SortOrder
    kinesiologoId?: SortOrder
    diagnosticoId?: SortOrderInput | SortOrder
    objetivo?: SortOrderInput | SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    frecuencia?: SortOrderInput | SortOrder
    duracionMinutos?: SortOrderInput | SortOrder
    estado?: SortOrder
    asignadaEl?: SortOrder
    diagnosticos?: diagnosticosOrderByWithRelationInput
    ejercicios?: ejerciciosOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    pacientes?: pacientesOrderByWithRelationInput
    progresos?: progresosOrderByRelationAggregateInput
  }

  export type ejercicios_asignadosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ejercicios_asignadosWhereInput | ejercicios_asignadosWhereInput[]
    OR?: ejercicios_asignadosWhereInput[]
    NOT?: ejercicios_asignadosWhereInput | ejercicios_asignadosWhereInput[]
    pacienteId?: StringFilter<"ejercicios_asignados"> | string
    ejercicioId?: StringFilter<"ejercicios_asignados"> | string
    kinesiologoId?: StringFilter<"ejercicios_asignados"> | string
    diagnosticoId?: StringNullableFilter<"ejercicios_asignados"> | string | null
    objetivo?: StringNullableFilter<"ejercicios_asignados"> | string | null
    series?: IntFilter<"ejercicios_asignados"> | number
    repeticiones?: IntFilter<"ejercicios_asignados"> | number
    frecuencia?: StringNullableFilter<"ejercicios_asignados"> | string | null
    duracionMinutos?: IntNullableFilter<"ejercicios_asignados"> | number | null
    estado?: EnumAsignacionEstadoFilter<"ejercicios_asignados"> | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFilter<"ejercicios_asignados"> | Date | string
    diagnosticos?: XOR<DiagnosticosNullableScalarRelationFilter, diagnosticosWhereInput> | null
    ejercicios?: XOR<EjerciciosScalarRelationFilter, ejerciciosWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    pacientes?: XOR<PacientesScalarRelationFilter, pacientesWhereInput>
    progresos?: ProgresosListRelationFilter
  }, "id">

  export type ejercicios_asignadosOrderByWithAggregationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    ejercicioId?: SortOrder
    kinesiologoId?: SortOrder
    diagnosticoId?: SortOrderInput | SortOrder
    objetivo?: SortOrderInput | SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    frecuencia?: SortOrderInput | SortOrder
    duracionMinutos?: SortOrderInput | SortOrder
    estado?: SortOrder
    asignadaEl?: SortOrder
    _count?: ejercicios_asignadosCountOrderByAggregateInput
    _avg?: ejercicios_asignadosAvgOrderByAggregateInput
    _max?: ejercicios_asignadosMaxOrderByAggregateInput
    _min?: ejercicios_asignadosMinOrderByAggregateInput
    _sum?: ejercicios_asignadosSumOrderByAggregateInput
  }

  export type ejercicios_asignadosScalarWhereWithAggregatesInput = {
    AND?: ejercicios_asignadosScalarWhereWithAggregatesInput | ejercicios_asignadosScalarWhereWithAggregatesInput[]
    OR?: ejercicios_asignadosScalarWhereWithAggregatesInput[]
    NOT?: ejercicios_asignadosScalarWhereWithAggregatesInput | ejercicios_asignadosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ejercicios_asignados"> | string
    pacienteId?: StringWithAggregatesFilter<"ejercicios_asignados"> | string
    ejercicioId?: StringWithAggregatesFilter<"ejercicios_asignados"> | string
    kinesiologoId?: StringWithAggregatesFilter<"ejercicios_asignados"> | string
    diagnosticoId?: StringNullableWithAggregatesFilter<"ejercicios_asignados"> | string | null
    objetivo?: StringNullableWithAggregatesFilter<"ejercicios_asignados"> | string | null
    series?: IntWithAggregatesFilter<"ejercicios_asignados"> | number
    repeticiones?: IntWithAggregatesFilter<"ejercicios_asignados"> | number
    frecuencia?: StringNullableWithAggregatesFilter<"ejercicios_asignados"> | string | null
    duracionMinutos?: IntNullableWithAggregatesFilter<"ejercicios_asignados"> | number | null
    estado?: EnumAsignacionEstadoWithAggregatesFilter<"ejercicios_asignados"> | $Enums.AsignacionEstado
    asignadaEl?: DateTimeWithAggregatesFilter<"ejercicios_asignados"> | Date | string
  }

  export type pacientesWhereInput = {
    AND?: pacientesWhereInput | pacientesWhereInput[]
    OR?: pacientesWhereInput[]
    NOT?: pacientesWhereInput | pacientesWhereInput[]
    id?: StringFilter<"pacientes"> | string
    userId?: StringNullableFilter<"pacientes"> | string | null
    kinesiologoId?: StringNullableFilter<"pacientes"> | string | null
    dni?: StringFilter<"pacientes"> | string
    fechaNacimiento?: DateTimeNullableFilter<"pacientes"> | Date | string | null
    telefono?: StringNullableFilter<"pacientes"> | string | null
    recibeRecordatorios?: BoolFilter<"pacientes"> | boolean
    domicilio?: StringNullableFilter<"pacientes"> | string | null
    obraSocial?: StringNullableFilter<"pacientes"> | string | null
    createdAt?: DateTimeFilter<"pacientes"> | Date | string
    email?: StringNullableFilter<"pacientes"> | string | null
    nombre?: StringNullableFilter<"pacientes"> | string | null
    diagnosticos?: DiagnosticosListRelationFilter
    ejercicios_asignados?: Ejercicios_asignadosListRelationFilter
    users_pacientes_kinesiologoIdTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_pacientes_userIdTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    progresos?: ProgresosListRelationFilter
    turnos?: TurnosListRelationFilter
  }

  export type pacientesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    kinesiologoId?: SortOrderInput | SortOrder
    dni?: SortOrder
    fechaNacimiento?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    recibeRecordatorios?: SortOrder
    domicilio?: SortOrderInput | SortOrder
    obraSocial?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    email?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    diagnosticos?: diagnosticosOrderByRelationAggregateInput
    ejercicios_asignados?: ejercicios_asignadosOrderByRelationAggregateInput
    users_pacientes_kinesiologoIdTousers?: usersOrderByWithRelationInput
    users_pacientes_userIdTousers?: usersOrderByWithRelationInput
    progresos?: progresosOrderByRelationAggregateInput
    turnos?: turnosOrderByRelationAggregateInput
  }

  export type pacientesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    dni?: string
    AND?: pacientesWhereInput | pacientesWhereInput[]
    OR?: pacientesWhereInput[]
    NOT?: pacientesWhereInput | pacientesWhereInput[]
    kinesiologoId?: StringNullableFilter<"pacientes"> | string | null
    fechaNacimiento?: DateTimeNullableFilter<"pacientes"> | Date | string | null
    telefono?: StringNullableFilter<"pacientes"> | string | null
    recibeRecordatorios?: BoolFilter<"pacientes"> | boolean
    domicilio?: StringNullableFilter<"pacientes"> | string | null
    obraSocial?: StringNullableFilter<"pacientes"> | string | null
    createdAt?: DateTimeFilter<"pacientes"> | Date | string
    email?: StringNullableFilter<"pacientes"> | string | null
    nombre?: StringNullableFilter<"pacientes"> | string | null
    diagnosticos?: DiagnosticosListRelationFilter
    ejercicios_asignados?: Ejercicios_asignadosListRelationFilter
    users_pacientes_kinesiologoIdTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_pacientes_userIdTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    progresos?: ProgresosListRelationFilter
    turnos?: TurnosListRelationFilter
  }, "id" | "userId" | "dni">

  export type pacientesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    kinesiologoId?: SortOrderInput | SortOrder
    dni?: SortOrder
    fechaNacimiento?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    recibeRecordatorios?: SortOrder
    domicilio?: SortOrderInput | SortOrder
    obraSocial?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    email?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: pacientesCountOrderByAggregateInput
    _max?: pacientesMaxOrderByAggregateInput
    _min?: pacientesMinOrderByAggregateInput
  }

  export type pacientesScalarWhereWithAggregatesInput = {
    AND?: pacientesScalarWhereWithAggregatesInput | pacientesScalarWhereWithAggregatesInput[]
    OR?: pacientesScalarWhereWithAggregatesInput[]
    NOT?: pacientesScalarWhereWithAggregatesInput | pacientesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"pacientes"> | string
    userId?: StringNullableWithAggregatesFilter<"pacientes"> | string | null
    kinesiologoId?: StringNullableWithAggregatesFilter<"pacientes"> | string | null
    dni?: StringWithAggregatesFilter<"pacientes"> | string
    fechaNacimiento?: DateTimeNullableWithAggregatesFilter<"pacientes"> | Date | string | null
    telefono?: StringNullableWithAggregatesFilter<"pacientes"> | string | null
    recibeRecordatorios?: BoolWithAggregatesFilter<"pacientes"> | boolean
    domicilio?: StringNullableWithAggregatesFilter<"pacientes"> | string | null
    obraSocial?: StringNullableWithAggregatesFilter<"pacientes"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"pacientes"> | Date | string
    email?: StringNullableWithAggregatesFilter<"pacientes"> | string | null
    nombre?: StringNullableWithAggregatesFilter<"pacientes"> | string | null
  }

  export type progresosWhereInput = {
    AND?: progresosWhereInput | progresosWhereInput[]
    OR?: progresosWhereInput[]
    NOT?: progresosWhereInput | progresosWhereInput[]
    id?: StringFilter<"progresos"> | string
    asignacionId?: StringFilter<"progresos"> | string
    pacienteId?: StringFilter<"progresos"> | string
    fecha?: DateTimeFilter<"progresos"> | Date | string
    completado?: BoolFilter<"progresos"> | boolean
    seriesRealizadas?: IntNullableFilter<"progresos"> | number | null
    repeticionesRealizadas?: IntNullableFilter<"progresos"> | number | null
    pesoKg?: FloatNullableFilter<"progresos"> | number | null
    observaciones?: StringNullableFilter<"progresos"> | string | null
    registradoPorUserId?: StringFilter<"progresos"> | string
    ejercicios_asignados?: XOR<Ejercicios_asignadosScalarRelationFilter, ejercicios_asignadosWhereInput>
    pacientes?: XOR<PacientesScalarRelationFilter, pacientesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type progresosOrderByWithRelationInput = {
    id?: SortOrder
    asignacionId?: SortOrder
    pacienteId?: SortOrder
    fecha?: SortOrder
    completado?: SortOrder
    seriesRealizadas?: SortOrderInput | SortOrder
    repeticionesRealizadas?: SortOrderInput | SortOrder
    pesoKg?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    registradoPorUserId?: SortOrder
    ejercicios_asignados?: ejercicios_asignadosOrderByWithRelationInput
    pacientes?: pacientesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type progresosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: progresosWhereInput | progresosWhereInput[]
    OR?: progresosWhereInput[]
    NOT?: progresosWhereInput | progresosWhereInput[]
    asignacionId?: StringFilter<"progresos"> | string
    pacienteId?: StringFilter<"progresos"> | string
    fecha?: DateTimeFilter<"progresos"> | Date | string
    completado?: BoolFilter<"progresos"> | boolean
    seriesRealizadas?: IntNullableFilter<"progresos"> | number | null
    repeticionesRealizadas?: IntNullableFilter<"progresos"> | number | null
    pesoKg?: FloatNullableFilter<"progresos"> | number | null
    observaciones?: StringNullableFilter<"progresos"> | string | null
    registradoPorUserId?: StringFilter<"progresos"> | string
    ejercicios_asignados?: XOR<Ejercicios_asignadosScalarRelationFilter, ejercicios_asignadosWhereInput>
    pacientes?: XOR<PacientesScalarRelationFilter, pacientesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type progresosOrderByWithAggregationInput = {
    id?: SortOrder
    asignacionId?: SortOrder
    pacienteId?: SortOrder
    fecha?: SortOrder
    completado?: SortOrder
    seriesRealizadas?: SortOrderInput | SortOrder
    repeticionesRealizadas?: SortOrderInput | SortOrder
    pesoKg?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    registradoPorUserId?: SortOrder
    _count?: progresosCountOrderByAggregateInput
    _avg?: progresosAvgOrderByAggregateInput
    _max?: progresosMaxOrderByAggregateInput
    _min?: progresosMinOrderByAggregateInput
    _sum?: progresosSumOrderByAggregateInput
  }

  export type progresosScalarWhereWithAggregatesInput = {
    AND?: progresosScalarWhereWithAggregatesInput | progresosScalarWhereWithAggregatesInput[]
    OR?: progresosScalarWhereWithAggregatesInput[]
    NOT?: progresosScalarWhereWithAggregatesInput | progresosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"progresos"> | string
    asignacionId?: StringWithAggregatesFilter<"progresos"> | string
    pacienteId?: StringWithAggregatesFilter<"progresos"> | string
    fecha?: DateTimeWithAggregatesFilter<"progresos"> | Date | string
    completado?: BoolWithAggregatesFilter<"progresos"> | boolean
    seriesRealizadas?: IntNullableWithAggregatesFilter<"progresos"> | number | null
    repeticionesRealizadas?: IntNullableWithAggregatesFilter<"progresos"> | number | null
    pesoKg?: FloatNullableWithAggregatesFilter<"progresos"> | number | null
    observaciones?: StringNullableWithAggregatesFilter<"progresos"> | string | null
    registradoPorUserId?: StringWithAggregatesFilter<"progresos"> | string
  }

  export type turnosWhereInput = {
    AND?: turnosWhereInput | turnosWhereInput[]
    OR?: turnosWhereInput[]
    NOT?: turnosWhereInput | turnosWhereInput[]
    id?: StringFilter<"turnos"> | string
    pacienteId?: StringFilter<"turnos"> | string
    kinesiologoId?: StringFilter<"turnos"> | string
    iniciaEn?: DateTimeFilter<"turnos"> | Date | string
    terminaEn?: DateTimeFilter<"turnos"> | Date | string
    estado?: EnumTurnoEstadoFilter<"turnos"> | $Enums.TurnoEstado
    motivo?: StringNullableFilter<"turnos"> | string | null
    notas?: StringNullableFilter<"turnos"> | string | null
    createdAt?: DateTimeFilter<"turnos"> | Date | string
    updatedAt?: DateTimeFilter<"turnos"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    pacientes?: XOR<PacientesScalarRelationFilter, pacientesWhereInput>
  }

  export type turnosOrderByWithRelationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    kinesiologoId?: SortOrder
    iniciaEn?: SortOrder
    terminaEn?: SortOrder
    estado?: SortOrder
    motivo?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: usersOrderByWithRelationInput
    pacientes?: pacientesOrderByWithRelationInput
  }

  export type turnosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: turnosWhereInput | turnosWhereInput[]
    OR?: turnosWhereInput[]
    NOT?: turnosWhereInput | turnosWhereInput[]
    pacienteId?: StringFilter<"turnos"> | string
    kinesiologoId?: StringFilter<"turnos"> | string
    iniciaEn?: DateTimeFilter<"turnos"> | Date | string
    terminaEn?: DateTimeFilter<"turnos"> | Date | string
    estado?: EnumTurnoEstadoFilter<"turnos"> | $Enums.TurnoEstado
    motivo?: StringNullableFilter<"turnos"> | string | null
    notas?: StringNullableFilter<"turnos"> | string | null
    createdAt?: DateTimeFilter<"turnos"> | Date | string
    updatedAt?: DateTimeFilter<"turnos"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    pacientes?: XOR<PacientesScalarRelationFilter, pacientesWhereInput>
  }, "id">

  export type turnosOrderByWithAggregationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    kinesiologoId?: SortOrder
    iniciaEn?: SortOrder
    terminaEn?: SortOrder
    estado?: SortOrder
    motivo?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: turnosCountOrderByAggregateInput
    _max?: turnosMaxOrderByAggregateInput
    _min?: turnosMinOrderByAggregateInput
  }

  export type turnosScalarWhereWithAggregatesInput = {
    AND?: turnosScalarWhereWithAggregatesInput | turnosScalarWhereWithAggregatesInput[]
    OR?: turnosScalarWhereWithAggregatesInput[]
    NOT?: turnosScalarWhereWithAggregatesInput | turnosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"turnos"> | string
    pacienteId?: StringWithAggregatesFilter<"turnos"> | string
    kinesiologoId?: StringWithAggregatesFilter<"turnos"> | string
    iniciaEn?: DateTimeWithAggregatesFilter<"turnos"> | Date | string
    terminaEn?: DateTimeWithAggregatesFilter<"turnos"> | Date | string
    estado?: EnumTurnoEstadoWithAggregatesFilter<"turnos"> | $Enums.TurnoEstado
    motivo?: StringNullableWithAggregatesFilter<"turnos"> | string | null
    notas?: StringNullableWithAggregatesFilter<"turnos"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"turnos"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"turnos"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    nombre?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    passwordHash?: StringFilter<"users"> | string
    role?: EnumRoleFilter<"users"> | $Enums.Role
    createdAt?: DateTimeFilter<"users"> | Date | string
    diagnosticos?: DiagnosticosListRelationFilter
    ejercicios?: EjerciciosListRelationFilter
    ejercicios_asignados?: Ejercicios_asignadosListRelationFilter
    pacientes_pacientes_kinesiologoIdTousers?: PacientesListRelationFilter
    pacientes_pacientes_userIdTousers?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
    progresos?: ProgresosListRelationFilter
    turnos?: TurnosListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    diagnosticos?: diagnosticosOrderByRelationAggregateInput
    ejercicios?: ejerciciosOrderByRelationAggregateInput
    ejercicios_asignados?: ejercicios_asignadosOrderByRelationAggregateInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesOrderByRelationAggregateInput
    pacientes_pacientes_userIdTousers?: pacientesOrderByWithRelationInput
    progresos?: progresosOrderByRelationAggregateInput
    turnos?: turnosOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    nombre?: StringFilter<"users"> | string
    passwordHash?: StringFilter<"users"> | string
    role?: EnumRoleFilter<"users"> | $Enums.Role
    createdAt?: DateTimeFilter<"users"> | Date | string
    diagnosticos?: DiagnosticosListRelationFilter
    ejercicios?: EjerciciosListRelationFilter
    ejercicios_asignados?: Ejercicios_asignadosListRelationFilter
    pacientes_pacientes_kinesiologoIdTousers?: PacientesListRelationFilter
    pacientes_pacientes_userIdTousers?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
    progresos?: ProgresosListRelationFilter
    turnos?: TurnosListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    nombre?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    passwordHash?: StringWithAggregatesFilter<"users"> | string
    role?: EnumRoleWithAggregatesFilter<"users"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type diagnosticosCreateInput = {
    id: string
    lesion: string
    descripcion: string
    tratamiento?: string | null
    creadoEl?: Date | string
    activo?: boolean
    users: usersCreateNestedOneWithoutDiagnosticosInput
    pacientes: pacientesCreateNestedOneWithoutDiagnosticosInput
    ejercicios_asignados?: ejercicios_asignadosCreateNestedManyWithoutDiagnosticosInput
  }

  export type diagnosticosUncheckedCreateInput = {
    id: string
    pacienteId: string
    kinesiologoId: string
    lesion: string
    descripcion: string
    tratamiento?: string | null
    creadoEl?: Date | string
    activo?: boolean
    ejercicios_asignados?: ejercicios_asignadosUncheckedCreateNestedManyWithoutDiagnosticosInput
  }

  export type diagnosticosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateOneRequiredWithoutDiagnosticosNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutDiagnosticosNestedInput
    ejercicios_asignados?: ejercicios_asignadosUpdateManyWithoutDiagnosticosNestedInput
  }

  export type diagnosticosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: StringFieldUpdateOperationsInput | string
    lesion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    ejercicios_asignados?: ejercicios_asignadosUncheckedUpdateManyWithoutDiagnosticosNestedInput
  }

  export type diagnosticosCreateManyInput = {
    id: string
    pacienteId: string
    kinesiologoId: string
    lesion: string
    descripcion: string
    tratamiento?: string | null
    creadoEl?: Date | string
    activo?: boolean
  }

  export type diagnosticosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type diagnosticosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: StringFieldUpdateOperationsInput | string
    lesion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ejerciciosCreateInput = {
    id: string
    nombre: string
    descripcion: string
    instrucciones?: string | null
    zonaCuerpo: string
    nivel?: string
    creadoEl?: Date | string
    users: usersCreateNestedOneWithoutEjerciciosInput
    ejercicios_asignados?: ejercicios_asignadosCreateNestedManyWithoutEjerciciosInput
  }

  export type ejerciciosUncheckedCreateInput = {
    id: string
    nombre: string
    descripcion: string
    instrucciones?: string | null
    zonaCuerpo: string
    nivel?: string
    creadoPorId: string
    creadoEl?: Date | string
    ejercicios_asignados?: ejercicios_asignadosUncheckedCreateNestedManyWithoutEjerciciosInput
  }

  export type ejerciciosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    instrucciones?: NullableStringFieldUpdateOperationsInput | string | null
    zonaCuerpo?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutEjerciciosNestedInput
    ejercicios_asignados?: ejercicios_asignadosUpdateManyWithoutEjerciciosNestedInput
  }

  export type ejerciciosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    instrucciones?: NullableStringFieldUpdateOperationsInput | string | null
    zonaCuerpo?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    creadoPorId?: StringFieldUpdateOperationsInput | string
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios_asignados?: ejercicios_asignadosUncheckedUpdateManyWithoutEjerciciosNestedInput
  }

  export type ejerciciosCreateManyInput = {
    id: string
    nombre: string
    descripcion: string
    instrucciones?: string | null
    zonaCuerpo: string
    nivel?: string
    creadoPorId: string
    creadoEl?: Date | string
  }

  export type ejerciciosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    instrucciones?: NullableStringFieldUpdateOperationsInput | string | null
    zonaCuerpo?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ejerciciosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    instrucciones?: NullableStringFieldUpdateOperationsInput | string | null
    zonaCuerpo?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    creadoPorId?: StringFieldUpdateOperationsInput | string
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ejercicios_asignadosCreateInput = {
    id: string
    objetivo?: string | null
    series?: number
    repeticiones?: number
    frecuencia?: string | null
    duracionMinutos?: number | null
    estado?: $Enums.AsignacionEstado
    asignadaEl?: Date | string
    diagnosticos?: diagnosticosCreateNestedOneWithoutEjercicios_asignadosInput
    ejercicios: ejerciciosCreateNestedOneWithoutEjercicios_asignadosInput
    users: usersCreateNestedOneWithoutEjercicios_asignadosInput
    pacientes: pacientesCreateNestedOneWithoutEjercicios_asignadosInput
    progresos?: progresosCreateNestedManyWithoutEjercicios_asignadosInput
  }

  export type ejercicios_asignadosUncheckedCreateInput = {
    id: string
    pacienteId: string
    ejercicioId: string
    kinesiologoId: string
    diagnosticoId?: string | null
    objetivo?: string | null
    series?: number
    repeticiones?: number
    frecuencia?: string | null
    duracionMinutos?: number | null
    estado?: $Enums.AsignacionEstado
    asignadaEl?: Date | string
    progresos?: progresosUncheckedCreateNestedManyWithoutEjercicios_asignadosInput
  }

  export type ejercicios_asignadosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracionMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumAsignacionEstadoFieldUpdateOperationsInput | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUpdateOneWithoutEjercicios_asignadosNestedInput
    ejercicios?: ejerciciosUpdateOneRequiredWithoutEjercicios_asignadosNestedInput
    users?: usersUpdateOneRequiredWithoutEjercicios_asignadosNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutEjercicios_asignadosNestedInput
    progresos?: progresosUpdateManyWithoutEjercicios_asignadosNestedInput
  }

  export type ejercicios_asignadosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: StringFieldUpdateOperationsInput | string
    diagnosticoId?: NullableStringFieldUpdateOperationsInput | string | null
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracionMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumAsignacionEstadoFieldUpdateOperationsInput | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFieldUpdateOperationsInput | Date | string
    progresos?: progresosUncheckedUpdateManyWithoutEjercicios_asignadosNestedInput
  }

  export type ejercicios_asignadosCreateManyInput = {
    id: string
    pacienteId: string
    ejercicioId: string
    kinesiologoId: string
    diagnosticoId?: string | null
    objetivo?: string | null
    series?: number
    repeticiones?: number
    frecuencia?: string | null
    duracionMinutos?: number | null
    estado?: $Enums.AsignacionEstado
    asignadaEl?: Date | string
  }

  export type ejercicios_asignadosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracionMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumAsignacionEstadoFieldUpdateOperationsInput | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ejercicios_asignadosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: StringFieldUpdateOperationsInput | string
    diagnosticoId?: NullableStringFieldUpdateOperationsInput | string | null
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracionMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumAsignacionEstadoFieldUpdateOperationsInput | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pacientesCreateInput = {
    id: string
    dni: string
    fechaNacimiento?: Date | string | null
    telefono?: string | null
    recibeRecordatorios?: boolean
    domicilio?: string | null
    obraSocial?: string | null
    createdAt?: Date | string
    email?: string | null
    nombre?: string | null
    diagnosticos?: diagnosticosCreateNestedManyWithoutPacientesInput
    ejercicios_asignados?: ejercicios_asignadosCreateNestedManyWithoutPacientesInput
    users_pacientes_kinesiologoIdTousers?: usersCreateNestedOneWithoutPacientes_pacientes_kinesiologoIdTousersInput
    users_pacientes_userIdTousers?: usersCreateNestedOneWithoutPacientes_pacientes_userIdTousersInput
    progresos?: progresosCreateNestedManyWithoutPacientesInput
    turnos?: turnosCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUncheckedCreateInput = {
    id: string
    userId?: string | null
    kinesiologoId?: string | null
    dni: string
    fechaNacimiento?: Date | string | null
    telefono?: string | null
    recibeRecordatorios?: boolean
    domicilio?: string | null
    obraSocial?: string | null
    createdAt?: Date | string
    email?: string | null
    nombre?: string | null
    diagnosticos?: diagnosticosUncheckedCreateNestedManyWithoutPacientesInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedCreateNestedManyWithoutPacientesInput
    progresos?: progresosUncheckedCreateNestedManyWithoutPacientesInput
    turnos?: turnosUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    recibeRecordatorios?: BoolFieldUpdateOperationsInput | boolean
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    obraSocial?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticos?: diagnosticosUpdateManyWithoutPacientesNestedInput
    ejercicios_asignados?: ejercicios_asignadosUpdateManyWithoutPacientesNestedInput
    users_pacientes_kinesiologoIdTousers?: usersUpdateOneWithoutPacientes_pacientes_kinesiologoIdTousersNestedInput
    users_pacientes_userIdTousers?: usersUpdateOneWithoutPacientes_pacientes_userIdTousersNestedInput
    progresos?: progresosUpdateManyWithoutPacientesNestedInput
    turnos?: turnosUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    kinesiologoId?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    recibeRecordatorios?: BoolFieldUpdateOperationsInput | boolean
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    obraSocial?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticos?: diagnosticosUncheckedUpdateManyWithoutPacientesNestedInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedUpdateManyWithoutPacientesNestedInput
    progresos?: progresosUncheckedUpdateManyWithoutPacientesNestedInput
    turnos?: turnosUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesCreateManyInput = {
    id: string
    userId?: string | null
    kinesiologoId?: string | null
    dni: string
    fechaNacimiento?: Date | string | null
    telefono?: string | null
    recibeRecordatorios?: boolean
    domicilio?: string | null
    obraSocial?: string | null
    createdAt?: Date | string
    email?: string | null
    nombre?: string | null
  }

  export type pacientesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    recibeRecordatorios?: BoolFieldUpdateOperationsInput | boolean
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    obraSocial?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pacientesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    kinesiologoId?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    recibeRecordatorios?: BoolFieldUpdateOperationsInput | boolean
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    obraSocial?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type progresosCreateInput = {
    id: string
    fecha?: Date | string
    completado?: boolean
    seriesRealizadas?: number | null
    repeticionesRealizadas?: number | null
    pesoKg?: number | null
    observaciones?: string | null
    ejercicios_asignados: ejercicios_asignadosCreateNestedOneWithoutProgresosInput
    pacientes: pacientesCreateNestedOneWithoutProgresosInput
    users: usersCreateNestedOneWithoutProgresosInput
  }

  export type progresosUncheckedCreateInput = {
    id: string
    asignacionId: string
    pacienteId: string
    fecha?: Date | string
    completado?: boolean
    seriesRealizadas?: number | null
    repeticionesRealizadas?: number | null
    pesoKg?: number | null
    observaciones?: string | null
    registradoPorUserId: string
  }

  export type progresosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
    seriesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    repeticionesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    pesoKg?: NullableFloatFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    ejercicios_asignados?: ejercicios_asignadosUpdateOneRequiredWithoutProgresosNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutProgresosNestedInput
    users?: usersUpdateOneRequiredWithoutProgresosNestedInput
  }

  export type progresosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    asignacionId?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
    seriesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    repeticionesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    pesoKg?: NullableFloatFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    registradoPorUserId?: StringFieldUpdateOperationsInput | string
  }

  export type progresosCreateManyInput = {
    id: string
    asignacionId: string
    pacienteId: string
    fecha?: Date | string
    completado?: boolean
    seriesRealizadas?: number | null
    repeticionesRealizadas?: number | null
    pesoKg?: number | null
    observaciones?: string | null
    registradoPorUserId: string
  }

  export type progresosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
    seriesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    repeticionesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    pesoKg?: NullableFloatFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type progresosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    asignacionId?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
    seriesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    repeticionesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    pesoKg?: NullableFloatFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    registradoPorUserId?: StringFieldUpdateOperationsInput | string
  }

  export type turnosCreateInput = {
    id: string
    iniciaEn: Date | string
    terminaEn: Date | string
    estado?: $Enums.TurnoEstado
    motivo?: string | null
    notas?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    users: usersCreateNestedOneWithoutTurnosInput
    pacientes: pacientesCreateNestedOneWithoutTurnosInput
  }

  export type turnosUncheckedCreateInput = {
    id: string
    pacienteId: string
    kinesiologoId: string
    iniciaEn: Date | string
    terminaEn: Date | string
    estado?: $Enums.TurnoEstado
    motivo?: string | null
    notas?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type turnosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    iniciaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    terminaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumTurnoEstadoFieldUpdateOperationsInput | $Enums.TurnoEstado
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutTurnosNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutTurnosNestedInput
  }

  export type turnosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: StringFieldUpdateOperationsInput | string
    iniciaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    terminaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumTurnoEstadoFieldUpdateOperationsInput | $Enums.TurnoEstado
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type turnosCreateManyInput = {
    id: string
    pacienteId: string
    kinesiologoId: string
    iniciaEn: Date | string
    terminaEn: Date | string
    estado?: $Enums.TurnoEstado
    motivo?: string | null
    notas?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type turnosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    iniciaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    terminaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumTurnoEstadoFieldUpdateOperationsInput | $Enums.TurnoEstado
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type turnosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: StringFieldUpdateOperationsInput | string
    iniciaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    terminaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumTurnoEstadoFieldUpdateOperationsInput | $Enums.TurnoEstado
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    id: string
    nombre: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    diagnosticos?: diagnosticosCreateNestedManyWithoutUsersInput
    ejercicios?: ejerciciosCreateNestedManyWithoutUsersInput
    ejercicios_asignados?: ejercicios_asignadosCreateNestedManyWithoutUsersInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesCreateNestedManyWithoutUsers_pacientes_kinesiologoIdTousersInput
    pacientes_pacientes_userIdTousers?: pacientesCreateNestedOneWithoutUsers_pacientes_userIdTousersInput
    progresos?: progresosCreateNestedManyWithoutUsersInput
    turnos?: turnosCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id: string
    nombre: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    diagnosticos?: diagnosticosUncheckedCreateNestedManyWithoutUsersInput
    ejercicios?: ejerciciosUncheckedCreateNestedManyWithoutUsersInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedCreateNestedManyWithoutUsersInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUncheckedCreateNestedManyWithoutUsers_pacientes_kinesiologoIdTousersInput
    pacientes_pacientes_userIdTousers?: pacientesUncheckedCreateNestedOneWithoutUsers_pacientes_userIdTousersInput
    progresos?: progresosUncheckedCreateNestedManyWithoutUsersInput
    turnos?: turnosUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUpdateManyWithoutUsersNestedInput
    ejercicios?: ejerciciosUpdateManyWithoutUsersNestedInput
    ejercicios_asignados?: ejercicios_asignadosUpdateManyWithoutUsersNestedInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUpdateManyWithoutUsers_pacientes_kinesiologoIdTousersNestedInput
    pacientes_pacientes_userIdTousers?: pacientesUpdateOneWithoutUsers_pacientes_userIdTousersNestedInput
    progresos?: progresosUpdateManyWithoutUsersNestedInput
    turnos?: turnosUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUncheckedUpdateManyWithoutUsersNestedInput
    ejercicios?: ejerciciosUncheckedUpdateManyWithoutUsersNestedInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedUpdateManyWithoutUsersNestedInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUncheckedUpdateManyWithoutUsers_pacientes_kinesiologoIdTousersNestedInput
    pacientes_pacientes_userIdTousers?: pacientesUncheckedUpdateOneWithoutUsers_pacientes_userIdTousersNestedInput
    progresos?: progresosUncheckedUpdateManyWithoutUsersNestedInput
    turnos?: turnosUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id: string
    nombre: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type PacientesScalarRelationFilter = {
    is?: pacientesWhereInput
    isNot?: pacientesWhereInput
  }

  export type Ejercicios_asignadosListRelationFilter = {
    every?: ejercicios_asignadosWhereInput
    some?: ejercicios_asignadosWhereInput
    none?: ejercicios_asignadosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ejercicios_asignadosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type diagnosticosCountOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    kinesiologoId?: SortOrder
    lesion?: SortOrder
    descripcion?: SortOrder
    tratamiento?: SortOrder
    creadoEl?: SortOrder
    activo?: SortOrder
  }

  export type diagnosticosMaxOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    kinesiologoId?: SortOrder
    lesion?: SortOrder
    descripcion?: SortOrder
    tratamiento?: SortOrder
    creadoEl?: SortOrder
    activo?: SortOrder
  }

  export type diagnosticosMinOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    kinesiologoId?: SortOrder
    lesion?: SortOrder
    descripcion?: SortOrder
    tratamiento?: SortOrder
    creadoEl?: SortOrder
    activo?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ejerciciosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    instrucciones?: SortOrder
    zonaCuerpo?: SortOrder
    nivel?: SortOrder
    creadoPorId?: SortOrder
    creadoEl?: SortOrder
  }

  export type ejerciciosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    instrucciones?: SortOrder
    zonaCuerpo?: SortOrder
    nivel?: SortOrder
    creadoPorId?: SortOrder
    creadoEl?: SortOrder
  }

  export type ejerciciosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    instrucciones?: SortOrder
    zonaCuerpo?: SortOrder
    nivel?: SortOrder
    creadoPorId?: SortOrder
    creadoEl?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumAsignacionEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.AsignacionEstado | EnumAsignacionEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.AsignacionEstado[] | ListEnumAsignacionEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.AsignacionEstado[] | ListEnumAsignacionEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumAsignacionEstadoFilter<$PrismaModel> | $Enums.AsignacionEstado
  }

  export type DiagnosticosNullableScalarRelationFilter = {
    is?: diagnosticosWhereInput | null
    isNot?: diagnosticosWhereInput | null
  }

  export type EjerciciosScalarRelationFilter = {
    is?: ejerciciosWhereInput
    isNot?: ejerciciosWhereInput
  }

  export type ProgresosListRelationFilter = {
    every?: progresosWhereInput
    some?: progresosWhereInput
    none?: progresosWhereInput
  }

  export type progresosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ejercicios_asignadosCountOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    ejercicioId?: SortOrder
    kinesiologoId?: SortOrder
    diagnosticoId?: SortOrder
    objetivo?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    frecuencia?: SortOrder
    duracionMinutos?: SortOrder
    estado?: SortOrder
    asignadaEl?: SortOrder
  }

  export type ejercicios_asignadosAvgOrderByAggregateInput = {
    series?: SortOrder
    repeticiones?: SortOrder
    duracionMinutos?: SortOrder
  }

  export type ejercicios_asignadosMaxOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    ejercicioId?: SortOrder
    kinesiologoId?: SortOrder
    diagnosticoId?: SortOrder
    objetivo?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    frecuencia?: SortOrder
    duracionMinutos?: SortOrder
    estado?: SortOrder
    asignadaEl?: SortOrder
  }

  export type ejercicios_asignadosMinOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    ejercicioId?: SortOrder
    kinesiologoId?: SortOrder
    diagnosticoId?: SortOrder
    objetivo?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    frecuencia?: SortOrder
    duracionMinutos?: SortOrder
    estado?: SortOrder
    asignadaEl?: SortOrder
  }

  export type ejercicios_asignadosSumOrderByAggregateInput = {
    series?: SortOrder
    repeticiones?: SortOrder
    duracionMinutos?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumAsignacionEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AsignacionEstado | EnumAsignacionEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.AsignacionEstado[] | ListEnumAsignacionEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.AsignacionEstado[] | ListEnumAsignacionEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumAsignacionEstadoWithAggregatesFilter<$PrismaModel> | $Enums.AsignacionEstado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAsignacionEstadoFilter<$PrismaModel>
    _max?: NestedEnumAsignacionEstadoFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DiagnosticosListRelationFilter = {
    every?: diagnosticosWhereInput
    some?: diagnosticosWhereInput
    none?: diagnosticosWhereInput
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type TurnosListRelationFilter = {
    every?: turnosWhereInput
    some?: turnosWhereInput
    none?: turnosWhereInput
  }

  export type diagnosticosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type turnosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pacientesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kinesiologoId?: SortOrder
    dni?: SortOrder
    fechaNacimiento?: SortOrder
    telefono?: SortOrder
    recibeRecordatorios?: SortOrder
    domicilio?: SortOrder
    obraSocial?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
  }

  export type pacientesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kinesiologoId?: SortOrder
    dni?: SortOrder
    fechaNacimiento?: SortOrder
    telefono?: SortOrder
    recibeRecordatorios?: SortOrder
    domicilio?: SortOrder
    obraSocial?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
  }

  export type pacientesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kinesiologoId?: SortOrder
    dni?: SortOrder
    fechaNacimiento?: SortOrder
    telefono?: SortOrder
    recibeRecordatorios?: SortOrder
    domicilio?: SortOrder
    obraSocial?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Ejercicios_asignadosScalarRelationFilter = {
    is?: ejercicios_asignadosWhereInput
    isNot?: ejercicios_asignadosWhereInput
  }

  export type progresosCountOrderByAggregateInput = {
    id?: SortOrder
    asignacionId?: SortOrder
    pacienteId?: SortOrder
    fecha?: SortOrder
    completado?: SortOrder
    seriesRealizadas?: SortOrder
    repeticionesRealizadas?: SortOrder
    pesoKg?: SortOrder
    observaciones?: SortOrder
    registradoPorUserId?: SortOrder
  }

  export type progresosAvgOrderByAggregateInput = {
    seriesRealizadas?: SortOrder
    repeticionesRealizadas?: SortOrder
    pesoKg?: SortOrder
  }

  export type progresosMaxOrderByAggregateInput = {
    id?: SortOrder
    asignacionId?: SortOrder
    pacienteId?: SortOrder
    fecha?: SortOrder
    completado?: SortOrder
    seriesRealizadas?: SortOrder
    repeticionesRealizadas?: SortOrder
    pesoKg?: SortOrder
    observaciones?: SortOrder
    registradoPorUserId?: SortOrder
  }

  export type progresosMinOrderByAggregateInput = {
    id?: SortOrder
    asignacionId?: SortOrder
    pacienteId?: SortOrder
    fecha?: SortOrder
    completado?: SortOrder
    seriesRealizadas?: SortOrder
    repeticionesRealizadas?: SortOrder
    pesoKg?: SortOrder
    observaciones?: SortOrder
    registradoPorUserId?: SortOrder
  }

  export type progresosSumOrderByAggregateInput = {
    seriesRealizadas?: SortOrder
    repeticionesRealizadas?: SortOrder
    pesoKg?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumTurnoEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.TurnoEstado | EnumTurnoEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.TurnoEstado[] | ListEnumTurnoEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TurnoEstado[] | ListEnumTurnoEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumTurnoEstadoFilter<$PrismaModel> | $Enums.TurnoEstado
  }

  export type turnosCountOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    kinesiologoId?: SortOrder
    iniciaEn?: SortOrder
    terminaEn?: SortOrder
    estado?: SortOrder
    motivo?: SortOrder
    notas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type turnosMaxOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    kinesiologoId?: SortOrder
    iniciaEn?: SortOrder
    terminaEn?: SortOrder
    estado?: SortOrder
    motivo?: SortOrder
    notas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type turnosMinOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    kinesiologoId?: SortOrder
    iniciaEn?: SortOrder
    terminaEn?: SortOrder
    estado?: SortOrder
    motivo?: SortOrder
    notas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTurnoEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TurnoEstado | EnumTurnoEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.TurnoEstado[] | ListEnumTurnoEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TurnoEstado[] | ListEnumTurnoEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumTurnoEstadoWithAggregatesFilter<$PrismaModel> | $Enums.TurnoEstado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTurnoEstadoFilter<$PrismaModel>
    _max?: NestedEnumTurnoEstadoFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EjerciciosListRelationFilter = {
    every?: ejerciciosWhereInput
    some?: ejerciciosWhereInput
    none?: ejerciciosWhereInput
  }

  export type PacientesListRelationFilter = {
    every?: pacientesWhereInput
    some?: pacientesWhereInput
    none?: pacientesWhereInput
  }

  export type PacientesNullableScalarRelationFilter = {
    is?: pacientesWhereInput | null
    isNot?: pacientesWhereInput | null
  }

  export type ejerciciosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pacientesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type usersCreateNestedOneWithoutDiagnosticosInput = {
    create?: XOR<usersCreateWithoutDiagnosticosInput, usersUncheckedCreateWithoutDiagnosticosInput>
    connectOrCreate?: usersCreateOrConnectWithoutDiagnosticosInput
    connect?: usersWhereUniqueInput
  }

  export type pacientesCreateNestedOneWithoutDiagnosticosInput = {
    create?: XOR<pacientesCreateWithoutDiagnosticosInput, pacientesUncheckedCreateWithoutDiagnosticosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutDiagnosticosInput
    connect?: pacientesWhereUniqueInput
  }

  export type ejercicios_asignadosCreateNestedManyWithoutDiagnosticosInput = {
    create?: XOR<ejercicios_asignadosCreateWithoutDiagnosticosInput, ejercicios_asignadosUncheckedCreateWithoutDiagnosticosInput> | ejercicios_asignadosCreateWithoutDiagnosticosInput[] | ejercicios_asignadosUncheckedCreateWithoutDiagnosticosInput[]
    connectOrCreate?: ejercicios_asignadosCreateOrConnectWithoutDiagnosticosInput | ejercicios_asignadosCreateOrConnectWithoutDiagnosticosInput[]
    createMany?: ejercicios_asignadosCreateManyDiagnosticosInputEnvelope
    connect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
  }

  export type ejercicios_asignadosUncheckedCreateNestedManyWithoutDiagnosticosInput = {
    create?: XOR<ejercicios_asignadosCreateWithoutDiagnosticosInput, ejercicios_asignadosUncheckedCreateWithoutDiagnosticosInput> | ejercicios_asignadosCreateWithoutDiagnosticosInput[] | ejercicios_asignadosUncheckedCreateWithoutDiagnosticosInput[]
    connectOrCreate?: ejercicios_asignadosCreateOrConnectWithoutDiagnosticosInput | ejercicios_asignadosCreateOrConnectWithoutDiagnosticosInput[]
    createMany?: ejercicios_asignadosCreateManyDiagnosticosInputEnvelope
    connect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usersUpdateOneRequiredWithoutDiagnosticosNestedInput = {
    create?: XOR<usersCreateWithoutDiagnosticosInput, usersUncheckedCreateWithoutDiagnosticosInput>
    connectOrCreate?: usersCreateOrConnectWithoutDiagnosticosInput
    upsert?: usersUpsertWithoutDiagnosticosInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutDiagnosticosInput, usersUpdateWithoutDiagnosticosInput>, usersUncheckedUpdateWithoutDiagnosticosInput>
  }

  export type pacientesUpdateOneRequiredWithoutDiagnosticosNestedInput = {
    create?: XOR<pacientesCreateWithoutDiagnosticosInput, pacientesUncheckedCreateWithoutDiagnosticosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutDiagnosticosInput
    upsert?: pacientesUpsertWithoutDiagnosticosInput
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutDiagnosticosInput, pacientesUpdateWithoutDiagnosticosInput>, pacientesUncheckedUpdateWithoutDiagnosticosInput>
  }

  export type ejercicios_asignadosUpdateManyWithoutDiagnosticosNestedInput = {
    create?: XOR<ejercicios_asignadosCreateWithoutDiagnosticosInput, ejercicios_asignadosUncheckedCreateWithoutDiagnosticosInput> | ejercicios_asignadosCreateWithoutDiagnosticosInput[] | ejercicios_asignadosUncheckedCreateWithoutDiagnosticosInput[]
    connectOrCreate?: ejercicios_asignadosCreateOrConnectWithoutDiagnosticosInput | ejercicios_asignadosCreateOrConnectWithoutDiagnosticosInput[]
    upsert?: ejercicios_asignadosUpsertWithWhereUniqueWithoutDiagnosticosInput | ejercicios_asignadosUpsertWithWhereUniqueWithoutDiagnosticosInput[]
    createMany?: ejercicios_asignadosCreateManyDiagnosticosInputEnvelope
    set?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    disconnect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    delete?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    connect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    update?: ejercicios_asignadosUpdateWithWhereUniqueWithoutDiagnosticosInput | ejercicios_asignadosUpdateWithWhereUniqueWithoutDiagnosticosInput[]
    updateMany?: ejercicios_asignadosUpdateManyWithWhereWithoutDiagnosticosInput | ejercicios_asignadosUpdateManyWithWhereWithoutDiagnosticosInput[]
    deleteMany?: ejercicios_asignadosScalarWhereInput | ejercicios_asignadosScalarWhereInput[]
  }

  export type ejercicios_asignadosUncheckedUpdateManyWithoutDiagnosticosNestedInput = {
    create?: XOR<ejercicios_asignadosCreateWithoutDiagnosticosInput, ejercicios_asignadosUncheckedCreateWithoutDiagnosticosInput> | ejercicios_asignadosCreateWithoutDiagnosticosInput[] | ejercicios_asignadosUncheckedCreateWithoutDiagnosticosInput[]
    connectOrCreate?: ejercicios_asignadosCreateOrConnectWithoutDiagnosticosInput | ejercicios_asignadosCreateOrConnectWithoutDiagnosticosInput[]
    upsert?: ejercicios_asignadosUpsertWithWhereUniqueWithoutDiagnosticosInput | ejercicios_asignadosUpsertWithWhereUniqueWithoutDiagnosticosInput[]
    createMany?: ejercicios_asignadosCreateManyDiagnosticosInputEnvelope
    set?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    disconnect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    delete?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    connect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    update?: ejercicios_asignadosUpdateWithWhereUniqueWithoutDiagnosticosInput | ejercicios_asignadosUpdateWithWhereUniqueWithoutDiagnosticosInput[]
    updateMany?: ejercicios_asignadosUpdateManyWithWhereWithoutDiagnosticosInput | ejercicios_asignadosUpdateManyWithWhereWithoutDiagnosticosInput[]
    deleteMany?: ejercicios_asignadosScalarWhereInput | ejercicios_asignadosScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutEjerciciosInput = {
    create?: XOR<usersCreateWithoutEjerciciosInput, usersUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: usersCreateOrConnectWithoutEjerciciosInput
    connect?: usersWhereUniqueInput
  }

  export type ejercicios_asignadosCreateNestedManyWithoutEjerciciosInput = {
    create?: XOR<ejercicios_asignadosCreateWithoutEjerciciosInput, ejercicios_asignadosUncheckedCreateWithoutEjerciciosInput> | ejercicios_asignadosCreateWithoutEjerciciosInput[] | ejercicios_asignadosUncheckedCreateWithoutEjerciciosInput[]
    connectOrCreate?: ejercicios_asignadosCreateOrConnectWithoutEjerciciosInput | ejercicios_asignadosCreateOrConnectWithoutEjerciciosInput[]
    createMany?: ejercicios_asignadosCreateManyEjerciciosInputEnvelope
    connect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
  }

  export type ejercicios_asignadosUncheckedCreateNestedManyWithoutEjerciciosInput = {
    create?: XOR<ejercicios_asignadosCreateWithoutEjerciciosInput, ejercicios_asignadosUncheckedCreateWithoutEjerciciosInput> | ejercicios_asignadosCreateWithoutEjerciciosInput[] | ejercicios_asignadosUncheckedCreateWithoutEjerciciosInput[]
    connectOrCreate?: ejercicios_asignadosCreateOrConnectWithoutEjerciciosInput | ejercicios_asignadosCreateOrConnectWithoutEjerciciosInput[]
    createMany?: ejercicios_asignadosCreateManyEjerciciosInputEnvelope
    connect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutEjerciciosNestedInput = {
    create?: XOR<usersCreateWithoutEjerciciosInput, usersUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: usersCreateOrConnectWithoutEjerciciosInput
    upsert?: usersUpsertWithoutEjerciciosInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutEjerciciosInput, usersUpdateWithoutEjerciciosInput>, usersUncheckedUpdateWithoutEjerciciosInput>
  }

  export type ejercicios_asignadosUpdateManyWithoutEjerciciosNestedInput = {
    create?: XOR<ejercicios_asignadosCreateWithoutEjerciciosInput, ejercicios_asignadosUncheckedCreateWithoutEjerciciosInput> | ejercicios_asignadosCreateWithoutEjerciciosInput[] | ejercicios_asignadosUncheckedCreateWithoutEjerciciosInput[]
    connectOrCreate?: ejercicios_asignadosCreateOrConnectWithoutEjerciciosInput | ejercicios_asignadosCreateOrConnectWithoutEjerciciosInput[]
    upsert?: ejercicios_asignadosUpsertWithWhereUniqueWithoutEjerciciosInput | ejercicios_asignadosUpsertWithWhereUniqueWithoutEjerciciosInput[]
    createMany?: ejercicios_asignadosCreateManyEjerciciosInputEnvelope
    set?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    disconnect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    delete?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    connect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    update?: ejercicios_asignadosUpdateWithWhereUniqueWithoutEjerciciosInput | ejercicios_asignadosUpdateWithWhereUniqueWithoutEjerciciosInput[]
    updateMany?: ejercicios_asignadosUpdateManyWithWhereWithoutEjerciciosInput | ejercicios_asignadosUpdateManyWithWhereWithoutEjerciciosInput[]
    deleteMany?: ejercicios_asignadosScalarWhereInput | ejercicios_asignadosScalarWhereInput[]
  }

  export type ejercicios_asignadosUncheckedUpdateManyWithoutEjerciciosNestedInput = {
    create?: XOR<ejercicios_asignadosCreateWithoutEjerciciosInput, ejercicios_asignadosUncheckedCreateWithoutEjerciciosInput> | ejercicios_asignadosCreateWithoutEjerciciosInput[] | ejercicios_asignadosUncheckedCreateWithoutEjerciciosInput[]
    connectOrCreate?: ejercicios_asignadosCreateOrConnectWithoutEjerciciosInput | ejercicios_asignadosCreateOrConnectWithoutEjerciciosInput[]
    upsert?: ejercicios_asignadosUpsertWithWhereUniqueWithoutEjerciciosInput | ejercicios_asignadosUpsertWithWhereUniqueWithoutEjerciciosInput[]
    createMany?: ejercicios_asignadosCreateManyEjerciciosInputEnvelope
    set?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    disconnect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    delete?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    connect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    update?: ejercicios_asignadosUpdateWithWhereUniqueWithoutEjerciciosInput | ejercicios_asignadosUpdateWithWhereUniqueWithoutEjerciciosInput[]
    updateMany?: ejercicios_asignadosUpdateManyWithWhereWithoutEjerciciosInput | ejercicios_asignadosUpdateManyWithWhereWithoutEjerciciosInput[]
    deleteMany?: ejercicios_asignadosScalarWhereInput | ejercicios_asignadosScalarWhereInput[]
  }

  export type diagnosticosCreateNestedOneWithoutEjercicios_asignadosInput = {
    create?: XOR<diagnosticosCreateWithoutEjercicios_asignadosInput, diagnosticosUncheckedCreateWithoutEjercicios_asignadosInput>
    connectOrCreate?: diagnosticosCreateOrConnectWithoutEjercicios_asignadosInput
    connect?: diagnosticosWhereUniqueInput
  }

  export type ejerciciosCreateNestedOneWithoutEjercicios_asignadosInput = {
    create?: XOR<ejerciciosCreateWithoutEjercicios_asignadosInput, ejerciciosUncheckedCreateWithoutEjercicios_asignadosInput>
    connectOrCreate?: ejerciciosCreateOrConnectWithoutEjercicios_asignadosInput
    connect?: ejerciciosWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutEjercicios_asignadosInput = {
    create?: XOR<usersCreateWithoutEjercicios_asignadosInput, usersUncheckedCreateWithoutEjercicios_asignadosInput>
    connectOrCreate?: usersCreateOrConnectWithoutEjercicios_asignadosInput
    connect?: usersWhereUniqueInput
  }

  export type pacientesCreateNestedOneWithoutEjercicios_asignadosInput = {
    create?: XOR<pacientesCreateWithoutEjercicios_asignadosInput, pacientesUncheckedCreateWithoutEjercicios_asignadosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutEjercicios_asignadosInput
    connect?: pacientesWhereUniqueInput
  }

  export type progresosCreateNestedManyWithoutEjercicios_asignadosInput = {
    create?: XOR<progresosCreateWithoutEjercicios_asignadosInput, progresosUncheckedCreateWithoutEjercicios_asignadosInput> | progresosCreateWithoutEjercicios_asignadosInput[] | progresosUncheckedCreateWithoutEjercicios_asignadosInput[]
    connectOrCreate?: progresosCreateOrConnectWithoutEjercicios_asignadosInput | progresosCreateOrConnectWithoutEjercicios_asignadosInput[]
    createMany?: progresosCreateManyEjercicios_asignadosInputEnvelope
    connect?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
  }

  export type progresosUncheckedCreateNestedManyWithoutEjercicios_asignadosInput = {
    create?: XOR<progresosCreateWithoutEjercicios_asignadosInput, progresosUncheckedCreateWithoutEjercicios_asignadosInput> | progresosCreateWithoutEjercicios_asignadosInput[] | progresosUncheckedCreateWithoutEjercicios_asignadosInput[]
    connectOrCreate?: progresosCreateOrConnectWithoutEjercicios_asignadosInput | progresosCreateOrConnectWithoutEjercicios_asignadosInput[]
    createMany?: progresosCreateManyEjercicios_asignadosInputEnvelope
    connect?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAsignacionEstadoFieldUpdateOperationsInput = {
    set?: $Enums.AsignacionEstado
  }

  export type diagnosticosUpdateOneWithoutEjercicios_asignadosNestedInput = {
    create?: XOR<diagnosticosCreateWithoutEjercicios_asignadosInput, diagnosticosUncheckedCreateWithoutEjercicios_asignadosInput>
    connectOrCreate?: diagnosticosCreateOrConnectWithoutEjercicios_asignadosInput
    upsert?: diagnosticosUpsertWithoutEjercicios_asignadosInput
    disconnect?: diagnosticosWhereInput | boolean
    delete?: diagnosticosWhereInput | boolean
    connect?: diagnosticosWhereUniqueInput
    update?: XOR<XOR<diagnosticosUpdateToOneWithWhereWithoutEjercicios_asignadosInput, diagnosticosUpdateWithoutEjercicios_asignadosInput>, diagnosticosUncheckedUpdateWithoutEjercicios_asignadosInput>
  }

  export type ejerciciosUpdateOneRequiredWithoutEjercicios_asignadosNestedInput = {
    create?: XOR<ejerciciosCreateWithoutEjercicios_asignadosInput, ejerciciosUncheckedCreateWithoutEjercicios_asignadosInput>
    connectOrCreate?: ejerciciosCreateOrConnectWithoutEjercicios_asignadosInput
    upsert?: ejerciciosUpsertWithoutEjercicios_asignadosInput
    connect?: ejerciciosWhereUniqueInput
    update?: XOR<XOR<ejerciciosUpdateToOneWithWhereWithoutEjercicios_asignadosInput, ejerciciosUpdateWithoutEjercicios_asignadosInput>, ejerciciosUncheckedUpdateWithoutEjercicios_asignadosInput>
  }

  export type usersUpdateOneRequiredWithoutEjercicios_asignadosNestedInput = {
    create?: XOR<usersCreateWithoutEjercicios_asignadosInput, usersUncheckedCreateWithoutEjercicios_asignadosInput>
    connectOrCreate?: usersCreateOrConnectWithoutEjercicios_asignadosInput
    upsert?: usersUpsertWithoutEjercicios_asignadosInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutEjercicios_asignadosInput, usersUpdateWithoutEjercicios_asignadosInput>, usersUncheckedUpdateWithoutEjercicios_asignadosInput>
  }

  export type pacientesUpdateOneRequiredWithoutEjercicios_asignadosNestedInput = {
    create?: XOR<pacientesCreateWithoutEjercicios_asignadosInput, pacientesUncheckedCreateWithoutEjercicios_asignadosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutEjercicios_asignadosInput
    upsert?: pacientesUpsertWithoutEjercicios_asignadosInput
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutEjercicios_asignadosInput, pacientesUpdateWithoutEjercicios_asignadosInput>, pacientesUncheckedUpdateWithoutEjercicios_asignadosInput>
  }

  export type progresosUpdateManyWithoutEjercicios_asignadosNestedInput = {
    create?: XOR<progresosCreateWithoutEjercicios_asignadosInput, progresosUncheckedCreateWithoutEjercicios_asignadosInput> | progresosCreateWithoutEjercicios_asignadosInput[] | progresosUncheckedCreateWithoutEjercicios_asignadosInput[]
    connectOrCreate?: progresosCreateOrConnectWithoutEjercicios_asignadosInput | progresosCreateOrConnectWithoutEjercicios_asignadosInput[]
    upsert?: progresosUpsertWithWhereUniqueWithoutEjercicios_asignadosInput | progresosUpsertWithWhereUniqueWithoutEjercicios_asignadosInput[]
    createMany?: progresosCreateManyEjercicios_asignadosInputEnvelope
    set?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    disconnect?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    delete?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    connect?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    update?: progresosUpdateWithWhereUniqueWithoutEjercicios_asignadosInput | progresosUpdateWithWhereUniqueWithoutEjercicios_asignadosInput[]
    updateMany?: progresosUpdateManyWithWhereWithoutEjercicios_asignadosInput | progresosUpdateManyWithWhereWithoutEjercicios_asignadosInput[]
    deleteMany?: progresosScalarWhereInput | progresosScalarWhereInput[]
  }

  export type progresosUncheckedUpdateManyWithoutEjercicios_asignadosNestedInput = {
    create?: XOR<progresosCreateWithoutEjercicios_asignadosInput, progresosUncheckedCreateWithoutEjercicios_asignadosInput> | progresosCreateWithoutEjercicios_asignadosInput[] | progresosUncheckedCreateWithoutEjercicios_asignadosInput[]
    connectOrCreate?: progresosCreateOrConnectWithoutEjercicios_asignadosInput | progresosCreateOrConnectWithoutEjercicios_asignadosInput[]
    upsert?: progresosUpsertWithWhereUniqueWithoutEjercicios_asignadosInput | progresosUpsertWithWhereUniqueWithoutEjercicios_asignadosInput[]
    createMany?: progresosCreateManyEjercicios_asignadosInputEnvelope
    set?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    disconnect?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    delete?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    connect?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    update?: progresosUpdateWithWhereUniqueWithoutEjercicios_asignadosInput | progresosUpdateWithWhereUniqueWithoutEjercicios_asignadosInput[]
    updateMany?: progresosUpdateManyWithWhereWithoutEjercicios_asignadosInput | progresosUpdateManyWithWhereWithoutEjercicios_asignadosInput[]
    deleteMany?: progresosScalarWhereInput | progresosScalarWhereInput[]
  }

  export type diagnosticosCreateNestedManyWithoutPacientesInput = {
    create?: XOR<diagnosticosCreateWithoutPacientesInput, diagnosticosUncheckedCreateWithoutPacientesInput> | diagnosticosCreateWithoutPacientesInput[] | diagnosticosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: diagnosticosCreateOrConnectWithoutPacientesInput | diagnosticosCreateOrConnectWithoutPacientesInput[]
    createMany?: diagnosticosCreateManyPacientesInputEnvelope
    connect?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
  }

  export type ejercicios_asignadosCreateNestedManyWithoutPacientesInput = {
    create?: XOR<ejercicios_asignadosCreateWithoutPacientesInput, ejercicios_asignadosUncheckedCreateWithoutPacientesInput> | ejercicios_asignadosCreateWithoutPacientesInput[] | ejercicios_asignadosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: ejercicios_asignadosCreateOrConnectWithoutPacientesInput | ejercicios_asignadosCreateOrConnectWithoutPacientesInput[]
    createMany?: ejercicios_asignadosCreateManyPacientesInputEnvelope
    connect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutPacientes_pacientes_kinesiologoIdTousersInput = {
    create?: XOR<usersCreateWithoutPacientes_pacientes_kinesiologoIdTousersInput, usersUncheckedCreateWithoutPacientes_pacientes_kinesiologoIdTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutPacientes_pacientes_kinesiologoIdTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutPacientes_pacientes_userIdTousersInput = {
    create?: XOR<usersCreateWithoutPacientes_pacientes_userIdTousersInput, usersUncheckedCreateWithoutPacientes_pacientes_userIdTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutPacientes_pacientes_userIdTousersInput
    connect?: usersWhereUniqueInput
  }

  export type progresosCreateNestedManyWithoutPacientesInput = {
    create?: XOR<progresosCreateWithoutPacientesInput, progresosUncheckedCreateWithoutPacientesInput> | progresosCreateWithoutPacientesInput[] | progresosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: progresosCreateOrConnectWithoutPacientesInput | progresosCreateOrConnectWithoutPacientesInput[]
    createMany?: progresosCreateManyPacientesInputEnvelope
    connect?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
  }

  export type turnosCreateNestedManyWithoutPacientesInput = {
    create?: XOR<turnosCreateWithoutPacientesInput, turnosUncheckedCreateWithoutPacientesInput> | turnosCreateWithoutPacientesInput[] | turnosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: turnosCreateOrConnectWithoutPacientesInput | turnosCreateOrConnectWithoutPacientesInput[]
    createMany?: turnosCreateManyPacientesInputEnvelope
    connect?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
  }

  export type diagnosticosUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: XOR<diagnosticosCreateWithoutPacientesInput, diagnosticosUncheckedCreateWithoutPacientesInput> | diagnosticosCreateWithoutPacientesInput[] | diagnosticosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: diagnosticosCreateOrConnectWithoutPacientesInput | diagnosticosCreateOrConnectWithoutPacientesInput[]
    createMany?: diagnosticosCreateManyPacientesInputEnvelope
    connect?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
  }

  export type ejercicios_asignadosUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: XOR<ejercicios_asignadosCreateWithoutPacientesInput, ejercicios_asignadosUncheckedCreateWithoutPacientesInput> | ejercicios_asignadosCreateWithoutPacientesInput[] | ejercicios_asignadosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: ejercicios_asignadosCreateOrConnectWithoutPacientesInput | ejercicios_asignadosCreateOrConnectWithoutPacientesInput[]
    createMany?: ejercicios_asignadosCreateManyPacientesInputEnvelope
    connect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
  }

  export type progresosUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: XOR<progresosCreateWithoutPacientesInput, progresosUncheckedCreateWithoutPacientesInput> | progresosCreateWithoutPacientesInput[] | progresosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: progresosCreateOrConnectWithoutPacientesInput | progresosCreateOrConnectWithoutPacientesInput[]
    createMany?: progresosCreateManyPacientesInputEnvelope
    connect?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
  }

  export type turnosUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: XOR<turnosCreateWithoutPacientesInput, turnosUncheckedCreateWithoutPacientesInput> | turnosCreateWithoutPacientesInput[] | turnosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: turnosCreateOrConnectWithoutPacientesInput | turnosCreateOrConnectWithoutPacientesInput[]
    createMany?: turnosCreateManyPacientesInputEnvelope
    connect?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type diagnosticosUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<diagnosticosCreateWithoutPacientesInput, diagnosticosUncheckedCreateWithoutPacientesInput> | diagnosticosCreateWithoutPacientesInput[] | diagnosticosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: diagnosticosCreateOrConnectWithoutPacientesInput | diagnosticosCreateOrConnectWithoutPacientesInput[]
    upsert?: diagnosticosUpsertWithWhereUniqueWithoutPacientesInput | diagnosticosUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: diagnosticosCreateManyPacientesInputEnvelope
    set?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
    disconnect?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
    delete?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
    connect?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
    update?: diagnosticosUpdateWithWhereUniqueWithoutPacientesInput | diagnosticosUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: diagnosticosUpdateManyWithWhereWithoutPacientesInput | diagnosticosUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: diagnosticosScalarWhereInput | diagnosticosScalarWhereInput[]
  }

  export type ejercicios_asignadosUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<ejercicios_asignadosCreateWithoutPacientesInput, ejercicios_asignadosUncheckedCreateWithoutPacientesInput> | ejercicios_asignadosCreateWithoutPacientesInput[] | ejercicios_asignadosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: ejercicios_asignadosCreateOrConnectWithoutPacientesInput | ejercicios_asignadosCreateOrConnectWithoutPacientesInput[]
    upsert?: ejercicios_asignadosUpsertWithWhereUniqueWithoutPacientesInput | ejercicios_asignadosUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: ejercicios_asignadosCreateManyPacientesInputEnvelope
    set?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    disconnect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    delete?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    connect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    update?: ejercicios_asignadosUpdateWithWhereUniqueWithoutPacientesInput | ejercicios_asignadosUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: ejercicios_asignadosUpdateManyWithWhereWithoutPacientesInput | ejercicios_asignadosUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: ejercicios_asignadosScalarWhereInput | ejercicios_asignadosScalarWhereInput[]
  }

  export type usersUpdateOneWithoutPacientes_pacientes_kinesiologoIdTousersNestedInput = {
    create?: XOR<usersCreateWithoutPacientes_pacientes_kinesiologoIdTousersInput, usersUncheckedCreateWithoutPacientes_pacientes_kinesiologoIdTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutPacientes_pacientes_kinesiologoIdTousersInput
    upsert?: usersUpsertWithoutPacientes_pacientes_kinesiologoIdTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPacientes_pacientes_kinesiologoIdTousersInput, usersUpdateWithoutPacientes_pacientes_kinesiologoIdTousersInput>, usersUncheckedUpdateWithoutPacientes_pacientes_kinesiologoIdTousersInput>
  }

  export type usersUpdateOneWithoutPacientes_pacientes_userIdTousersNestedInput = {
    create?: XOR<usersCreateWithoutPacientes_pacientes_userIdTousersInput, usersUncheckedCreateWithoutPacientes_pacientes_userIdTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutPacientes_pacientes_userIdTousersInput
    upsert?: usersUpsertWithoutPacientes_pacientes_userIdTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPacientes_pacientes_userIdTousersInput, usersUpdateWithoutPacientes_pacientes_userIdTousersInput>, usersUncheckedUpdateWithoutPacientes_pacientes_userIdTousersInput>
  }

  export type progresosUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<progresosCreateWithoutPacientesInput, progresosUncheckedCreateWithoutPacientesInput> | progresosCreateWithoutPacientesInput[] | progresosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: progresosCreateOrConnectWithoutPacientesInput | progresosCreateOrConnectWithoutPacientesInput[]
    upsert?: progresosUpsertWithWhereUniqueWithoutPacientesInput | progresosUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: progresosCreateManyPacientesInputEnvelope
    set?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    disconnect?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    delete?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    connect?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    update?: progresosUpdateWithWhereUniqueWithoutPacientesInput | progresosUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: progresosUpdateManyWithWhereWithoutPacientesInput | progresosUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: progresosScalarWhereInput | progresosScalarWhereInput[]
  }

  export type turnosUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<turnosCreateWithoutPacientesInput, turnosUncheckedCreateWithoutPacientesInput> | turnosCreateWithoutPacientesInput[] | turnosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: turnosCreateOrConnectWithoutPacientesInput | turnosCreateOrConnectWithoutPacientesInput[]
    upsert?: turnosUpsertWithWhereUniqueWithoutPacientesInput | turnosUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: turnosCreateManyPacientesInputEnvelope
    set?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
    disconnect?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
    delete?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
    connect?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
    update?: turnosUpdateWithWhereUniqueWithoutPacientesInput | turnosUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: turnosUpdateManyWithWhereWithoutPacientesInput | turnosUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: turnosScalarWhereInput | turnosScalarWhereInput[]
  }

  export type diagnosticosUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<diagnosticosCreateWithoutPacientesInput, diagnosticosUncheckedCreateWithoutPacientesInput> | diagnosticosCreateWithoutPacientesInput[] | diagnosticosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: diagnosticosCreateOrConnectWithoutPacientesInput | diagnosticosCreateOrConnectWithoutPacientesInput[]
    upsert?: diagnosticosUpsertWithWhereUniqueWithoutPacientesInput | diagnosticosUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: diagnosticosCreateManyPacientesInputEnvelope
    set?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
    disconnect?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
    delete?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
    connect?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
    update?: diagnosticosUpdateWithWhereUniqueWithoutPacientesInput | diagnosticosUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: diagnosticosUpdateManyWithWhereWithoutPacientesInput | diagnosticosUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: diagnosticosScalarWhereInput | diagnosticosScalarWhereInput[]
  }

  export type ejercicios_asignadosUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<ejercicios_asignadosCreateWithoutPacientesInput, ejercicios_asignadosUncheckedCreateWithoutPacientesInput> | ejercicios_asignadosCreateWithoutPacientesInput[] | ejercicios_asignadosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: ejercicios_asignadosCreateOrConnectWithoutPacientesInput | ejercicios_asignadosCreateOrConnectWithoutPacientesInput[]
    upsert?: ejercicios_asignadosUpsertWithWhereUniqueWithoutPacientesInput | ejercicios_asignadosUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: ejercicios_asignadosCreateManyPacientesInputEnvelope
    set?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    disconnect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    delete?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    connect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    update?: ejercicios_asignadosUpdateWithWhereUniqueWithoutPacientesInput | ejercicios_asignadosUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: ejercicios_asignadosUpdateManyWithWhereWithoutPacientesInput | ejercicios_asignadosUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: ejercicios_asignadosScalarWhereInput | ejercicios_asignadosScalarWhereInput[]
  }

  export type progresosUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<progresosCreateWithoutPacientesInput, progresosUncheckedCreateWithoutPacientesInput> | progresosCreateWithoutPacientesInput[] | progresosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: progresosCreateOrConnectWithoutPacientesInput | progresosCreateOrConnectWithoutPacientesInput[]
    upsert?: progresosUpsertWithWhereUniqueWithoutPacientesInput | progresosUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: progresosCreateManyPacientesInputEnvelope
    set?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    disconnect?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    delete?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    connect?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    update?: progresosUpdateWithWhereUniqueWithoutPacientesInput | progresosUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: progresosUpdateManyWithWhereWithoutPacientesInput | progresosUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: progresosScalarWhereInput | progresosScalarWhereInput[]
  }

  export type turnosUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<turnosCreateWithoutPacientesInput, turnosUncheckedCreateWithoutPacientesInput> | turnosCreateWithoutPacientesInput[] | turnosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: turnosCreateOrConnectWithoutPacientesInput | turnosCreateOrConnectWithoutPacientesInput[]
    upsert?: turnosUpsertWithWhereUniqueWithoutPacientesInput | turnosUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: turnosCreateManyPacientesInputEnvelope
    set?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
    disconnect?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
    delete?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
    connect?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
    update?: turnosUpdateWithWhereUniqueWithoutPacientesInput | turnosUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: turnosUpdateManyWithWhereWithoutPacientesInput | turnosUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: turnosScalarWhereInput | turnosScalarWhereInput[]
  }

  export type ejercicios_asignadosCreateNestedOneWithoutProgresosInput = {
    create?: XOR<ejercicios_asignadosCreateWithoutProgresosInput, ejercicios_asignadosUncheckedCreateWithoutProgresosInput>
    connectOrCreate?: ejercicios_asignadosCreateOrConnectWithoutProgresosInput
    connect?: ejercicios_asignadosWhereUniqueInput
  }

  export type pacientesCreateNestedOneWithoutProgresosInput = {
    create?: XOR<pacientesCreateWithoutProgresosInput, pacientesUncheckedCreateWithoutProgresosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutProgresosInput
    connect?: pacientesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutProgresosInput = {
    create?: XOR<usersCreateWithoutProgresosInput, usersUncheckedCreateWithoutProgresosInput>
    connectOrCreate?: usersCreateOrConnectWithoutProgresosInput
    connect?: usersWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ejercicios_asignadosUpdateOneRequiredWithoutProgresosNestedInput = {
    create?: XOR<ejercicios_asignadosCreateWithoutProgresosInput, ejercicios_asignadosUncheckedCreateWithoutProgresosInput>
    connectOrCreate?: ejercicios_asignadosCreateOrConnectWithoutProgresosInput
    upsert?: ejercicios_asignadosUpsertWithoutProgresosInput
    connect?: ejercicios_asignadosWhereUniqueInput
    update?: XOR<XOR<ejercicios_asignadosUpdateToOneWithWhereWithoutProgresosInput, ejercicios_asignadosUpdateWithoutProgresosInput>, ejercicios_asignadosUncheckedUpdateWithoutProgresosInput>
  }

  export type pacientesUpdateOneRequiredWithoutProgresosNestedInput = {
    create?: XOR<pacientesCreateWithoutProgresosInput, pacientesUncheckedCreateWithoutProgresosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutProgresosInput
    upsert?: pacientesUpsertWithoutProgresosInput
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutProgresosInput, pacientesUpdateWithoutProgresosInput>, pacientesUncheckedUpdateWithoutProgresosInput>
  }

  export type usersUpdateOneRequiredWithoutProgresosNestedInput = {
    create?: XOR<usersCreateWithoutProgresosInput, usersUncheckedCreateWithoutProgresosInput>
    connectOrCreate?: usersCreateOrConnectWithoutProgresosInput
    upsert?: usersUpsertWithoutProgresosInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProgresosInput, usersUpdateWithoutProgresosInput>, usersUncheckedUpdateWithoutProgresosInput>
  }

  export type usersCreateNestedOneWithoutTurnosInput = {
    create?: XOR<usersCreateWithoutTurnosInput, usersUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: usersCreateOrConnectWithoutTurnosInput
    connect?: usersWhereUniqueInput
  }

  export type pacientesCreateNestedOneWithoutTurnosInput = {
    create?: XOR<pacientesCreateWithoutTurnosInput, pacientesUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutTurnosInput
    connect?: pacientesWhereUniqueInput
  }

  export type EnumTurnoEstadoFieldUpdateOperationsInput = {
    set?: $Enums.TurnoEstado
  }

  export type usersUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: XOR<usersCreateWithoutTurnosInput, usersUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: usersCreateOrConnectWithoutTurnosInput
    upsert?: usersUpsertWithoutTurnosInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTurnosInput, usersUpdateWithoutTurnosInput>, usersUncheckedUpdateWithoutTurnosInput>
  }

  export type pacientesUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: XOR<pacientesCreateWithoutTurnosInput, pacientesUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutTurnosInput
    upsert?: pacientesUpsertWithoutTurnosInput
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutTurnosInput, pacientesUpdateWithoutTurnosInput>, pacientesUncheckedUpdateWithoutTurnosInput>
  }

  export type diagnosticosCreateNestedManyWithoutUsersInput = {
    create?: XOR<diagnosticosCreateWithoutUsersInput, diagnosticosUncheckedCreateWithoutUsersInput> | diagnosticosCreateWithoutUsersInput[] | diagnosticosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: diagnosticosCreateOrConnectWithoutUsersInput | diagnosticosCreateOrConnectWithoutUsersInput[]
    createMany?: diagnosticosCreateManyUsersInputEnvelope
    connect?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
  }

  export type ejerciciosCreateNestedManyWithoutUsersInput = {
    create?: XOR<ejerciciosCreateWithoutUsersInput, ejerciciosUncheckedCreateWithoutUsersInput> | ejerciciosCreateWithoutUsersInput[] | ejerciciosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ejerciciosCreateOrConnectWithoutUsersInput | ejerciciosCreateOrConnectWithoutUsersInput[]
    createMany?: ejerciciosCreateManyUsersInputEnvelope
    connect?: ejerciciosWhereUniqueInput | ejerciciosWhereUniqueInput[]
  }

  export type ejercicios_asignadosCreateNestedManyWithoutUsersInput = {
    create?: XOR<ejercicios_asignadosCreateWithoutUsersInput, ejercicios_asignadosUncheckedCreateWithoutUsersInput> | ejercicios_asignadosCreateWithoutUsersInput[] | ejercicios_asignadosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ejercicios_asignadosCreateOrConnectWithoutUsersInput | ejercicios_asignadosCreateOrConnectWithoutUsersInput[]
    createMany?: ejercicios_asignadosCreateManyUsersInputEnvelope
    connect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
  }

  export type pacientesCreateNestedManyWithoutUsers_pacientes_kinesiologoIdTousersInput = {
    create?: XOR<pacientesCreateWithoutUsers_pacientes_kinesiologoIdTousersInput, pacientesUncheckedCreateWithoutUsers_pacientes_kinesiologoIdTousersInput> | pacientesCreateWithoutUsers_pacientes_kinesiologoIdTousersInput[] | pacientesUncheckedCreateWithoutUsers_pacientes_kinesiologoIdTousersInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutUsers_pacientes_kinesiologoIdTousersInput | pacientesCreateOrConnectWithoutUsers_pacientes_kinesiologoIdTousersInput[]
    createMany?: pacientesCreateManyUsers_pacientes_kinesiologoIdTousersInputEnvelope
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
  }

  export type pacientesCreateNestedOneWithoutUsers_pacientes_userIdTousersInput = {
    create?: XOR<pacientesCreateWithoutUsers_pacientes_userIdTousersInput, pacientesUncheckedCreateWithoutUsers_pacientes_userIdTousersInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutUsers_pacientes_userIdTousersInput
    connect?: pacientesWhereUniqueInput
  }

  export type progresosCreateNestedManyWithoutUsersInput = {
    create?: XOR<progresosCreateWithoutUsersInput, progresosUncheckedCreateWithoutUsersInput> | progresosCreateWithoutUsersInput[] | progresosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: progresosCreateOrConnectWithoutUsersInput | progresosCreateOrConnectWithoutUsersInput[]
    createMany?: progresosCreateManyUsersInputEnvelope
    connect?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
  }

  export type turnosCreateNestedManyWithoutUsersInput = {
    create?: XOR<turnosCreateWithoutUsersInput, turnosUncheckedCreateWithoutUsersInput> | turnosCreateWithoutUsersInput[] | turnosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: turnosCreateOrConnectWithoutUsersInput | turnosCreateOrConnectWithoutUsersInput[]
    createMany?: turnosCreateManyUsersInputEnvelope
    connect?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
  }

  export type diagnosticosUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<diagnosticosCreateWithoutUsersInput, diagnosticosUncheckedCreateWithoutUsersInput> | diagnosticosCreateWithoutUsersInput[] | diagnosticosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: diagnosticosCreateOrConnectWithoutUsersInput | diagnosticosCreateOrConnectWithoutUsersInput[]
    createMany?: diagnosticosCreateManyUsersInputEnvelope
    connect?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
  }

  export type ejerciciosUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ejerciciosCreateWithoutUsersInput, ejerciciosUncheckedCreateWithoutUsersInput> | ejerciciosCreateWithoutUsersInput[] | ejerciciosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ejerciciosCreateOrConnectWithoutUsersInput | ejerciciosCreateOrConnectWithoutUsersInput[]
    createMany?: ejerciciosCreateManyUsersInputEnvelope
    connect?: ejerciciosWhereUniqueInput | ejerciciosWhereUniqueInput[]
  }

  export type ejercicios_asignadosUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ejercicios_asignadosCreateWithoutUsersInput, ejercicios_asignadosUncheckedCreateWithoutUsersInput> | ejercicios_asignadosCreateWithoutUsersInput[] | ejercicios_asignadosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ejercicios_asignadosCreateOrConnectWithoutUsersInput | ejercicios_asignadosCreateOrConnectWithoutUsersInput[]
    createMany?: ejercicios_asignadosCreateManyUsersInputEnvelope
    connect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
  }

  export type pacientesUncheckedCreateNestedManyWithoutUsers_pacientes_kinesiologoIdTousersInput = {
    create?: XOR<pacientesCreateWithoutUsers_pacientes_kinesiologoIdTousersInput, pacientesUncheckedCreateWithoutUsers_pacientes_kinesiologoIdTousersInput> | pacientesCreateWithoutUsers_pacientes_kinesiologoIdTousersInput[] | pacientesUncheckedCreateWithoutUsers_pacientes_kinesiologoIdTousersInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutUsers_pacientes_kinesiologoIdTousersInput | pacientesCreateOrConnectWithoutUsers_pacientes_kinesiologoIdTousersInput[]
    createMany?: pacientesCreateManyUsers_pacientes_kinesiologoIdTousersInputEnvelope
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
  }

  export type pacientesUncheckedCreateNestedOneWithoutUsers_pacientes_userIdTousersInput = {
    create?: XOR<pacientesCreateWithoutUsers_pacientes_userIdTousersInput, pacientesUncheckedCreateWithoutUsers_pacientes_userIdTousersInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutUsers_pacientes_userIdTousersInput
    connect?: pacientesWhereUniqueInput
  }

  export type progresosUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<progresosCreateWithoutUsersInput, progresosUncheckedCreateWithoutUsersInput> | progresosCreateWithoutUsersInput[] | progresosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: progresosCreateOrConnectWithoutUsersInput | progresosCreateOrConnectWithoutUsersInput[]
    createMany?: progresosCreateManyUsersInputEnvelope
    connect?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
  }

  export type turnosUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<turnosCreateWithoutUsersInput, turnosUncheckedCreateWithoutUsersInput> | turnosCreateWithoutUsersInput[] | turnosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: turnosCreateOrConnectWithoutUsersInput | turnosCreateOrConnectWithoutUsersInput[]
    createMany?: turnosCreateManyUsersInputEnvelope
    connect?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type diagnosticosUpdateManyWithoutUsersNestedInput = {
    create?: XOR<diagnosticosCreateWithoutUsersInput, diagnosticosUncheckedCreateWithoutUsersInput> | diagnosticosCreateWithoutUsersInput[] | diagnosticosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: diagnosticosCreateOrConnectWithoutUsersInput | diagnosticosCreateOrConnectWithoutUsersInput[]
    upsert?: diagnosticosUpsertWithWhereUniqueWithoutUsersInput | diagnosticosUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: diagnosticosCreateManyUsersInputEnvelope
    set?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
    disconnect?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
    delete?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
    connect?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
    update?: diagnosticosUpdateWithWhereUniqueWithoutUsersInput | diagnosticosUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: diagnosticosUpdateManyWithWhereWithoutUsersInput | diagnosticosUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: diagnosticosScalarWhereInput | diagnosticosScalarWhereInput[]
  }

  export type ejerciciosUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ejerciciosCreateWithoutUsersInput, ejerciciosUncheckedCreateWithoutUsersInput> | ejerciciosCreateWithoutUsersInput[] | ejerciciosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ejerciciosCreateOrConnectWithoutUsersInput | ejerciciosCreateOrConnectWithoutUsersInput[]
    upsert?: ejerciciosUpsertWithWhereUniqueWithoutUsersInput | ejerciciosUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ejerciciosCreateManyUsersInputEnvelope
    set?: ejerciciosWhereUniqueInput | ejerciciosWhereUniqueInput[]
    disconnect?: ejerciciosWhereUniqueInput | ejerciciosWhereUniqueInput[]
    delete?: ejerciciosWhereUniqueInput | ejerciciosWhereUniqueInput[]
    connect?: ejerciciosWhereUniqueInput | ejerciciosWhereUniqueInput[]
    update?: ejerciciosUpdateWithWhereUniqueWithoutUsersInput | ejerciciosUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ejerciciosUpdateManyWithWhereWithoutUsersInput | ejerciciosUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ejerciciosScalarWhereInput | ejerciciosScalarWhereInput[]
  }

  export type ejercicios_asignadosUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ejercicios_asignadosCreateWithoutUsersInput, ejercicios_asignadosUncheckedCreateWithoutUsersInput> | ejercicios_asignadosCreateWithoutUsersInput[] | ejercicios_asignadosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ejercicios_asignadosCreateOrConnectWithoutUsersInput | ejercicios_asignadosCreateOrConnectWithoutUsersInput[]
    upsert?: ejercicios_asignadosUpsertWithWhereUniqueWithoutUsersInput | ejercicios_asignadosUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ejercicios_asignadosCreateManyUsersInputEnvelope
    set?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    disconnect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    delete?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    connect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    update?: ejercicios_asignadosUpdateWithWhereUniqueWithoutUsersInput | ejercicios_asignadosUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ejercicios_asignadosUpdateManyWithWhereWithoutUsersInput | ejercicios_asignadosUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ejercicios_asignadosScalarWhereInput | ejercicios_asignadosScalarWhereInput[]
  }

  export type pacientesUpdateManyWithoutUsers_pacientes_kinesiologoIdTousersNestedInput = {
    create?: XOR<pacientesCreateWithoutUsers_pacientes_kinesiologoIdTousersInput, pacientesUncheckedCreateWithoutUsers_pacientes_kinesiologoIdTousersInput> | pacientesCreateWithoutUsers_pacientes_kinesiologoIdTousersInput[] | pacientesUncheckedCreateWithoutUsers_pacientes_kinesiologoIdTousersInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutUsers_pacientes_kinesiologoIdTousersInput | pacientesCreateOrConnectWithoutUsers_pacientes_kinesiologoIdTousersInput[]
    upsert?: pacientesUpsertWithWhereUniqueWithoutUsers_pacientes_kinesiologoIdTousersInput | pacientesUpsertWithWhereUniqueWithoutUsers_pacientes_kinesiologoIdTousersInput[]
    createMany?: pacientesCreateManyUsers_pacientes_kinesiologoIdTousersInputEnvelope
    set?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    disconnect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    delete?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    update?: pacientesUpdateWithWhereUniqueWithoutUsers_pacientes_kinesiologoIdTousersInput | pacientesUpdateWithWhereUniqueWithoutUsers_pacientes_kinesiologoIdTousersInput[]
    updateMany?: pacientesUpdateManyWithWhereWithoutUsers_pacientes_kinesiologoIdTousersInput | pacientesUpdateManyWithWhereWithoutUsers_pacientes_kinesiologoIdTousersInput[]
    deleteMany?: pacientesScalarWhereInput | pacientesScalarWhereInput[]
  }

  export type pacientesUpdateOneWithoutUsers_pacientes_userIdTousersNestedInput = {
    create?: XOR<pacientesCreateWithoutUsers_pacientes_userIdTousersInput, pacientesUncheckedCreateWithoutUsers_pacientes_userIdTousersInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutUsers_pacientes_userIdTousersInput
    upsert?: pacientesUpsertWithoutUsers_pacientes_userIdTousersInput
    disconnect?: pacientesWhereInput | boolean
    delete?: pacientesWhereInput | boolean
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutUsers_pacientes_userIdTousersInput, pacientesUpdateWithoutUsers_pacientes_userIdTousersInput>, pacientesUncheckedUpdateWithoutUsers_pacientes_userIdTousersInput>
  }

  export type progresosUpdateManyWithoutUsersNestedInput = {
    create?: XOR<progresosCreateWithoutUsersInput, progresosUncheckedCreateWithoutUsersInput> | progresosCreateWithoutUsersInput[] | progresosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: progresosCreateOrConnectWithoutUsersInput | progresosCreateOrConnectWithoutUsersInput[]
    upsert?: progresosUpsertWithWhereUniqueWithoutUsersInput | progresosUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: progresosCreateManyUsersInputEnvelope
    set?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    disconnect?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    delete?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    connect?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    update?: progresosUpdateWithWhereUniqueWithoutUsersInput | progresosUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: progresosUpdateManyWithWhereWithoutUsersInput | progresosUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: progresosScalarWhereInput | progresosScalarWhereInput[]
  }

  export type turnosUpdateManyWithoutUsersNestedInput = {
    create?: XOR<turnosCreateWithoutUsersInput, turnosUncheckedCreateWithoutUsersInput> | turnosCreateWithoutUsersInput[] | turnosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: turnosCreateOrConnectWithoutUsersInput | turnosCreateOrConnectWithoutUsersInput[]
    upsert?: turnosUpsertWithWhereUniqueWithoutUsersInput | turnosUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: turnosCreateManyUsersInputEnvelope
    set?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
    disconnect?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
    delete?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
    connect?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
    update?: turnosUpdateWithWhereUniqueWithoutUsersInput | turnosUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: turnosUpdateManyWithWhereWithoutUsersInput | turnosUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: turnosScalarWhereInput | turnosScalarWhereInput[]
  }

  export type diagnosticosUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<diagnosticosCreateWithoutUsersInput, diagnosticosUncheckedCreateWithoutUsersInput> | diagnosticosCreateWithoutUsersInput[] | diagnosticosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: diagnosticosCreateOrConnectWithoutUsersInput | diagnosticosCreateOrConnectWithoutUsersInput[]
    upsert?: diagnosticosUpsertWithWhereUniqueWithoutUsersInput | diagnosticosUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: diagnosticosCreateManyUsersInputEnvelope
    set?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
    disconnect?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
    delete?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
    connect?: diagnosticosWhereUniqueInput | diagnosticosWhereUniqueInput[]
    update?: diagnosticosUpdateWithWhereUniqueWithoutUsersInput | diagnosticosUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: diagnosticosUpdateManyWithWhereWithoutUsersInput | diagnosticosUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: diagnosticosScalarWhereInput | diagnosticosScalarWhereInput[]
  }

  export type ejerciciosUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ejerciciosCreateWithoutUsersInput, ejerciciosUncheckedCreateWithoutUsersInput> | ejerciciosCreateWithoutUsersInput[] | ejerciciosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ejerciciosCreateOrConnectWithoutUsersInput | ejerciciosCreateOrConnectWithoutUsersInput[]
    upsert?: ejerciciosUpsertWithWhereUniqueWithoutUsersInput | ejerciciosUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ejerciciosCreateManyUsersInputEnvelope
    set?: ejerciciosWhereUniqueInput | ejerciciosWhereUniqueInput[]
    disconnect?: ejerciciosWhereUniqueInput | ejerciciosWhereUniqueInput[]
    delete?: ejerciciosWhereUniqueInput | ejerciciosWhereUniqueInput[]
    connect?: ejerciciosWhereUniqueInput | ejerciciosWhereUniqueInput[]
    update?: ejerciciosUpdateWithWhereUniqueWithoutUsersInput | ejerciciosUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ejerciciosUpdateManyWithWhereWithoutUsersInput | ejerciciosUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ejerciciosScalarWhereInput | ejerciciosScalarWhereInput[]
  }

  export type ejercicios_asignadosUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ejercicios_asignadosCreateWithoutUsersInput, ejercicios_asignadosUncheckedCreateWithoutUsersInput> | ejercicios_asignadosCreateWithoutUsersInput[] | ejercicios_asignadosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ejercicios_asignadosCreateOrConnectWithoutUsersInput | ejercicios_asignadosCreateOrConnectWithoutUsersInput[]
    upsert?: ejercicios_asignadosUpsertWithWhereUniqueWithoutUsersInput | ejercicios_asignadosUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ejercicios_asignadosCreateManyUsersInputEnvelope
    set?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    disconnect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    delete?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    connect?: ejercicios_asignadosWhereUniqueInput | ejercicios_asignadosWhereUniqueInput[]
    update?: ejercicios_asignadosUpdateWithWhereUniqueWithoutUsersInput | ejercicios_asignadosUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ejercicios_asignadosUpdateManyWithWhereWithoutUsersInput | ejercicios_asignadosUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ejercicios_asignadosScalarWhereInput | ejercicios_asignadosScalarWhereInput[]
  }

  export type pacientesUncheckedUpdateManyWithoutUsers_pacientes_kinesiologoIdTousersNestedInput = {
    create?: XOR<pacientesCreateWithoutUsers_pacientes_kinesiologoIdTousersInput, pacientesUncheckedCreateWithoutUsers_pacientes_kinesiologoIdTousersInput> | pacientesCreateWithoutUsers_pacientes_kinesiologoIdTousersInput[] | pacientesUncheckedCreateWithoutUsers_pacientes_kinesiologoIdTousersInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutUsers_pacientes_kinesiologoIdTousersInput | pacientesCreateOrConnectWithoutUsers_pacientes_kinesiologoIdTousersInput[]
    upsert?: pacientesUpsertWithWhereUniqueWithoutUsers_pacientes_kinesiologoIdTousersInput | pacientesUpsertWithWhereUniqueWithoutUsers_pacientes_kinesiologoIdTousersInput[]
    createMany?: pacientesCreateManyUsers_pacientes_kinesiologoIdTousersInputEnvelope
    set?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    disconnect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    delete?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    update?: pacientesUpdateWithWhereUniqueWithoutUsers_pacientes_kinesiologoIdTousersInput | pacientesUpdateWithWhereUniqueWithoutUsers_pacientes_kinesiologoIdTousersInput[]
    updateMany?: pacientesUpdateManyWithWhereWithoutUsers_pacientes_kinesiologoIdTousersInput | pacientesUpdateManyWithWhereWithoutUsers_pacientes_kinesiologoIdTousersInput[]
    deleteMany?: pacientesScalarWhereInput | pacientesScalarWhereInput[]
  }

  export type pacientesUncheckedUpdateOneWithoutUsers_pacientes_userIdTousersNestedInput = {
    create?: XOR<pacientesCreateWithoutUsers_pacientes_userIdTousersInput, pacientesUncheckedCreateWithoutUsers_pacientes_userIdTousersInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutUsers_pacientes_userIdTousersInput
    upsert?: pacientesUpsertWithoutUsers_pacientes_userIdTousersInput
    disconnect?: pacientesWhereInput | boolean
    delete?: pacientesWhereInput | boolean
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutUsers_pacientes_userIdTousersInput, pacientesUpdateWithoutUsers_pacientes_userIdTousersInput>, pacientesUncheckedUpdateWithoutUsers_pacientes_userIdTousersInput>
  }

  export type progresosUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<progresosCreateWithoutUsersInput, progresosUncheckedCreateWithoutUsersInput> | progresosCreateWithoutUsersInput[] | progresosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: progresosCreateOrConnectWithoutUsersInput | progresosCreateOrConnectWithoutUsersInput[]
    upsert?: progresosUpsertWithWhereUniqueWithoutUsersInput | progresosUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: progresosCreateManyUsersInputEnvelope
    set?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    disconnect?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    delete?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    connect?: progresosWhereUniqueInput | progresosWhereUniqueInput[]
    update?: progresosUpdateWithWhereUniqueWithoutUsersInput | progresosUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: progresosUpdateManyWithWhereWithoutUsersInput | progresosUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: progresosScalarWhereInput | progresosScalarWhereInput[]
  }

  export type turnosUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<turnosCreateWithoutUsersInput, turnosUncheckedCreateWithoutUsersInput> | turnosCreateWithoutUsersInput[] | turnosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: turnosCreateOrConnectWithoutUsersInput | turnosCreateOrConnectWithoutUsersInput[]
    upsert?: turnosUpsertWithWhereUniqueWithoutUsersInput | turnosUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: turnosCreateManyUsersInputEnvelope
    set?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
    disconnect?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
    delete?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
    connect?: turnosWhereUniqueInput | turnosWhereUniqueInput[]
    update?: turnosUpdateWithWhereUniqueWithoutUsersInput | turnosUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: turnosUpdateManyWithWhereWithoutUsersInput | turnosUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: turnosScalarWhereInput | turnosScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAsignacionEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.AsignacionEstado | EnumAsignacionEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.AsignacionEstado[] | ListEnumAsignacionEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.AsignacionEstado[] | ListEnumAsignacionEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumAsignacionEstadoFilter<$PrismaModel> | $Enums.AsignacionEstado
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAsignacionEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AsignacionEstado | EnumAsignacionEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.AsignacionEstado[] | ListEnumAsignacionEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.AsignacionEstado[] | ListEnumAsignacionEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumAsignacionEstadoWithAggregatesFilter<$PrismaModel> | $Enums.AsignacionEstado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAsignacionEstadoFilter<$PrismaModel>
    _max?: NestedEnumAsignacionEstadoFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumTurnoEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.TurnoEstado | EnumTurnoEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.TurnoEstado[] | ListEnumTurnoEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TurnoEstado[] | ListEnumTurnoEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumTurnoEstadoFilter<$PrismaModel> | $Enums.TurnoEstado
  }

  export type NestedEnumTurnoEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TurnoEstado | EnumTurnoEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.TurnoEstado[] | ListEnumTurnoEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TurnoEstado[] | ListEnumTurnoEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumTurnoEstadoWithAggregatesFilter<$PrismaModel> | $Enums.TurnoEstado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTurnoEstadoFilter<$PrismaModel>
    _max?: NestedEnumTurnoEstadoFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type usersCreateWithoutDiagnosticosInput = {
    id: string
    nombre: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    ejercicios?: ejerciciosCreateNestedManyWithoutUsersInput
    ejercicios_asignados?: ejercicios_asignadosCreateNestedManyWithoutUsersInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesCreateNestedManyWithoutUsers_pacientes_kinesiologoIdTousersInput
    pacientes_pacientes_userIdTousers?: pacientesCreateNestedOneWithoutUsers_pacientes_userIdTousersInput
    progresos?: progresosCreateNestedManyWithoutUsersInput
    turnos?: turnosCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutDiagnosticosInput = {
    id: string
    nombre: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    ejercicios?: ejerciciosUncheckedCreateNestedManyWithoutUsersInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedCreateNestedManyWithoutUsersInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUncheckedCreateNestedManyWithoutUsers_pacientes_kinesiologoIdTousersInput
    pacientes_pacientes_userIdTousers?: pacientesUncheckedCreateNestedOneWithoutUsers_pacientes_userIdTousersInput
    progresos?: progresosUncheckedCreateNestedManyWithoutUsersInput
    turnos?: turnosUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutDiagnosticosInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDiagnosticosInput, usersUncheckedCreateWithoutDiagnosticosInput>
  }

  export type pacientesCreateWithoutDiagnosticosInput = {
    id: string
    dni: string
    fechaNacimiento?: Date | string | null
    telefono?: string | null
    recibeRecordatorios?: boolean
    domicilio?: string | null
    obraSocial?: string | null
    createdAt?: Date | string
    email?: string | null
    nombre?: string | null
    ejercicios_asignados?: ejercicios_asignadosCreateNestedManyWithoutPacientesInput
    users_pacientes_kinesiologoIdTousers?: usersCreateNestedOneWithoutPacientes_pacientes_kinesiologoIdTousersInput
    users_pacientes_userIdTousers?: usersCreateNestedOneWithoutPacientes_pacientes_userIdTousersInput
    progresos?: progresosCreateNestedManyWithoutPacientesInput
    turnos?: turnosCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutDiagnosticosInput = {
    id: string
    userId?: string | null
    kinesiologoId?: string | null
    dni: string
    fechaNacimiento?: Date | string | null
    telefono?: string | null
    recibeRecordatorios?: boolean
    domicilio?: string | null
    obraSocial?: string | null
    createdAt?: Date | string
    email?: string | null
    nombre?: string | null
    ejercicios_asignados?: ejercicios_asignadosUncheckedCreateNestedManyWithoutPacientesInput
    progresos?: progresosUncheckedCreateNestedManyWithoutPacientesInput
    turnos?: turnosUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutDiagnosticosInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutDiagnosticosInput, pacientesUncheckedCreateWithoutDiagnosticosInput>
  }

  export type ejercicios_asignadosCreateWithoutDiagnosticosInput = {
    id: string
    objetivo?: string | null
    series?: number
    repeticiones?: number
    frecuencia?: string | null
    duracionMinutos?: number | null
    estado?: $Enums.AsignacionEstado
    asignadaEl?: Date | string
    ejercicios: ejerciciosCreateNestedOneWithoutEjercicios_asignadosInput
    users: usersCreateNestedOneWithoutEjercicios_asignadosInput
    pacientes: pacientesCreateNestedOneWithoutEjercicios_asignadosInput
    progresos?: progresosCreateNestedManyWithoutEjercicios_asignadosInput
  }

  export type ejercicios_asignadosUncheckedCreateWithoutDiagnosticosInput = {
    id: string
    pacienteId: string
    ejercicioId: string
    kinesiologoId: string
    objetivo?: string | null
    series?: number
    repeticiones?: number
    frecuencia?: string | null
    duracionMinutos?: number | null
    estado?: $Enums.AsignacionEstado
    asignadaEl?: Date | string
    progresos?: progresosUncheckedCreateNestedManyWithoutEjercicios_asignadosInput
  }

  export type ejercicios_asignadosCreateOrConnectWithoutDiagnosticosInput = {
    where: ejercicios_asignadosWhereUniqueInput
    create: XOR<ejercicios_asignadosCreateWithoutDiagnosticosInput, ejercicios_asignadosUncheckedCreateWithoutDiagnosticosInput>
  }

  export type ejercicios_asignadosCreateManyDiagnosticosInputEnvelope = {
    data: ejercicios_asignadosCreateManyDiagnosticosInput | ejercicios_asignadosCreateManyDiagnosticosInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutDiagnosticosInput = {
    update: XOR<usersUpdateWithoutDiagnosticosInput, usersUncheckedUpdateWithoutDiagnosticosInput>
    create: XOR<usersCreateWithoutDiagnosticosInput, usersUncheckedCreateWithoutDiagnosticosInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutDiagnosticosInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutDiagnosticosInput, usersUncheckedUpdateWithoutDiagnosticosInput>
  }

  export type usersUpdateWithoutDiagnosticosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: ejerciciosUpdateManyWithoutUsersNestedInput
    ejercicios_asignados?: ejercicios_asignadosUpdateManyWithoutUsersNestedInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUpdateManyWithoutUsers_pacientes_kinesiologoIdTousersNestedInput
    pacientes_pacientes_userIdTousers?: pacientesUpdateOneWithoutUsers_pacientes_userIdTousersNestedInput
    progresos?: progresosUpdateManyWithoutUsersNestedInput
    turnos?: turnosUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutDiagnosticosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: ejerciciosUncheckedUpdateManyWithoutUsersNestedInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedUpdateManyWithoutUsersNestedInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUncheckedUpdateManyWithoutUsers_pacientes_kinesiologoIdTousersNestedInput
    pacientes_pacientes_userIdTousers?: pacientesUncheckedUpdateOneWithoutUsers_pacientes_userIdTousersNestedInput
    progresos?: progresosUncheckedUpdateManyWithoutUsersNestedInput
    turnos?: turnosUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type pacientesUpsertWithoutDiagnosticosInput = {
    update: XOR<pacientesUpdateWithoutDiagnosticosInput, pacientesUncheckedUpdateWithoutDiagnosticosInput>
    create: XOR<pacientesCreateWithoutDiagnosticosInput, pacientesUncheckedCreateWithoutDiagnosticosInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutDiagnosticosInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutDiagnosticosInput, pacientesUncheckedUpdateWithoutDiagnosticosInput>
  }

  export type pacientesUpdateWithoutDiagnosticosInput = {
    id?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    recibeRecordatorios?: BoolFieldUpdateOperationsInput | boolean
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    obraSocial?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    ejercicios_asignados?: ejercicios_asignadosUpdateManyWithoutPacientesNestedInput
    users_pacientes_kinesiologoIdTousers?: usersUpdateOneWithoutPacientes_pacientes_kinesiologoIdTousersNestedInput
    users_pacientes_userIdTousers?: usersUpdateOneWithoutPacientes_pacientes_userIdTousersNestedInput
    progresos?: progresosUpdateManyWithoutPacientesNestedInput
    turnos?: turnosUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutDiagnosticosInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    kinesiologoId?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    recibeRecordatorios?: BoolFieldUpdateOperationsInput | boolean
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    obraSocial?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    ejercicios_asignados?: ejercicios_asignadosUncheckedUpdateManyWithoutPacientesNestedInput
    progresos?: progresosUncheckedUpdateManyWithoutPacientesNestedInput
    turnos?: turnosUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type ejercicios_asignadosUpsertWithWhereUniqueWithoutDiagnosticosInput = {
    where: ejercicios_asignadosWhereUniqueInput
    update: XOR<ejercicios_asignadosUpdateWithoutDiagnosticosInput, ejercicios_asignadosUncheckedUpdateWithoutDiagnosticosInput>
    create: XOR<ejercicios_asignadosCreateWithoutDiagnosticosInput, ejercicios_asignadosUncheckedCreateWithoutDiagnosticosInput>
  }

  export type ejercicios_asignadosUpdateWithWhereUniqueWithoutDiagnosticosInput = {
    where: ejercicios_asignadosWhereUniqueInput
    data: XOR<ejercicios_asignadosUpdateWithoutDiagnosticosInput, ejercicios_asignadosUncheckedUpdateWithoutDiagnosticosInput>
  }

  export type ejercicios_asignadosUpdateManyWithWhereWithoutDiagnosticosInput = {
    where: ejercicios_asignadosScalarWhereInput
    data: XOR<ejercicios_asignadosUpdateManyMutationInput, ejercicios_asignadosUncheckedUpdateManyWithoutDiagnosticosInput>
  }

  export type ejercicios_asignadosScalarWhereInput = {
    AND?: ejercicios_asignadosScalarWhereInput | ejercicios_asignadosScalarWhereInput[]
    OR?: ejercicios_asignadosScalarWhereInput[]
    NOT?: ejercicios_asignadosScalarWhereInput | ejercicios_asignadosScalarWhereInput[]
    id?: StringFilter<"ejercicios_asignados"> | string
    pacienteId?: StringFilter<"ejercicios_asignados"> | string
    ejercicioId?: StringFilter<"ejercicios_asignados"> | string
    kinesiologoId?: StringFilter<"ejercicios_asignados"> | string
    diagnosticoId?: StringNullableFilter<"ejercicios_asignados"> | string | null
    objetivo?: StringNullableFilter<"ejercicios_asignados"> | string | null
    series?: IntFilter<"ejercicios_asignados"> | number
    repeticiones?: IntFilter<"ejercicios_asignados"> | number
    frecuencia?: StringNullableFilter<"ejercicios_asignados"> | string | null
    duracionMinutos?: IntNullableFilter<"ejercicios_asignados"> | number | null
    estado?: EnumAsignacionEstadoFilter<"ejercicios_asignados"> | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFilter<"ejercicios_asignados"> | Date | string
  }

  export type usersCreateWithoutEjerciciosInput = {
    id: string
    nombre: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    diagnosticos?: diagnosticosCreateNestedManyWithoutUsersInput
    ejercicios_asignados?: ejercicios_asignadosCreateNestedManyWithoutUsersInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesCreateNestedManyWithoutUsers_pacientes_kinesiologoIdTousersInput
    pacientes_pacientes_userIdTousers?: pacientesCreateNestedOneWithoutUsers_pacientes_userIdTousersInput
    progresos?: progresosCreateNestedManyWithoutUsersInput
    turnos?: turnosCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutEjerciciosInput = {
    id: string
    nombre: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    diagnosticos?: diagnosticosUncheckedCreateNestedManyWithoutUsersInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedCreateNestedManyWithoutUsersInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUncheckedCreateNestedManyWithoutUsers_pacientes_kinesiologoIdTousersInput
    pacientes_pacientes_userIdTousers?: pacientesUncheckedCreateNestedOneWithoutUsers_pacientes_userIdTousersInput
    progresos?: progresosUncheckedCreateNestedManyWithoutUsersInput
    turnos?: turnosUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutEjerciciosInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEjerciciosInput, usersUncheckedCreateWithoutEjerciciosInput>
  }

  export type ejercicios_asignadosCreateWithoutEjerciciosInput = {
    id: string
    objetivo?: string | null
    series?: number
    repeticiones?: number
    frecuencia?: string | null
    duracionMinutos?: number | null
    estado?: $Enums.AsignacionEstado
    asignadaEl?: Date | string
    diagnosticos?: diagnosticosCreateNestedOneWithoutEjercicios_asignadosInput
    users: usersCreateNestedOneWithoutEjercicios_asignadosInput
    pacientes: pacientesCreateNestedOneWithoutEjercicios_asignadosInput
    progresos?: progresosCreateNestedManyWithoutEjercicios_asignadosInput
  }

  export type ejercicios_asignadosUncheckedCreateWithoutEjerciciosInput = {
    id: string
    pacienteId: string
    kinesiologoId: string
    diagnosticoId?: string | null
    objetivo?: string | null
    series?: number
    repeticiones?: number
    frecuencia?: string | null
    duracionMinutos?: number | null
    estado?: $Enums.AsignacionEstado
    asignadaEl?: Date | string
    progresos?: progresosUncheckedCreateNestedManyWithoutEjercicios_asignadosInput
  }

  export type ejercicios_asignadosCreateOrConnectWithoutEjerciciosInput = {
    where: ejercicios_asignadosWhereUniqueInput
    create: XOR<ejercicios_asignadosCreateWithoutEjerciciosInput, ejercicios_asignadosUncheckedCreateWithoutEjerciciosInput>
  }

  export type ejercicios_asignadosCreateManyEjerciciosInputEnvelope = {
    data: ejercicios_asignadosCreateManyEjerciciosInput | ejercicios_asignadosCreateManyEjerciciosInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutEjerciciosInput = {
    update: XOR<usersUpdateWithoutEjerciciosInput, usersUncheckedUpdateWithoutEjerciciosInput>
    create: XOR<usersCreateWithoutEjerciciosInput, usersUncheckedCreateWithoutEjerciciosInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutEjerciciosInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutEjerciciosInput, usersUncheckedUpdateWithoutEjerciciosInput>
  }

  export type usersUpdateWithoutEjerciciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUpdateManyWithoutUsersNestedInput
    ejercicios_asignados?: ejercicios_asignadosUpdateManyWithoutUsersNestedInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUpdateManyWithoutUsers_pacientes_kinesiologoIdTousersNestedInput
    pacientes_pacientes_userIdTousers?: pacientesUpdateOneWithoutUsers_pacientes_userIdTousersNestedInput
    progresos?: progresosUpdateManyWithoutUsersNestedInput
    turnos?: turnosUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutEjerciciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUncheckedUpdateManyWithoutUsersNestedInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedUpdateManyWithoutUsersNestedInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUncheckedUpdateManyWithoutUsers_pacientes_kinesiologoIdTousersNestedInput
    pacientes_pacientes_userIdTousers?: pacientesUncheckedUpdateOneWithoutUsers_pacientes_userIdTousersNestedInput
    progresos?: progresosUncheckedUpdateManyWithoutUsersNestedInput
    turnos?: turnosUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ejercicios_asignadosUpsertWithWhereUniqueWithoutEjerciciosInput = {
    where: ejercicios_asignadosWhereUniqueInput
    update: XOR<ejercicios_asignadosUpdateWithoutEjerciciosInput, ejercicios_asignadosUncheckedUpdateWithoutEjerciciosInput>
    create: XOR<ejercicios_asignadosCreateWithoutEjerciciosInput, ejercicios_asignadosUncheckedCreateWithoutEjerciciosInput>
  }

  export type ejercicios_asignadosUpdateWithWhereUniqueWithoutEjerciciosInput = {
    where: ejercicios_asignadosWhereUniqueInput
    data: XOR<ejercicios_asignadosUpdateWithoutEjerciciosInput, ejercicios_asignadosUncheckedUpdateWithoutEjerciciosInput>
  }

  export type ejercicios_asignadosUpdateManyWithWhereWithoutEjerciciosInput = {
    where: ejercicios_asignadosScalarWhereInput
    data: XOR<ejercicios_asignadosUpdateManyMutationInput, ejercicios_asignadosUncheckedUpdateManyWithoutEjerciciosInput>
  }

  export type diagnosticosCreateWithoutEjercicios_asignadosInput = {
    id: string
    lesion: string
    descripcion: string
    tratamiento?: string | null
    creadoEl?: Date | string
    activo?: boolean
    users: usersCreateNestedOneWithoutDiagnosticosInput
    pacientes: pacientesCreateNestedOneWithoutDiagnosticosInput
  }

  export type diagnosticosUncheckedCreateWithoutEjercicios_asignadosInput = {
    id: string
    pacienteId: string
    kinesiologoId: string
    lesion: string
    descripcion: string
    tratamiento?: string | null
    creadoEl?: Date | string
    activo?: boolean
  }

  export type diagnosticosCreateOrConnectWithoutEjercicios_asignadosInput = {
    where: diagnosticosWhereUniqueInput
    create: XOR<diagnosticosCreateWithoutEjercicios_asignadosInput, diagnosticosUncheckedCreateWithoutEjercicios_asignadosInput>
  }

  export type ejerciciosCreateWithoutEjercicios_asignadosInput = {
    id: string
    nombre: string
    descripcion: string
    instrucciones?: string | null
    zonaCuerpo: string
    nivel?: string
    creadoEl?: Date | string
    users: usersCreateNestedOneWithoutEjerciciosInput
  }

  export type ejerciciosUncheckedCreateWithoutEjercicios_asignadosInput = {
    id: string
    nombre: string
    descripcion: string
    instrucciones?: string | null
    zonaCuerpo: string
    nivel?: string
    creadoPorId: string
    creadoEl?: Date | string
  }

  export type ejerciciosCreateOrConnectWithoutEjercicios_asignadosInput = {
    where: ejerciciosWhereUniqueInput
    create: XOR<ejerciciosCreateWithoutEjercicios_asignadosInput, ejerciciosUncheckedCreateWithoutEjercicios_asignadosInput>
  }

  export type usersCreateWithoutEjercicios_asignadosInput = {
    id: string
    nombre: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    diagnosticos?: diagnosticosCreateNestedManyWithoutUsersInput
    ejercicios?: ejerciciosCreateNestedManyWithoutUsersInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesCreateNestedManyWithoutUsers_pacientes_kinesiologoIdTousersInput
    pacientes_pacientes_userIdTousers?: pacientesCreateNestedOneWithoutUsers_pacientes_userIdTousersInput
    progresos?: progresosCreateNestedManyWithoutUsersInput
    turnos?: turnosCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutEjercicios_asignadosInput = {
    id: string
    nombre: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    diagnosticos?: diagnosticosUncheckedCreateNestedManyWithoutUsersInput
    ejercicios?: ejerciciosUncheckedCreateNestedManyWithoutUsersInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUncheckedCreateNestedManyWithoutUsers_pacientes_kinesiologoIdTousersInput
    pacientes_pacientes_userIdTousers?: pacientesUncheckedCreateNestedOneWithoutUsers_pacientes_userIdTousersInput
    progresos?: progresosUncheckedCreateNestedManyWithoutUsersInput
    turnos?: turnosUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutEjercicios_asignadosInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEjercicios_asignadosInput, usersUncheckedCreateWithoutEjercicios_asignadosInput>
  }

  export type pacientesCreateWithoutEjercicios_asignadosInput = {
    id: string
    dni: string
    fechaNacimiento?: Date | string | null
    telefono?: string | null
    recibeRecordatorios?: boolean
    domicilio?: string | null
    obraSocial?: string | null
    createdAt?: Date | string
    email?: string | null
    nombre?: string | null
    diagnosticos?: diagnosticosCreateNestedManyWithoutPacientesInput
    users_pacientes_kinesiologoIdTousers?: usersCreateNestedOneWithoutPacientes_pacientes_kinesiologoIdTousersInput
    users_pacientes_userIdTousers?: usersCreateNestedOneWithoutPacientes_pacientes_userIdTousersInput
    progresos?: progresosCreateNestedManyWithoutPacientesInput
    turnos?: turnosCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutEjercicios_asignadosInput = {
    id: string
    userId?: string | null
    kinesiologoId?: string | null
    dni: string
    fechaNacimiento?: Date | string | null
    telefono?: string | null
    recibeRecordatorios?: boolean
    domicilio?: string | null
    obraSocial?: string | null
    createdAt?: Date | string
    email?: string | null
    nombre?: string | null
    diagnosticos?: diagnosticosUncheckedCreateNestedManyWithoutPacientesInput
    progresos?: progresosUncheckedCreateNestedManyWithoutPacientesInput
    turnos?: turnosUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutEjercicios_asignadosInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutEjercicios_asignadosInput, pacientesUncheckedCreateWithoutEjercicios_asignadosInput>
  }

  export type progresosCreateWithoutEjercicios_asignadosInput = {
    id: string
    fecha?: Date | string
    completado?: boolean
    seriesRealizadas?: number | null
    repeticionesRealizadas?: number | null
    pesoKg?: number | null
    observaciones?: string | null
    pacientes: pacientesCreateNestedOneWithoutProgresosInput
    users: usersCreateNestedOneWithoutProgresosInput
  }

  export type progresosUncheckedCreateWithoutEjercicios_asignadosInput = {
    id: string
    pacienteId: string
    fecha?: Date | string
    completado?: boolean
    seriesRealizadas?: number | null
    repeticionesRealizadas?: number | null
    pesoKg?: number | null
    observaciones?: string | null
    registradoPorUserId: string
  }

  export type progresosCreateOrConnectWithoutEjercicios_asignadosInput = {
    where: progresosWhereUniqueInput
    create: XOR<progresosCreateWithoutEjercicios_asignadosInput, progresosUncheckedCreateWithoutEjercicios_asignadosInput>
  }

  export type progresosCreateManyEjercicios_asignadosInputEnvelope = {
    data: progresosCreateManyEjercicios_asignadosInput | progresosCreateManyEjercicios_asignadosInput[]
    skipDuplicates?: boolean
  }

  export type diagnosticosUpsertWithoutEjercicios_asignadosInput = {
    update: XOR<diagnosticosUpdateWithoutEjercicios_asignadosInput, diagnosticosUncheckedUpdateWithoutEjercicios_asignadosInput>
    create: XOR<diagnosticosCreateWithoutEjercicios_asignadosInput, diagnosticosUncheckedCreateWithoutEjercicios_asignadosInput>
    where?: diagnosticosWhereInput
  }

  export type diagnosticosUpdateToOneWithWhereWithoutEjercicios_asignadosInput = {
    where?: diagnosticosWhereInput
    data: XOR<diagnosticosUpdateWithoutEjercicios_asignadosInput, diagnosticosUncheckedUpdateWithoutEjercicios_asignadosInput>
  }

  export type diagnosticosUpdateWithoutEjercicios_asignadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateOneRequiredWithoutDiagnosticosNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutDiagnosticosNestedInput
  }

  export type diagnosticosUncheckedUpdateWithoutEjercicios_asignadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: StringFieldUpdateOperationsInput | string
    lesion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ejerciciosUpsertWithoutEjercicios_asignadosInput = {
    update: XOR<ejerciciosUpdateWithoutEjercicios_asignadosInput, ejerciciosUncheckedUpdateWithoutEjercicios_asignadosInput>
    create: XOR<ejerciciosCreateWithoutEjercicios_asignadosInput, ejerciciosUncheckedCreateWithoutEjercicios_asignadosInput>
    where?: ejerciciosWhereInput
  }

  export type ejerciciosUpdateToOneWithWhereWithoutEjercicios_asignadosInput = {
    where?: ejerciciosWhereInput
    data: XOR<ejerciciosUpdateWithoutEjercicios_asignadosInput, ejerciciosUncheckedUpdateWithoutEjercicios_asignadosInput>
  }

  export type ejerciciosUpdateWithoutEjercicios_asignadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    instrucciones?: NullableStringFieldUpdateOperationsInput | string | null
    zonaCuerpo?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutEjerciciosNestedInput
  }

  export type ejerciciosUncheckedUpdateWithoutEjercicios_asignadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    instrucciones?: NullableStringFieldUpdateOperationsInput | string | null
    zonaCuerpo?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    creadoPorId?: StringFieldUpdateOperationsInput | string
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUpsertWithoutEjercicios_asignadosInput = {
    update: XOR<usersUpdateWithoutEjercicios_asignadosInput, usersUncheckedUpdateWithoutEjercicios_asignadosInput>
    create: XOR<usersCreateWithoutEjercicios_asignadosInput, usersUncheckedCreateWithoutEjercicios_asignadosInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutEjercicios_asignadosInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutEjercicios_asignadosInput, usersUncheckedUpdateWithoutEjercicios_asignadosInput>
  }

  export type usersUpdateWithoutEjercicios_asignadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUpdateManyWithoutUsersNestedInput
    ejercicios?: ejerciciosUpdateManyWithoutUsersNestedInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUpdateManyWithoutUsers_pacientes_kinesiologoIdTousersNestedInput
    pacientes_pacientes_userIdTousers?: pacientesUpdateOneWithoutUsers_pacientes_userIdTousersNestedInput
    progresos?: progresosUpdateManyWithoutUsersNestedInput
    turnos?: turnosUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutEjercicios_asignadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUncheckedUpdateManyWithoutUsersNestedInput
    ejercicios?: ejerciciosUncheckedUpdateManyWithoutUsersNestedInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUncheckedUpdateManyWithoutUsers_pacientes_kinesiologoIdTousersNestedInput
    pacientes_pacientes_userIdTousers?: pacientesUncheckedUpdateOneWithoutUsers_pacientes_userIdTousersNestedInput
    progresos?: progresosUncheckedUpdateManyWithoutUsersNestedInput
    turnos?: turnosUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type pacientesUpsertWithoutEjercicios_asignadosInput = {
    update: XOR<pacientesUpdateWithoutEjercicios_asignadosInput, pacientesUncheckedUpdateWithoutEjercicios_asignadosInput>
    create: XOR<pacientesCreateWithoutEjercicios_asignadosInput, pacientesUncheckedCreateWithoutEjercicios_asignadosInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutEjercicios_asignadosInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutEjercicios_asignadosInput, pacientesUncheckedUpdateWithoutEjercicios_asignadosInput>
  }

  export type pacientesUpdateWithoutEjercicios_asignadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    recibeRecordatorios?: BoolFieldUpdateOperationsInput | boolean
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    obraSocial?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticos?: diagnosticosUpdateManyWithoutPacientesNestedInput
    users_pacientes_kinesiologoIdTousers?: usersUpdateOneWithoutPacientes_pacientes_kinesiologoIdTousersNestedInput
    users_pacientes_userIdTousers?: usersUpdateOneWithoutPacientes_pacientes_userIdTousersNestedInput
    progresos?: progresosUpdateManyWithoutPacientesNestedInput
    turnos?: turnosUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutEjercicios_asignadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    kinesiologoId?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    recibeRecordatorios?: BoolFieldUpdateOperationsInput | boolean
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    obraSocial?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticos?: diagnosticosUncheckedUpdateManyWithoutPacientesNestedInput
    progresos?: progresosUncheckedUpdateManyWithoutPacientesNestedInput
    turnos?: turnosUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type progresosUpsertWithWhereUniqueWithoutEjercicios_asignadosInput = {
    where: progresosWhereUniqueInput
    update: XOR<progresosUpdateWithoutEjercicios_asignadosInput, progresosUncheckedUpdateWithoutEjercicios_asignadosInput>
    create: XOR<progresosCreateWithoutEjercicios_asignadosInput, progresosUncheckedCreateWithoutEjercicios_asignadosInput>
  }

  export type progresosUpdateWithWhereUniqueWithoutEjercicios_asignadosInput = {
    where: progresosWhereUniqueInput
    data: XOR<progresosUpdateWithoutEjercicios_asignadosInput, progresosUncheckedUpdateWithoutEjercicios_asignadosInput>
  }

  export type progresosUpdateManyWithWhereWithoutEjercicios_asignadosInput = {
    where: progresosScalarWhereInput
    data: XOR<progresosUpdateManyMutationInput, progresosUncheckedUpdateManyWithoutEjercicios_asignadosInput>
  }

  export type progresosScalarWhereInput = {
    AND?: progresosScalarWhereInput | progresosScalarWhereInput[]
    OR?: progresosScalarWhereInput[]
    NOT?: progresosScalarWhereInput | progresosScalarWhereInput[]
    id?: StringFilter<"progresos"> | string
    asignacionId?: StringFilter<"progresos"> | string
    pacienteId?: StringFilter<"progresos"> | string
    fecha?: DateTimeFilter<"progresos"> | Date | string
    completado?: BoolFilter<"progresos"> | boolean
    seriesRealizadas?: IntNullableFilter<"progresos"> | number | null
    repeticionesRealizadas?: IntNullableFilter<"progresos"> | number | null
    pesoKg?: FloatNullableFilter<"progresos"> | number | null
    observaciones?: StringNullableFilter<"progresos"> | string | null
    registradoPorUserId?: StringFilter<"progresos"> | string
  }

  export type diagnosticosCreateWithoutPacientesInput = {
    id: string
    lesion: string
    descripcion: string
    tratamiento?: string | null
    creadoEl?: Date | string
    activo?: boolean
    users: usersCreateNestedOneWithoutDiagnosticosInput
    ejercicios_asignados?: ejercicios_asignadosCreateNestedManyWithoutDiagnosticosInput
  }

  export type diagnosticosUncheckedCreateWithoutPacientesInput = {
    id: string
    kinesiologoId: string
    lesion: string
    descripcion: string
    tratamiento?: string | null
    creadoEl?: Date | string
    activo?: boolean
    ejercicios_asignados?: ejercicios_asignadosUncheckedCreateNestedManyWithoutDiagnosticosInput
  }

  export type diagnosticosCreateOrConnectWithoutPacientesInput = {
    where: diagnosticosWhereUniqueInput
    create: XOR<diagnosticosCreateWithoutPacientesInput, diagnosticosUncheckedCreateWithoutPacientesInput>
  }

  export type diagnosticosCreateManyPacientesInputEnvelope = {
    data: diagnosticosCreateManyPacientesInput | diagnosticosCreateManyPacientesInput[]
    skipDuplicates?: boolean
  }

  export type ejercicios_asignadosCreateWithoutPacientesInput = {
    id: string
    objetivo?: string | null
    series?: number
    repeticiones?: number
    frecuencia?: string | null
    duracionMinutos?: number | null
    estado?: $Enums.AsignacionEstado
    asignadaEl?: Date | string
    diagnosticos?: diagnosticosCreateNestedOneWithoutEjercicios_asignadosInput
    ejercicios: ejerciciosCreateNestedOneWithoutEjercicios_asignadosInput
    users: usersCreateNestedOneWithoutEjercicios_asignadosInput
    progresos?: progresosCreateNestedManyWithoutEjercicios_asignadosInput
  }

  export type ejercicios_asignadosUncheckedCreateWithoutPacientesInput = {
    id: string
    ejercicioId: string
    kinesiologoId: string
    diagnosticoId?: string | null
    objetivo?: string | null
    series?: number
    repeticiones?: number
    frecuencia?: string | null
    duracionMinutos?: number | null
    estado?: $Enums.AsignacionEstado
    asignadaEl?: Date | string
    progresos?: progresosUncheckedCreateNestedManyWithoutEjercicios_asignadosInput
  }

  export type ejercicios_asignadosCreateOrConnectWithoutPacientesInput = {
    where: ejercicios_asignadosWhereUniqueInput
    create: XOR<ejercicios_asignadosCreateWithoutPacientesInput, ejercicios_asignadosUncheckedCreateWithoutPacientesInput>
  }

  export type ejercicios_asignadosCreateManyPacientesInputEnvelope = {
    data: ejercicios_asignadosCreateManyPacientesInput | ejercicios_asignadosCreateManyPacientesInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutPacientes_pacientes_kinesiologoIdTousersInput = {
    id: string
    nombre: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    diagnosticos?: diagnosticosCreateNestedManyWithoutUsersInput
    ejercicios?: ejerciciosCreateNestedManyWithoutUsersInput
    ejercicios_asignados?: ejercicios_asignadosCreateNestedManyWithoutUsersInput
    pacientes_pacientes_userIdTousers?: pacientesCreateNestedOneWithoutUsers_pacientes_userIdTousersInput
    progresos?: progresosCreateNestedManyWithoutUsersInput
    turnos?: turnosCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPacientes_pacientes_kinesiologoIdTousersInput = {
    id: string
    nombre: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    diagnosticos?: diagnosticosUncheckedCreateNestedManyWithoutUsersInput
    ejercicios?: ejerciciosUncheckedCreateNestedManyWithoutUsersInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedCreateNestedManyWithoutUsersInput
    pacientes_pacientes_userIdTousers?: pacientesUncheckedCreateNestedOneWithoutUsers_pacientes_userIdTousersInput
    progresos?: progresosUncheckedCreateNestedManyWithoutUsersInput
    turnos?: turnosUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPacientes_pacientes_kinesiologoIdTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPacientes_pacientes_kinesiologoIdTousersInput, usersUncheckedCreateWithoutPacientes_pacientes_kinesiologoIdTousersInput>
  }

  export type usersCreateWithoutPacientes_pacientes_userIdTousersInput = {
    id: string
    nombre: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    diagnosticos?: diagnosticosCreateNestedManyWithoutUsersInput
    ejercicios?: ejerciciosCreateNestedManyWithoutUsersInput
    ejercicios_asignados?: ejercicios_asignadosCreateNestedManyWithoutUsersInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesCreateNestedManyWithoutUsers_pacientes_kinesiologoIdTousersInput
    progresos?: progresosCreateNestedManyWithoutUsersInput
    turnos?: turnosCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPacientes_pacientes_userIdTousersInput = {
    id: string
    nombre: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    diagnosticos?: diagnosticosUncheckedCreateNestedManyWithoutUsersInput
    ejercicios?: ejerciciosUncheckedCreateNestedManyWithoutUsersInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedCreateNestedManyWithoutUsersInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUncheckedCreateNestedManyWithoutUsers_pacientes_kinesiologoIdTousersInput
    progresos?: progresosUncheckedCreateNestedManyWithoutUsersInput
    turnos?: turnosUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPacientes_pacientes_userIdTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPacientes_pacientes_userIdTousersInput, usersUncheckedCreateWithoutPacientes_pacientes_userIdTousersInput>
  }

  export type progresosCreateWithoutPacientesInput = {
    id: string
    fecha?: Date | string
    completado?: boolean
    seriesRealizadas?: number | null
    repeticionesRealizadas?: number | null
    pesoKg?: number | null
    observaciones?: string | null
    ejercicios_asignados: ejercicios_asignadosCreateNestedOneWithoutProgresosInput
    users: usersCreateNestedOneWithoutProgresosInput
  }

  export type progresosUncheckedCreateWithoutPacientesInput = {
    id: string
    asignacionId: string
    fecha?: Date | string
    completado?: boolean
    seriesRealizadas?: number | null
    repeticionesRealizadas?: number | null
    pesoKg?: number | null
    observaciones?: string | null
    registradoPorUserId: string
  }

  export type progresosCreateOrConnectWithoutPacientesInput = {
    where: progresosWhereUniqueInput
    create: XOR<progresosCreateWithoutPacientesInput, progresosUncheckedCreateWithoutPacientesInput>
  }

  export type progresosCreateManyPacientesInputEnvelope = {
    data: progresosCreateManyPacientesInput | progresosCreateManyPacientesInput[]
    skipDuplicates?: boolean
  }

  export type turnosCreateWithoutPacientesInput = {
    id: string
    iniciaEn: Date | string
    terminaEn: Date | string
    estado?: $Enums.TurnoEstado
    motivo?: string | null
    notas?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    users: usersCreateNestedOneWithoutTurnosInput
  }

  export type turnosUncheckedCreateWithoutPacientesInput = {
    id: string
    kinesiologoId: string
    iniciaEn: Date | string
    terminaEn: Date | string
    estado?: $Enums.TurnoEstado
    motivo?: string | null
    notas?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type turnosCreateOrConnectWithoutPacientesInput = {
    where: turnosWhereUniqueInput
    create: XOR<turnosCreateWithoutPacientesInput, turnosUncheckedCreateWithoutPacientesInput>
  }

  export type turnosCreateManyPacientesInputEnvelope = {
    data: turnosCreateManyPacientesInput | turnosCreateManyPacientesInput[]
    skipDuplicates?: boolean
  }

  export type diagnosticosUpsertWithWhereUniqueWithoutPacientesInput = {
    where: diagnosticosWhereUniqueInput
    update: XOR<diagnosticosUpdateWithoutPacientesInput, diagnosticosUncheckedUpdateWithoutPacientesInput>
    create: XOR<diagnosticosCreateWithoutPacientesInput, diagnosticosUncheckedCreateWithoutPacientesInput>
  }

  export type diagnosticosUpdateWithWhereUniqueWithoutPacientesInput = {
    where: diagnosticosWhereUniqueInput
    data: XOR<diagnosticosUpdateWithoutPacientesInput, diagnosticosUncheckedUpdateWithoutPacientesInput>
  }

  export type diagnosticosUpdateManyWithWhereWithoutPacientesInput = {
    where: diagnosticosScalarWhereInput
    data: XOR<diagnosticosUpdateManyMutationInput, diagnosticosUncheckedUpdateManyWithoutPacientesInput>
  }

  export type diagnosticosScalarWhereInput = {
    AND?: diagnosticosScalarWhereInput | diagnosticosScalarWhereInput[]
    OR?: diagnosticosScalarWhereInput[]
    NOT?: diagnosticosScalarWhereInput | diagnosticosScalarWhereInput[]
    id?: StringFilter<"diagnosticos"> | string
    pacienteId?: StringFilter<"diagnosticos"> | string
    kinesiologoId?: StringFilter<"diagnosticos"> | string
    lesion?: StringFilter<"diagnosticos"> | string
    descripcion?: StringFilter<"diagnosticos"> | string
    tratamiento?: StringNullableFilter<"diagnosticos"> | string | null
    creadoEl?: DateTimeFilter<"diagnosticos"> | Date | string
    activo?: BoolFilter<"diagnosticos"> | boolean
  }

  export type ejercicios_asignadosUpsertWithWhereUniqueWithoutPacientesInput = {
    where: ejercicios_asignadosWhereUniqueInput
    update: XOR<ejercicios_asignadosUpdateWithoutPacientesInput, ejercicios_asignadosUncheckedUpdateWithoutPacientesInput>
    create: XOR<ejercicios_asignadosCreateWithoutPacientesInput, ejercicios_asignadosUncheckedCreateWithoutPacientesInput>
  }

  export type ejercicios_asignadosUpdateWithWhereUniqueWithoutPacientesInput = {
    where: ejercicios_asignadosWhereUniqueInput
    data: XOR<ejercicios_asignadosUpdateWithoutPacientesInput, ejercicios_asignadosUncheckedUpdateWithoutPacientesInput>
  }

  export type ejercicios_asignadosUpdateManyWithWhereWithoutPacientesInput = {
    where: ejercicios_asignadosScalarWhereInput
    data: XOR<ejercicios_asignadosUpdateManyMutationInput, ejercicios_asignadosUncheckedUpdateManyWithoutPacientesInput>
  }

  export type usersUpsertWithoutPacientes_pacientes_kinesiologoIdTousersInput = {
    update: XOR<usersUpdateWithoutPacientes_pacientes_kinesiologoIdTousersInput, usersUncheckedUpdateWithoutPacientes_pacientes_kinesiologoIdTousersInput>
    create: XOR<usersCreateWithoutPacientes_pacientes_kinesiologoIdTousersInput, usersUncheckedCreateWithoutPacientes_pacientes_kinesiologoIdTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPacientes_pacientes_kinesiologoIdTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPacientes_pacientes_kinesiologoIdTousersInput, usersUncheckedUpdateWithoutPacientes_pacientes_kinesiologoIdTousersInput>
  }

  export type usersUpdateWithoutPacientes_pacientes_kinesiologoIdTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUpdateManyWithoutUsersNestedInput
    ejercicios?: ejerciciosUpdateManyWithoutUsersNestedInput
    ejercicios_asignados?: ejercicios_asignadosUpdateManyWithoutUsersNestedInput
    pacientes_pacientes_userIdTousers?: pacientesUpdateOneWithoutUsers_pacientes_userIdTousersNestedInput
    progresos?: progresosUpdateManyWithoutUsersNestedInput
    turnos?: turnosUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPacientes_pacientes_kinesiologoIdTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUncheckedUpdateManyWithoutUsersNestedInput
    ejercicios?: ejerciciosUncheckedUpdateManyWithoutUsersNestedInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedUpdateManyWithoutUsersNestedInput
    pacientes_pacientes_userIdTousers?: pacientesUncheckedUpdateOneWithoutUsers_pacientes_userIdTousersNestedInput
    progresos?: progresosUncheckedUpdateManyWithoutUsersNestedInput
    turnos?: turnosUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUpsertWithoutPacientes_pacientes_userIdTousersInput = {
    update: XOR<usersUpdateWithoutPacientes_pacientes_userIdTousersInput, usersUncheckedUpdateWithoutPacientes_pacientes_userIdTousersInput>
    create: XOR<usersCreateWithoutPacientes_pacientes_userIdTousersInput, usersUncheckedCreateWithoutPacientes_pacientes_userIdTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPacientes_pacientes_userIdTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPacientes_pacientes_userIdTousersInput, usersUncheckedUpdateWithoutPacientes_pacientes_userIdTousersInput>
  }

  export type usersUpdateWithoutPacientes_pacientes_userIdTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUpdateManyWithoutUsersNestedInput
    ejercicios?: ejerciciosUpdateManyWithoutUsersNestedInput
    ejercicios_asignados?: ejercicios_asignadosUpdateManyWithoutUsersNestedInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUpdateManyWithoutUsers_pacientes_kinesiologoIdTousersNestedInput
    progresos?: progresosUpdateManyWithoutUsersNestedInput
    turnos?: turnosUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPacientes_pacientes_userIdTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUncheckedUpdateManyWithoutUsersNestedInput
    ejercicios?: ejerciciosUncheckedUpdateManyWithoutUsersNestedInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedUpdateManyWithoutUsersNestedInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUncheckedUpdateManyWithoutUsers_pacientes_kinesiologoIdTousersNestedInput
    progresos?: progresosUncheckedUpdateManyWithoutUsersNestedInput
    turnos?: turnosUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type progresosUpsertWithWhereUniqueWithoutPacientesInput = {
    where: progresosWhereUniqueInput
    update: XOR<progresosUpdateWithoutPacientesInput, progresosUncheckedUpdateWithoutPacientesInput>
    create: XOR<progresosCreateWithoutPacientesInput, progresosUncheckedCreateWithoutPacientesInput>
  }

  export type progresosUpdateWithWhereUniqueWithoutPacientesInput = {
    where: progresosWhereUniqueInput
    data: XOR<progresosUpdateWithoutPacientesInput, progresosUncheckedUpdateWithoutPacientesInput>
  }

  export type progresosUpdateManyWithWhereWithoutPacientesInput = {
    where: progresosScalarWhereInput
    data: XOR<progresosUpdateManyMutationInput, progresosUncheckedUpdateManyWithoutPacientesInput>
  }

  export type turnosUpsertWithWhereUniqueWithoutPacientesInput = {
    where: turnosWhereUniqueInput
    update: XOR<turnosUpdateWithoutPacientesInput, turnosUncheckedUpdateWithoutPacientesInput>
    create: XOR<turnosCreateWithoutPacientesInput, turnosUncheckedCreateWithoutPacientesInput>
  }

  export type turnosUpdateWithWhereUniqueWithoutPacientesInput = {
    where: turnosWhereUniqueInput
    data: XOR<turnosUpdateWithoutPacientesInput, turnosUncheckedUpdateWithoutPacientesInput>
  }

  export type turnosUpdateManyWithWhereWithoutPacientesInput = {
    where: turnosScalarWhereInput
    data: XOR<turnosUpdateManyMutationInput, turnosUncheckedUpdateManyWithoutPacientesInput>
  }

  export type turnosScalarWhereInput = {
    AND?: turnosScalarWhereInput | turnosScalarWhereInput[]
    OR?: turnosScalarWhereInput[]
    NOT?: turnosScalarWhereInput | turnosScalarWhereInput[]
    id?: StringFilter<"turnos"> | string
    pacienteId?: StringFilter<"turnos"> | string
    kinesiologoId?: StringFilter<"turnos"> | string
    iniciaEn?: DateTimeFilter<"turnos"> | Date | string
    terminaEn?: DateTimeFilter<"turnos"> | Date | string
    estado?: EnumTurnoEstadoFilter<"turnos"> | $Enums.TurnoEstado
    motivo?: StringNullableFilter<"turnos"> | string | null
    notas?: StringNullableFilter<"turnos"> | string | null
    createdAt?: DateTimeFilter<"turnos"> | Date | string
    updatedAt?: DateTimeFilter<"turnos"> | Date | string
  }

  export type ejercicios_asignadosCreateWithoutProgresosInput = {
    id: string
    objetivo?: string | null
    series?: number
    repeticiones?: number
    frecuencia?: string | null
    duracionMinutos?: number | null
    estado?: $Enums.AsignacionEstado
    asignadaEl?: Date | string
    diagnosticos?: diagnosticosCreateNestedOneWithoutEjercicios_asignadosInput
    ejercicios: ejerciciosCreateNestedOneWithoutEjercicios_asignadosInput
    users: usersCreateNestedOneWithoutEjercicios_asignadosInput
    pacientes: pacientesCreateNestedOneWithoutEjercicios_asignadosInput
  }

  export type ejercicios_asignadosUncheckedCreateWithoutProgresosInput = {
    id: string
    pacienteId: string
    ejercicioId: string
    kinesiologoId: string
    diagnosticoId?: string | null
    objetivo?: string | null
    series?: number
    repeticiones?: number
    frecuencia?: string | null
    duracionMinutos?: number | null
    estado?: $Enums.AsignacionEstado
    asignadaEl?: Date | string
  }

  export type ejercicios_asignadosCreateOrConnectWithoutProgresosInput = {
    where: ejercicios_asignadosWhereUniqueInput
    create: XOR<ejercicios_asignadosCreateWithoutProgresosInput, ejercicios_asignadosUncheckedCreateWithoutProgresosInput>
  }

  export type pacientesCreateWithoutProgresosInput = {
    id: string
    dni: string
    fechaNacimiento?: Date | string | null
    telefono?: string | null
    recibeRecordatorios?: boolean
    domicilio?: string | null
    obraSocial?: string | null
    createdAt?: Date | string
    email?: string | null
    nombre?: string | null
    diagnosticos?: diagnosticosCreateNestedManyWithoutPacientesInput
    ejercicios_asignados?: ejercicios_asignadosCreateNestedManyWithoutPacientesInput
    users_pacientes_kinesiologoIdTousers?: usersCreateNestedOneWithoutPacientes_pacientes_kinesiologoIdTousersInput
    users_pacientes_userIdTousers?: usersCreateNestedOneWithoutPacientes_pacientes_userIdTousersInput
    turnos?: turnosCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutProgresosInput = {
    id: string
    userId?: string | null
    kinesiologoId?: string | null
    dni: string
    fechaNacimiento?: Date | string | null
    telefono?: string | null
    recibeRecordatorios?: boolean
    domicilio?: string | null
    obraSocial?: string | null
    createdAt?: Date | string
    email?: string | null
    nombre?: string | null
    diagnosticos?: diagnosticosUncheckedCreateNestedManyWithoutPacientesInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedCreateNestedManyWithoutPacientesInput
    turnos?: turnosUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutProgresosInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutProgresosInput, pacientesUncheckedCreateWithoutProgresosInput>
  }

  export type usersCreateWithoutProgresosInput = {
    id: string
    nombre: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    diagnosticos?: diagnosticosCreateNestedManyWithoutUsersInput
    ejercicios?: ejerciciosCreateNestedManyWithoutUsersInput
    ejercicios_asignados?: ejercicios_asignadosCreateNestedManyWithoutUsersInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesCreateNestedManyWithoutUsers_pacientes_kinesiologoIdTousersInput
    pacientes_pacientes_userIdTousers?: pacientesCreateNestedOneWithoutUsers_pacientes_userIdTousersInput
    turnos?: turnosCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProgresosInput = {
    id: string
    nombre: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    diagnosticos?: diagnosticosUncheckedCreateNestedManyWithoutUsersInput
    ejercicios?: ejerciciosUncheckedCreateNestedManyWithoutUsersInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedCreateNestedManyWithoutUsersInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUncheckedCreateNestedManyWithoutUsers_pacientes_kinesiologoIdTousersInput
    pacientes_pacientes_userIdTousers?: pacientesUncheckedCreateNestedOneWithoutUsers_pacientes_userIdTousersInput
    turnos?: turnosUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProgresosInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProgresosInput, usersUncheckedCreateWithoutProgresosInput>
  }

  export type ejercicios_asignadosUpsertWithoutProgresosInput = {
    update: XOR<ejercicios_asignadosUpdateWithoutProgresosInput, ejercicios_asignadosUncheckedUpdateWithoutProgresosInput>
    create: XOR<ejercicios_asignadosCreateWithoutProgresosInput, ejercicios_asignadosUncheckedCreateWithoutProgresosInput>
    where?: ejercicios_asignadosWhereInput
  }

  export type ejercicios_asignadosUpdateToOneWithWhereWithoutProgresosInput = {
    where?: ejercicios_asignadosWhereInput
    data: XOR<ejercicios_asignadosUpdateWithoutProgresosInput, ejercicios_asignadosUncheckedUpdateWithoutProgresosInput>
  }

  export type ejercicios_asignadosUpdateWithoutProgresosInput = {
    id?: StringFieldUpdateOperationsInput | string
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracionMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumAsignacionEstadoFieldUpdateOperationsInput | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUpdateOneWithoutEjercicios_asignadosNestedInput
    ejercicios?: ejerciciosUpdateOneRequiredWithoutEjercicios_asignadosNestedInput
    users?: usersUpdateOneRequiredWithoutEjercicios_asignadosNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutEjercicios_asignadosNestedInput
  }

  export type ejercicios_asignadosUncheckedUpdateWithoutProgresosInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: StringFieldUpdateOperationsInput | string
    diagnosticoId?: NullableStringFieldUpdateOperationsInput | string | null
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracionMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumAsignacionEstadoFieldUpdateOperationsInput | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pacientesUpsertWithoutProgresosInput = {
    update: XOR<pacientesUpdateWithoutProgresosInput, pacientesUncheckedUpdateWithoutProgresosInput>
    create: XOR<pacientesCreateWithoutProgresosInput, pacientesUncheckedCreateWithoutProgresosInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutProgresosInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutProgresosInput, pacientesUncheckedUpdateWithoutProgresosInput>
  }

  export type pacientesUpdateWithoutProgresosInput = {
    id?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    recibeRecordatorios?: BoolFieldUpdateOperationsInput | boolean
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    obraSocial?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticos?: diagnosticosUpdateManyWithoutPacientesNestedInput
    ejercicios_asignados?: ejercicios_asignadosUpdateManyWithoutPacientesNestedInput
    users_pacientes_kinesiologoIdTousers?: usersUpdateOneWithoutPacientes_pacientes_kinesiologoIdTousersNestedInput
    users_pacientes_userIdTousers?: usersUpdateOneWithoutPacientes_pacientes_userIdTousersNestedInput
    turnos?: turnosUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutProgresosInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    kinesiologoId?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    recibeRecordatorios?: BoolFieldUpdateOperationsInput | boolean
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    obraSocial?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticos?: diagnosticosUncheckedUpdateManyWithoutPacientesNestedInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedUpdateManyWithoutPacientesNestedInput
    turnos?: turnosUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type usersUpsertWithoutProgresosInput = {
    update: XOR<usersUpdateWithoutProgresosInput, usersUncheckedUpdateWithoutProgresosInput>
    create: XOR<usersCreateWithoutProgresosInput, usersUncheckedCreateWithoutProgresosInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProgresosInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProgresosInput, usersUncheckedUpdateWithoutProgresosInput>
  }

  export type usersUpdateWithoutProgresosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUpdateManyWithoutUsersNestedInput
    ejercicios?: ejerciciosUpdateManyWithoutUsersNestedInput
    ejercicios_asignados?: ejercicios_asignadosUpdateManyWithoutUsersNestedInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUpdateManyWithoutUsers_pacientes_kinesiologoIdTousersNestedInput
    pacientes_pacientes_userIdTousers?: pacientesUpdateOneWithoutUsers_pacientes_userIdTousersNestedInput
    turnos?: turnosUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProgresosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUncheckedUpdateManyWithoutUsersNestedInput
    ejercicios?: ejerciciosUncheckedUpdateManyWithoutUsersNestedInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedUpdateManyWithoutUsersNestedInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUncheckedUpdateManyWithoutUsers_pacientes_kinesiologoIdTousersNestedInput
    pacientes_pacientes_userIdTousers?: pacientesUncheckedUpdateOneWithoutUsers_pacientes_userIdTousersNestedInput
    turnos?: turnosUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutTurnosInput = {
    id: string
    nombre: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    diagnosticos?: diagnosticosCreateNestedManyWithoutUsersInput
    ejercicios?: ejerciciosCreateNestedManyWithoutUsersInput
    ejercicios_asignados?: ejercicios_asignadosCreateNestedManyWithoutUsersInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesCreateNestedManyWithoutUsers_pacientes_kinesiologoIdTousersInput
    pacientes_pacientes_userIdTousers?: pacientesCreateNestedOneWithoutUsers_pacientes_userIdTousersInput
    progresos?: progresosCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTurnosInput = {
    id: string
    nombre: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    diagnosticos?: diagnosticosUncheckedCreateNestedManyWithoutUsersInput
    ejercicios?: ejerciciosUncheckedCreateNestedManyWithoutUsersInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedCreateNestedManyWithoutUsersInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUncheckedCreateNestedManyWithoutUsers_pacientes_kinesiologoIdTousersInput
    pacientes_pacientes_userIdTousers?: pacientesUncheckedCreateNestedOneWithoutUsers_pacientes_userIdTousersInput
    progresos?: progresosUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTurnosInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTurnosInput, usersUncheckedCreateWithoutTurnosInput>
  }

  export type pacientesCreateWithoutTurnosInput = {
    id: string
    dni: string
    fechaNacimiento?: Date | string | null
    telefono?: string | null
    recibeRecordatorios?: boolean
    domicilio?: string | null
    obraSocial?: string | null
    createdAt?: Date | string
    email?: string | null
    nombre?: string | null
    diagnosticos?: diagnosticosCreateNestedManyWithoutPacientesInput
    ejercicios_asignados?: ejercicios_asignadosCreateNestedManyWithoutPacientesInput
    users_pacientes_kinesiologoIdTousers?: usersCreateNestedOneWithoutPacientes_pacientes_kinesiologoIdTousersInput
    users_pacientes_userIdTousers?: usersCreateNestedOneWithoutPacientes_pacientes_userIdTousersInput
    progresos?: progresosCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutTurnosInput = {
    id: string
    userId?: string | null
    kinesiologoId?: string | null
    dni: string
    fechaNacimiento?: Date | string | null
    telefono?: string | null
    recibeRecordatorios?: boolean
    domicilio?: string | null
    obraSocial?: string | null
    createdAt?: Date | string
    email?: string | null
    nombre?: string | null
    diagnosticos?: diagnosticosUncheckedCreateNestedManyWithoutPacientesInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedCreateNestedManyWithoutPacientesInput
    progresos?: progresosUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutTurnosInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutTurnosInput, pacientesUncheckedCreateWithoutTurnosInput>
  }

  export type usersUpsertWithoutTurnosInput = {
    update: XOR<usersUpdateWithoutTurnosInput, usersUncheckedUpdateWithoutTurnosInput>
    create: XOR<usersCreateWithoutTurnosInput, usersUncheckedCreateWithoutTurnosInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTurnosInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTurnosInput, usersUncheckedUpdateWithoutTurnosInput>
  }

  export type usersUpdateWithoutTurnosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUpdateManyWithoutUsersNestedInput
    ejercicios?: ejerciciosUpdateManyWithoutUsersNestedInput
    ejercicios_asignados?: ejercicios_asignadosUpdateManyWithoutUsersNestedInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUpdateManyWithoutUsers_pacientes_kinesiologoIdTousersNestedInput
    pacientes_pacientes_userIdTousers?: pacientesUpdateOneWithoutUsers_pacientes_userIdTousersNestedInput
    progresos?: progresosUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTurnosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUncheckedUpdateManyWithoutUsersNestedInput
    ejercicios?: ejerciciosUncheckedUpdateManyWithoutUsersNestedInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedUpdateManyWithoutUsersNestedInput
    pacientes_pacientes_kinesiologoIdTousers?: pacientesUncheckedUpdateManyWithoutUsers_pacientes_kinesiologoIdTousersNestedInput
    pacientes_pacientes_userIdTousers?: pacientesUncheckedUpdateOneWithoutUsers_pacientes_userIdTousersNestedInput
    progresos?: progresosUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type pacientesUpsertWithoutTurnosInput = {
    update: XOR<pacientesUpdateWithoutTurnosInput, pacientesUncheckedUpdateWithoutTurnosInput>
    create: XOR<pacientesCreateWithoutTurnosInput, pacientesUncheckedCreateWithoutTurnosInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutTurnosInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutTurnosInput, pacientesUncheckedUpdateWithoutTurnosInput>
  }

  export type pacientesUpdateWithoutTurnosInput = {
    id?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    recibeRecordatorios?: BoolFieldUpdateOperationsInput | boolean
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    obraSocial?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticos?: diagnosticosUpdateManyWithoutPacientesNestedInput
    ejercicios_asignados?: ejercicios_asignadosUpdateManyWithoutPacientesNestedInput
    users_pacientes_kinesiologoIdTousers?: usersUpdateOneWithoutPacientes_pacientes_kinesiologoIdTousersNestedInput
    users_pacientes_userIdTousers?: usersUpdateOneWithoutPacientes_pacientes_userIdTousersNestedInput
    progresos?: progresosUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutTurnosInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    kinesiologoId?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    recibeRecordatorios?: BoolFieldUpdateOperationsInput | boolean
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    obraSocial?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticos?: diagnosticosUncheckedUpdateManyWithoutPacientesNestedInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedUpdateManyWithoutPacientesNestedInput
    progresos?: progresosUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type diagnosticosCreateWithoutUsersInput = {
    id: string
    lesion: string
    descripcion: string
    tratamiento?: string | null
    creadoEl?: Date | string
    activo?: boolean
    pacientes: pacientesCreateNestedOneWithoutDiagnosticosInput
    ejercicios_asignados?: ejercicios_asignadosCreateNestedManyWithoutDiagnosticosInput
  }

  export type diagnosticosUncheckedCreateWithoutUsersInput = {
    id: string
    pacienteId: string
    lesion: string
    descripcion: string
    tratamiento?: string | null
    creadoEl?: Date | string
    activo?: boolean
    ejercicios_asignados?: ejercicios_asignadosUncheckedCreateNestedManyWithoutDiagnosticosInput
  }

  export type diagnosticosCreateOrConnectWithoutUsersInput = {
    where: diagnosticosWhereUniqueInput
    create: XOR<diagnosticosCreateWithoutUsersInput, diagnosticosUncheckedCreateWithoutUsersInput>
  }

  export type diagnosticosCreateManyUsersInputEnvelope = {
    data: diagnosticosCreateManyUsersInput | diagnosticosCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ejerciciosCreateWithoutUsersInput = {
    id: string
    nombre: string
    descripcion: string
    instrucciones?: string | null
    zonaCuerpo: string
    nivel?: string
    creadoEl?: Date | string
    ejercicios_asignados?: ejercicios_asignadosCreateNestedManyWithoutEjerciciosInput
  }

  export type ejerciciosUncheckedCreateWithoutUsersInput = {
    id: string
    nombre: string
    descripcion: string
    instrucciones?: string | null
    zonaCuerpo: string
    nivel?: string
    creadoEl?: Date | string
    ejercicios_asignados?: ejercicios_asignadosUncheckedCreateNestedManyWithoutEjerciciosInput
  }

  export type ejerciciosCreateOrConnectWithoutUsersInput = {
    where: ejerciciosWhereUniqueInput
    create: XOR<ejerciciosCreateWithoutUsersInput, ejerciciosUncheckedCreateWithoutUsersInput>
  }

  export type ejerciciosCreateManyUsersInputEnvelope = {
    data: ejerciciosCreateManyUsersInput | ejerciciosCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ejercicios_asignadosCreateWithoutUsersInput = {
    id: string
    objetivo?: string | null
    series?: number
    repeticiones?: number
    frecuencia?: string | null
    duracionMinutos?: number | null
    estado?: $Enums.AsignacionEstado
    asignadaEl?: Date | string
    diagnosticos?: diagnosticosCreateNestedOneWithoutEjercicios_asignadosInput
    ejercicios: ejerciciosCreateNestedOneWithoutEjercicios_asignadosInput
    pacientes: pacientesCreateNestedOneWithoutEjercicios_asignadosInput
    progresos?: progresosCreateNestedManyWithoutEjercicios_asignadosInput
  }

  export type ejercicios_asignadosUncheckedCreateWithoutUsersInput = {
    id: string
    pacienteId: string
    ejercicioId: string
    diagnosticoId?: string | null
    objetivo?: string | null
    series?: number
    repeticiones?: number
    frecuencia?: string | null
    duracionMinutos?: number | null
    estado?: $Enums.AsignacionEstado
    asignadaEl?: Date | string
    progresos?: progresosUncheckedCreateNestedManyWithoutEjercicios_asignadosInput
  }

  export type ejercicios_asignadosCreateOrConnectWithoutUsersInput = {
    where: ejercicios_asignadosWhereUniqueInput
    create: XOR<ejercicios_asignadosCreateWithoutUsersInput, ejercicios_asignadosUncheckedCreateWithoutUsersInput>
  }

  export type ejercicios_asignadosCreateManyUsersInputEnvelope = {
    data: ejercicios_asignadosCreateManyUsersInput | ejercicios_asignadosCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type pacientesCreateWithoutUsers_pacientes_kinesiologoIdTousersInput = {
    id: string
    dni: string
    fechaNacimiento?: Date | string | null
    telefono?: string | null
    recibeRecordatorios?: boolean
    domicilio?: string | null
    obraSocial?: string | null
    createdAt?: Date | string
    email?: string | null
    nombre?: string | null
    diagnosticos?: diagnosticosCreateNestedManyWithoutPacientesInput
    ejercicios_asignados?: ejercicios_asignadosCreateNestedManyWithoutPacientesInput
    users_pacientes_userIdTousers?: usersCreateNestedOneWithoutPacientes_pacientes_userIdTousersInput
    progresos?: progresosCreateNestedManyWithoutPacientesInput
    turnos?: turnosCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutUsers_pacientes_kinesiologoIdTousersInput = {
    id: string
    userId?: string | null
    dni: string
    fechaNacimiento?: Date | string | null
    telefono?: string | null
    recibeRecordatorios?: boolean
    domicilio?: string | null
    obraSocial?: string | null
    createdAt?: Date | string
    email?: string | null
    nombre?: string | null
    diagnosticos?: diagnosticosUncheckedCreateNestedManyWithoutPacientesInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedCreateNestedManyWithoutPacientesInput
    progresos?: progresosUncheckedCreateNestedManyWithoutPacientesInput
    turnos?: turnosUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutUsers_pacientes_kinesiologoIdTousersInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutUsers_pacientes_kinesiologoIdTousersInput, pacientesUncheckedCreateWithoutUsers_pacientes_kinesiologoIdTousersInput>
  }

  export type pacientesCreateManyUsers_pacientes_kinesiologoIdTousersInputEnvelope = {
    data: pacientesCreateManyUsers_pacientes_kinesiologoIdTousersInput | pacientesCreateManyUsers_pacientes_kinesiologoIdTousersInput[]
    skipDuplicates?: boolean
  }

  export type pacientesCreateWithoutUsers_pacientes_userIdTousersInput = {
    id: string
    dni: string
    fechaNacimiento?: Date | string | null
    telefono?: string | null
    recibeRecordatorios?: boolean
    domicilio?: string | null
    obraSocial?: string | null
    createdAt?: Date | string
    email?: string | null
    nombre?: string | null
    diagnosticos?: diagnosticosCreateNestedManyWithoutPacientesInput
    ejercicios_asignados?: ejercicios_asignadosCreateNestedManyWithoutPacientesInput
    users_pacientes_kinesiologoIdTousers?: usersCreateNestedOneWithoutPacientes_pacientes_kinesiologoIdTousersInput
    progresos?: progresosCreateNestedManyWithoutPacientesInput
    turnos?: turnosCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutUsers_pacientes_userIdTousersInput = {
    id: string
    kinesiologoId?: string | null
    dni: string
    fechaNacimiento?: Date | string | null
    telefono?: string | null
    recibeRecordatorios?: boolean
    domicilio?: string | null
    obraSocial?: string | null
    createdAt?: Date | string
    email?: string | null
    nombre?: string | null
    diagnosticos?: diagnosticosUncheckedCreateNestedManyWithoutPacientesInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedCreateNestedManyWithoutPacientesInput
    progresos?: progresosUncheckedCreateNestedManyWithoutPacientesInput
    turnos?: turnosUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutUsers_pacientes_userIdTousersInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutUsers_pacientes_userIdTousersInput, pacientesUncheckedCreateWithoutUsers_pacientes_userIdTousersInput>
  }

  export type progresosCreateWithoutUsersInput = {
    id: string
    fecha?: Date | string
    completado?: boolean
    seriesRealizadas?: number | null
    repeticionesRealizadas?: number | null
    pesoKg?: number | null
    observaciones?: string | null
    ejercicios_asignados: ejercicios_asignadosCreateNestedOneWithoutProgresosInput
    pacientes: pacientesCreateNestedOneWithoutProgresosInput
  }

  export type progresosUncheckedCreateWithoutUsersInput = {
    id: string
    asignacionId: string
    pacienteId: string
    fecha?: Date | string
    completado?: boolean
    seriesRealizadas?: number | null
    repeticionesRealizadas?: number | null
    pesoKg?: number | null
    observaciones?: string | null
  }

  export type progresosCreateOrConnectWithoutUsersInput = {
    where: progresosWhereUniqueInput
    create: XOR<progresosCreateWithoutUsersInput, progresosUncheckedCreateWithoutUsersInput>
  }

  export type progresosCreateManyUsersInputEnvelope = {
    data: progresosCreateManyUsersInput | progresosCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type turnosCreateWithoutUsersInput = {
    id: string
    iniciaEn: Date | string
    terminaEn: Date | string
    estado?: $Enums.TurnoEstado
    motivo?: string | null
    notas?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pacientes: pacientesCreateNestedOneWithoutTurnosInput
  }

  export type turnosUncheckedCreateWithoutUsersInput = {
    id: string
    pacienteId: string
    iniciaEn: Date | string
    terminaEn: Date | string
    estado?: $Enums.TurnoEstado
    motivo?: string | null
    notas?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type turnosCreateOrConnectWithoutUsersInput = {
    where: turnosWhereUniqueInput
    create: XOR<turnosCreateWithoutUsersInput, turnosUncheckedCreateWithoutUsersInput>
  }

  export type turnosCreateManyUsersInputEnvelope = {
    data: turnosCreateManyUsersInput | turnosCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type diagnosticosUpsertWithWhereUniqueWithoutUsersInput = {
    where: diagnosticosWhereUniqueInput
    update: XOR<diagnosticosUpdateWithoutUsersInput, diagnosticosUncheckedUpdateWithoutUsersInput>
    create: XOR<diagnosticosCreateWithoutUsersInput, diagnosticosUncheckedCreateWithoutUsersInput>
  }

  export type diagnosticosUpdateWithWhereUniqueWithoutUsersInput = {
    where: diagnosticosWhereUniqueInput
    data: XOR<diagnosticosUpdateWithoutUsersInput, diagnosticosUncheckedUpdateWithoutUsersInput>
  }

  export type diagnosticosUpdateManyWithWhereWithoutUsersInput = {
    where: diagnosticosScalarWhereInput
    data: XOR<diagnosticosUpdateManyMutationInput, diagnosticosUncheckedUpdateManyWithoutUsersInput>
  }

  export type ejerciciosUpsertWithWhereUniqueWithoutUsersInput = {
    where: ejerciciosWhereUniqueInput
    update: XOR<ejerciciosUpdateWithoutUsersInput, ejerciciosUncheckedUpdateWithoutUsersInput>
    create: XOR<ejerciciosCreateWithoutUsersInput, ejerciciosUncheckedCreateWithoutUsersInput>
  }

  export type ejerciciosUpdateWithWhereUniqueWithoutUsersInput = {
    where: ejerciciosWhereUniqueInput
    data: XOR<ejerciciosUpdateWithoutUsersInput, ejerciciosUncheckedUpdateWithoutUsersInput>
  }

  export type ejerciciosUpdateManyWithWhereWithoutUsersInput = {
    where: ejerciciosScalarWhereInput
    data: XOR<ejerciciosUpdateManyMutationInput, ejerciciosUncheckedUpdateManyWithoutUsersInput>
  }

  export type ejerciciosScalarWhereInput = {
    AND?: ejerciciosScalarWhereInput | ejerciciosScalarWhereInput[]
    OR?: ejerciciosScalarWhereInput[]
    NOT?: ejerciciosScalarWhereInput | ejerciciosScalarWhereInput[]
    id?: StringFilter<"ejercicios"> | string
    nombre?: StringFilter<"ejercicios"> | string
    descripcion?: StringFilter<"ejercicios"> | string
    instrucciones?: StringNullableFilter<"ejercicios"> | string | null
    zonaCuerpo?: StringFilter<"ejercicios"> | string
    nivel?: StringFilter<"ejercicios"> | string
    creadoPorId?: StringFilter<"ejercicios"> | string
    creadoEl?: DateTimeFilter<"ejercicios"> | Date | string
  }

  export type ejercicios_asignadosUpsertWithWhereUniqueWithoutUsersInput = {
    where: ejercicios_asignadosWhereUniqueInput
    update: XOR<ejercicios_asignadosUpdateWithoutUsersInput, ejercicios_asignadosUncheckedUpdateWithoutUsersInput>
    create: XOR<ejercicios_asignadosCreateWithoutUsersInput, ejercicios_asignadosUncheckedCreateWithoutUsersInput>
  }

  export type ejercicios_asignadosUpdateWithWhereUniqueWithoutUsersInput = {
    where: ejercicios_asignadosWhereUniqueInput
    data: XOR<ejercicios_asignadosUpdateWithoutUsersInput, ejercicios_asignadosUncheckedUpdateWithoutUsersInput>
  }

  export type ejercicios_asignadosUpdateManyWithWhereWithoutUsersInput = {
    where: ejercicios_asignadosScalarWhereInput
    data: XOR<ejercicios_asignadosUpdateManyMutationInput, ejercicios_asignadosUncheckedUpdateManyWithoutUsersInput>
  }

  export type pacientesUpsertWithWhereUniqueWithoutUsers_pacientes_kinesiologoIdTousersInput = {
    where: pacientesWhereUniqueInput
    update: XOR<pacientesUpdateWithoutUsers_pacientes_kinesiologoIdTousersInput, pacientesUncheckedUpdateWithoutUsers_pacientes_kinesiologoIdTousersInput>
    create: XOR<pacientesCreateWithoutUsers_pacientes_kinesiologoIdTousersInput, pacientesUncheckedCreateWithoutUsers_pacientes_kinesiologoIdTousersInput>
  }

  export type pacientesUpdateWithWhereUniqueWithoutUsers_pacientes_kinesiologoIdTousersInput = {
    where: pacientesWhereUniqueInput
    data: XOR<pacientesUpdateWithoutUsers_pacientes_kinesiologoIdTousersInput, pacientesUncheckedUpdateWithoutUsers_pacientes_kinesiologoIdTousersInput>
  }

  export type pacientesUpdateManyWithWhereWithoutUsers_pacientes_kinesiologoIdTousersInput = {
    where: pacientesScalarWhereInput
    data: XOR<pacientesUpdateManyMutationInput, pacientesUncheckedUpdateManyWithoutUsers_pacientes_kinesiologoIdTousersInput>
  }

  export type pacientesScalarWhereInput = {
    AND?: pacientesScalarWhereInput | pacientesScalarWhereInput[]
    OR?: pacientesScalarWhereInput[]
    NOT?: pacientesScalarWhereInput | pacientesScalarWhereInput[]
    id?: StringFilter<"pacientes"> | string
    userId?: StringNullableFilter<"pacientes"> | string | null
    kinesiologoId?: StringNullableFilter<"pacientes"> | string | null
    dni?: StringFilter<"pacientes"> | string
    fechaNacimiento?: DateTimeNullableFilter<"pacientes"> | Date | string | null
    telefono?: StringNullableFilter<"pacientes"> | string | null
    recibeRecordatorios?: BoolFilter<"pacientes"> | boolean
    domicilio?: StringNullableFilter<"pacientes"> | string | null
    obraSocial?: StringNullableFilter<"pacientes"> | string | null
    createdAt?: DateTimeFilter<"pacientes"> | Date | string
    email?: StringNullableFilter<"pacientes"> | string | null
    nombre?: StringNullableFilter<"pacientes"> | string | null
  }

  export type pacientesUpsertWithoutUsers_pacientes_userIdTousersInput = {
    update: XOR<pacientesUpdateWithoutUsers_pacientes_userIdTousersInput, pacientesUncheckedUpdateWithoutUsers_pacientes_userIdTousersInput>
    create: XOR<pacientesCreateWithoutUsers_pacientes_userIdTousersInput, pacientesUncheckedCreateWithoutUsers_pacientes_userIdTousersInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutUsers_pacientes_userIdTousersInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutUsers_pacientes_userIdTousersInput, pacientesUncheckedUpdateWithoutUsers_pacientes_userIdTousersInput>
  }

  export type pacientesUpdateWithoutUsers_pacientes_userIdTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    recibeRecordatorios?: BoolFieldUpdateOperationsInput | boolean
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    obraSocial?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticos?: diagnosticosUpdateManyWithoutPacientesNestedInput
    ejercicios_asignados?: ejercicios_asignadosUpdateManyWithoutPacientesNestedInput
    users_pacientes_kinesiologoIdTousers?: usersUpdateOneWithoutPacientes_pacientes_kinesiologoIdTousersNestedInput
    progresos?: progresosUpdateManyWithoutPacientesNestedInput
    turnos?: turnosUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutUsers_pacientes_userIdTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    recibeRecordatorios?: BoolFieldUpdateOperationsInput | boolean
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    obraSocial?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticos?: diagnosticosUncheckedUpdateManyWithoutPacientesNestedInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedUpdateManyWithoutPacientesNestedInput
    progresos?: progresosUncheckedUpdateManyWithoutPacientesNestedInput
    turnos?: turnosUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type progresosUpsertWithWhereUniqueWithoutUsersInput = {
    where: progresosWhereUniqueInput
    update: XOR<progresosUpdateWithoutUsersInput, progresosUncheckedUpdateWithoutUsersInput>
    create: XOR<progresosCreateWithoutUsersInput, progresosUncheckedCreateWithoutUsersInput>
  }

  export type progresosUpdateWithWhereUniqueWithoutUsersInput = {
    where: progresosWhereUniqueInput
    data: XOR<progresosUpdateWithoutUsersInput, progresosUncheckedUpdateWithoutUsersInput>
  }

  export type progresosUpdateManyWithWhereWithoutUsersInput = {
    where: progresosScalarWhereInput
    data: XOR<progresosUpdateManyMutationInput, progresosUncheckedUpdateManyWithoutUsersInput>
  }

  export type turnosUpsertWithWhereUniqueWithoutUsersInput = {
    where: turnosWhereUniqueInput
    update: XOR<turnosUpdateWithoutUsersInput, turnosUncheckedUpdateWithoutUsersInput>
    create: XOR<turnosCreateWithoutUsersInput, turnosUncheckedCreateWithoutUsersInput>
  }

  export type turnosUpdateWithWhereUniqueWithoutUsersInput = {
    where: turnosWhereUniqueInput
    data: XOR<turnosUpdateWithoutUsersInput, turnosUncheckedUpdateWithoutUsersInput>
  }

  export type turnosUpdateManyWithWhereWithoutUsersInput = {
    where: turnosScalarWhereInput
    data: XOR<turnosUpdateManyMutationInput, turnosUncheckedUpdateManyWithoutUsersInput>
  }

  export type ejercicios_asignadosCreateManyDiagnosticosInput = {
    id: string
    pacienteId: string
    ejercicioId: string
    kinesiologoId: string
    objetivo?: string | null
    series?: number
    repeticiones?: number
    frecuencia?: string | null
    duracionMinutos?: number | null
    estado?: $Enums.AsignacionEstado
    asignadaEl?: Date | string
  }

  export type ejercicios_asignadosUpdateWithoutDiagnosticosInput = {
    id?: StringFieldUpdateOperationsInput | string
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracionMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumAsignacionEstadoFieldUpdateOperationsInput | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: ejerciciosUpdateOneRequiredWithoutEjercicios_asignadosNestedInput
    users?: usersUpdateOneRequiredWithoutEjercicios_asignadosNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutEjercicios_asignadosNestedInput
    progresos?: progresosUpdateManyWithoutEjercicios_asignadosNestedInput
  }

  export type ejercicios_asignadosUncheckedUpdateWithoutDiagnosticosInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: StringFieldUpdateOperationsInput | string
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracionMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumAsignacionEstadoFieldUpdateOperationsInput | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFieldUpdateOperationsInput | Date | string
    progresos?: progresosUncheckedUpdateManyWithoutEjercicios_asignadosNestedInput
  }

  export type ejercicios_asignadosUncheckedUpdateManyWithoutDiagnosticosInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: StringFieldUpdateOperationsInput | string
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracionMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumAsignacionEstadoFieldUpdateOperationsInput | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ejercicios_asignadosCreateManyEjerciciosInput = {
    id: string
    pacienteId: string
    kinesiologoId: string
    diagnosticoId?: string | null
    objetivo?: string | null
    series?: number
    repeticiones?: number
    frecuencia?: string | null
    duracionMinutos?: number | null
    estado?: $Enums.AsignacionEstado
    asignadaEl?: Date | string
  }

  export type ejercicios_asignadosUpdateWithoutEjerciciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracionMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumAsignacionEstadoFieldUpdateOperationsInput | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUpdateOneWithoutEjercicios_asignadosNestedInput
    users?: usersUpdateOneRequiredWithoutEjercicios_asignadosNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutEjercicios_asignadosNestedInput
    progresos?: progresosUpdateManyWithoutEjercicios_asignadosNestedInput
  }

  export type ejercicios_asignadosUncheckedUpdateWithoutEjerciciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: StringFieldUpdateOperationsInput | string
    diagnosticoId?: NullableStringFieldUpdateOperationsInput | string | null
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracionMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumAsignacionEstadoFieldUpdateOperationsInput | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFieldUpdateOperationsInput | Date | string
    progresos?: progresosUncheckedUpdateManyWithoutEjercicios_asignadosNestedInput
  }

  export type ejercicios_asignadosUncheckedUpdateManyWithoutEjerciciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: StringFieldUpdateOperationsInput | string
    diagnosticoId?: NullableStringFieldUpdateOperationsInput | string | null
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracionMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumAsignacionEstadoFieldUpdateOperationsInput | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progresosCreateManyEjercicios_asignadosInput = {
    id: string
    pacienteId: string
    fecha?: Date | string
    completado?: boolean
    seriesRealizadas?: number | null
    repeticionesRealizadas?: number | null
    pesoKg?: number | null
    observaciones?: string | null
    registradoPorUserId: string
  }

  export type progresosUpdateWithoutEjercicios_asignadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
    seriesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    repeticionesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    pesoKg?: NullableFloatFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    pacientes?: pacientesUpdateOneRequiredWithoutProgresosNestedInput
    users?: usersUpdateOneRequiredWithoutProgresosNestedInput
  }

  export type progresosUncheckedUpdateWithoutEjercicios_asignadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
    seriesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    repeticionesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    pesoKg?: NullableFloatFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    registradoPorUserId?: StringFieldUpdateOperationsInput | string
  }

  export type progresosUncheckedUpdateManyWithoutEjercicios_asignadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
    seriesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    repeticionesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    pesoKg?: NullableFloatFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    registradoPorUserId?: StringFieldUpdateOperationsInput | string
  }

  export type diagnosticosCreateManyPacientesInput = {
    id: string
    kinesiologoId: string
    lesion: string
    descripcion: string
    tratamiento?: string | null
    creadoEl?: Date | string
    activo?: boolean
  }

  export type ejercicios_asignadosCreateManyPacientesInput = {
    id: string
    ejercicioId: string
    kinesiologoId: string
    diagnosticoId?: string | null
    objetivo?: string | null
    series?: number
    repeticiones?: number
    frecuencia?: string | null
    duracionMinutos?: number | null
    estado?: $Enums.AsignacionEstado
    asignadaEl?: Date | string
  }

  export type progresosCreateManyPacientesInput = {
    id: string
    asignacionId: string
    fecha?: Date | string
    completado?: boolean
    seriesRealizadas?: number | null
    repeticionesRealizadas?: number | null
    pesoKg?: number | null
    observaciones?: string | null
    registradoPorUserId: string
  }

  export type turnosCreateManyPacientesInput = {
    id: string
    kinesiologoId: string
    iniciaEn: Date | string
    terminaEn: Date | string
    estado?: $Enums.TurnoEstado
    motivo?: string | null
    notas?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type diagnosticosUpdateWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateOneRequiredWithoutDiagnosticosNestedInput
    ejercicios_asignados?: ejercicios_asignadosUpdateManyWithoutDiagnosticosNestedInput
  }

  export type diagnosticosUncheckedUpdateWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: StringFieldUpdateOperationsInput | string
    lesion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    ejercicios_asignados?: ejercicios_asignadosUncheckedUpdateManyWithoutDiagnosticosNestedInput
  }

  export type diagnosticosUncheckedUpdateManyWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: StringFieldUpdateOperationsInput | string
    lesion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ejercicios_asignadosUpdateWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracionMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumAsignacionEstadoFieldUpdateOperationsInput | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUpdateOneWithoutEjercicios_asignadosNestedInput
    ejercicios?: ejerciciosUpdateOneRequiredWithoutEjercicios_asignadosNestedInput
    users?: usersUpdateOneRequiredWithoutEjercicios_asignadosNestedInput
    progresos?: progresosUpdateManyWithoutEjercicios_asignadosNestedInput
  }

  export type ejercicios_asignadosUncheckedUpdateWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: StringFieldUpdateOperationsInput | string
    diagnosticoId?: NullableStringFieldUpdateOperationsInput | string | null
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracionMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumAsignacionEstadoFieldUpdateOperationsInput | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFieldUpdateOperationsInput | Date | string
    progresos?: progresosUncheckedUpdateManyWithoutEjercicios_asignadosNestedInput
  }

  export type ejercicios_asignadosUncheckedUpdateManyWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: StringFieldUpdateOperationsInput | string
    diagnosticoId?: NullableStringFieldUpdateOperationsInput | string | null
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracionMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumAsignacionEstadoFieldUpdateOperationsInput | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progresosUpdateWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
    seriesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    repeticionesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    pesoKg?: NullableFloatFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    ejercicios_asignados?: ejercicios_asignadosUpdateOneRequiredWithoutProgresosNestedInput
    users?: usersUpdateOneRequiredWithoutProgresosNestedInput
  }

  export type progresosUncheckedUpdateWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    asignacionId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
    seriesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    repeticionesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    pesoKg?: NullableFloatFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    registradoPorUserId?: StringFieldUpdateOperationsInput | string
  }

  export type progresosUncheckedUpdateManyWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    asignacionId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
    seriesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    repeticionesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    pesoKg?: NullableFloatFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    registradoPorUserId?: StringFieldUpdateOperationsInput | string
  }

  export type turnosUpdateWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    iniciaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    terminaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumTurnoEstadoFieldUpdateOperationsInput | $Enums.TurnoEstado
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutTurnosNestedInput
  }

  export type turnosUncheckedUpdateWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: StringFieldUpdateOperationsInput | string
    iniciaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    terminaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumTurnoEstadoFieldUpdateOperationsInput | $Enums.TurnoEstado
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type turnosUncheckedUpdateManyWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    kinesiologoId?: StringFieldUpdateOperationsInput | string
    iniciaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    terminaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumTurnoEstadoFieldUpdateOperationsInput | $Enums.TurnoEstado
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type diagnosticosCreateManyUsersInput = {
    id: string
    pacienteId: string
    lesion: string
    descripcion: string
    tratamiento?: string | null
    creadoEl?: Date | string
    activo?: boolean
  }

  export type ejerciciosCreateManyUsersInput = {
    id: string
    nombre: string
    descripcion: string
    instrucciones?: string | null
    zonaCuerpo: string
    nivel?: string
    creadoEl?: Date | string
  }

  export type ejercicios_asignadosCreateManyUsersInput = {
    id: string
    pacienteId: string
    ejercicioId: string
    diagnosticoId?: string | null
    objetivo?: string | null
    series?: number
    repeticiones?: number
    frecuencia?: string | null
    duracionMinutos?: number | null
    estado?: $Enums.AsignacionEstado
    asignadaEl?: Date | string
  }

  export type pacientesCreateManyUsers_pacientes_kinesiologoIdTousersInput = {
    id: string
    userId?: string | null
    dni: string
    fechaNacimiento?: Date | string | null
    telefono?: string | null
    recibeRecordatorios?: boolean
    domicilio?: string | null
    obraSocial?: string | null
    createdAt?: Date | string
    email?: string | null
    nombre?: string | null
  }

  export type progresosCreateManyUsersInput = {
    id: string
    asignacionId: string
    pacienteId: string
    fecha?: Date | string
    completado?: boolean
    seriesRealizadas?: number | null
    repeticionesRealizadas?: number | null
    pesoKg?: number | null
    observaciones?: string | null
  }

  export type turnosCreateManyUsersInput = {
    id: string
    pacienteId: string
    iniciaEn: Date | string
    terminaEn: Date | string
    estado?: $Enums.TurnoEstado
    motivo?: string | null
    notas?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type diagnosticosUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    pacientes?: pacientesUpdateOneRequiredWithoutDiagnosticosNestedInput
    ejercicios_asignados?: ejercicios_asignadosUpdateManyWithoutDiagnosticosNestedInput
  }

  export type diagnosticosUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    lesion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    ejercicios_asignados?: ejercicios_asignadosUncheckedUpdateManyWithoutDiagnosticosNestedInput
  }

  export type diagnosticosUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    lesion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ejerciciosUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    instrucciones?: NullableStringFieldUpdateOperationsInput | string | null
    zonaCuerpo?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios_asignados?: ejercicios_asignadosUpdateManyWithoutEjerciciosNestedInput
  }

  export type ejerciciosUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    instrucciones?: NullableStringFieldUpdateOperationsInput | string | null
    zonaCuerpo?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios_asignados?: ejercicios_asignadosUncheckedUpdateManyWithoutEjerciciosNestedInput
  }

  export type ejerciciosUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    instrucciones?: NullableStringFieldUpdateOperationsInput | string | null
    zonaCuerpo?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    creadoEl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ejercicios_asignadosUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracionMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumAsignacionEstadoFieldUpdateOperationsInput | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: diagnosticosUpdateOneWithoutEjercicios_asignadosNestedInput
    ejercicios?: ejerciciosUpdateOneRequiredWithoutEjercicios_asignadosNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutEjercicios_asignadosNestedInput
    progresos?: progresosUpdateManyWithoutEjercicios_asignadosNestedInput
  }

  export type ejercicios_asignadosUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
    diagnosticoId?: NullableStringFieldUpdateOperationsInput | string | null
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracionMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumAsignacionEstadoFieldUpdateOperationsInput | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFieldUpdateOperationsInput | Date | string
    progresos?: progresosUncheckedUpdateManyWithoutEjercicios_asignadosNestedInput
  }

  export type ejercicios_asignadosUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
    diagnosticoId?: NullableStringFieldUpdateOperationsInput | string | null
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracionMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumAsignacionEstadoFieldUpdateOperationsInput | $Enums.AsignacionEstado
    asignadaEl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pacientesUpdateWithoutUsers_pacientes_kinesiologoIdTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    recibeRecordatorios?: BoolFieldUpdateOperationsInput | boolean
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    obraSocial?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticos?: diagnosticosUpdateManyWithoutPacientesNestedInput
    ejercicios_asignados?: ejercicios_asignadosUpdateManyWithoutPacientesNestedInput
    users_pacientes_userIdTousers?: usersUpdateOneWithoutPacientes_pacientes_userIdTousersNestedInput
    progresos?: progresosUpdateManyWithoutPacientesNestedInput
    turnos?: turnosUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutUsers_pacientes_kinesiologoIdTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    recibeRecordatorios?: BoolFieldUpdateOperationsInput | boolean
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    obraSocial?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticos?: diagnosticosUncheckedUpdateManyWithoutPacientesNestedInput
    ejercicios_asignados?: ejercicios_asignadosUncheckedUpdateManyWithoutPacientesNestedInput
    progresos?: progresosUncheckedUpdateManyWithoutPacientesNestedInput
    turnos?: turnosUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateManyWithoutUsers_pacientes_kinesiologoIdTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    recibeRecordatorios?: BoolFieldUpdateOperationsInput | boolean
    domicilio?: NullableStringFieldUpdateOperationsInput | string | null
    obraSocial?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type progresosUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
    seriesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    repeticionesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    pesoKg?: NullableFloatFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    ejercicios_asignados?: ejercicios_asignadosUpdateOneRequiredWithoutProgresosNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutProgresosNestedInput
  }

  export type progresosUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    asignacionId?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
    seriesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    repeticionesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    pesoKg?: NullableFloatFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type progresosUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    asignacionId?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    completado?: BoolFieldUpdateOperationsInput | boolean
    seriesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    repeticionesRealizadas?: NullableIntFieldUpdateOperationsInput | number | null
    pesoKg?: NullableFloatFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type turnosUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    iniciaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    terminaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumTurnoEstadoFieldUpdateOperationsInput | $Enums.TurnoEstado
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pacientes?: pacientesUpdateOneRequiredWithoutTurnosNestedInput
  }

  export type turnosUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    iniciaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    terminaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumTurnoEstadoFieldUpdateOperationsInput | $Enums.TurnoEstado
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type turnosUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    iniciaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    terminaEn?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumTurnoEstadoFieldUpdateOperationsInput | $Enums.TurnoEstado
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}