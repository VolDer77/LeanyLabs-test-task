const params = [
  "ip",
  "asn",
  "org",
  "version",
  "city",
  "country_area",
  "country_population",
  "region",
  "region_code",
  "country_code",
  "country_code_iso3",
  "country_name",
  "country_capital",
  "country_tld",
  "continent_code",
  "in_eu",
  "postal",
  "latitude",
  "longitude",
  "timezone",
  "utc_offset",
  "country_calling_code",
  "currency",
  "currency_name",
  "languages",
];

export const getSortedParams = (data) => {
  if (data.error) return data;
  return params.reduce((obj, item) => {
    if (!data[item]) return obj;
    obj[item] = data[item];
    return obj;
  }, {});
};
