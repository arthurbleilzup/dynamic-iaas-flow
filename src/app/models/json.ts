export namespace JsonUtils {
  export interface Default<T> {
    default: T
  }

  interface DataType<T> {
    data: T
  }

  export interface Data<T> {
    default: DataType<T>
  }
}
