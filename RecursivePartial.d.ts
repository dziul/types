type Primitive = string | number | boolean | undefined | null;
type DeepReadonly<T> = T extends Primitive ? T : DeepReadonlyObject<T>;
type DeepReadonlyObject<T> = {
	readonly [P in keyof T]: DeepReadonly<T[P]>;
};

type DeepPartial<T> = T extends Primitive ? T : DeepPartialObject<T>;
type DeepPartialObject<T> = {
	[P in keyof T]?: DeepPartial<T[P]>;
};

type ValueOf<T> = T[keyof T];
