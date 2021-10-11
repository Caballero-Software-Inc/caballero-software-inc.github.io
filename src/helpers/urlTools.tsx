

export function newParameters(s: string): void {
  window.location.href = window.location.protocol + '//' + window.location.host + window.location.pathname + s;
}


type ChangeParameter = { 
  queryString: string;
  urlParams: URLSearchParams;
  param: string; 
  newValue: string; 
}

export function changeParameter({ queryString, urlParams, param, newValue }: ChangeParameter): string {
  const oldParam = param + '=' + urlParams.get(param);
  const newParam = param + '=' + newValue;
  const newUrl = queryString.replace(oldParam, newParam);
  return newUrl;
}



