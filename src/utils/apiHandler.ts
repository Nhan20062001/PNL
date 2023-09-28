export class apiHandler {
  private static notHandleLoadingList: RegExp[] = [];

  static isApiWithoutLoading(url: string): boolean {
    return this.notHandleLoadingList.some((item) => item.test(url));
  }
}
