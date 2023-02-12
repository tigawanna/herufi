interface ResponseHeadersProps {
  /** Status code */
  status?: number | ((currentStatus: number) => number);
  /** The headers to set */
  headers?: Record<string, string | string[]> | ((headers: Headers) => void);
  /**
   * Time to hold the render stream before returning the response. Set to
   * true to hold until the page is fully rendered, effectively disabling
   * streaming.
   */
  throttleRenderStream?: number | true;
}


  export const headerConfig: ResponseHeadersProps = {
    headers: (headers: Headers) => {
      // headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Cache-Control', 'max-age=31536000');
      headers.set('Accept-Encoding', 'gzip, compress, br');
      return headers;
    }

  }
