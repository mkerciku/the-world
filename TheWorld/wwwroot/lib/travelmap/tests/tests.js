// Jasmine Tests
describe("travelMap tests", function () {
  
  beforeAll(function () {
    
    // Inject a map element for testing
    var div = document.createElement("div");
    div.setAttribute("id", "map");
    document.body.appendChild(div);
    
  });
  
  it("travelMap exists", function () {
    expect(travelMap).toBeDefined();
  });

  var stops = [
    { lat: 33.748995, long: -84.387982, info: "Atlanta, Georgia - Departed Jun 3, 2014"},
    { lat: 48.856614, long: 2.352222, info: "Paris, France - Jun 4-24, 2014"},
    { lat: 50.850000, long: 4.350000, info: "Brussels, Belgium - Jun 25-27, 2014"},
    { lat: 51.209348, long: 3.224700, info: "Bruges, Belgium - Jun 28-30, 2014"},
    { lat: 48.856614, long: 2.352222, info: "Paris, France - Jun 30-July 8, 2014"},
    { lat: 51.508515, long: -0.125487, info: "London, UK - Jul 8-23, 2014"},
    { lat: 51.454513, long: -2.587910, info: "Bristol, UK - Jul 24-28, 2014"},
    { lat: 52.078000, long: -2.783000, info: "Stretton Sugwas, UK - Jul 29, 2014"},
    { lat: 51.864211, long: -2.238034, info: "Gloucestershire, UK - Jul 30, 2014"},
    { lat: 52.954783, long: -1.158109, info: "Nottingham, UK - Jul 31, 2014"}, 
    { lat: 51.508515, long: -0.125487, info: "London, UK - Aug 1-4, 2014"},
    { lat: 55.953252, long: -3.188267, info: "Edinburgh, UK - Aug 5, 2014"},
    { lat: 55.864237, long: -4.251806, info: "Glasgow, UK - Aug 6, 2014"},
    { lat: 57.149717, long: -2.094278, info: "Aberdeen, UK - Aug 7, 2014"},
    { lat: 55.953252, long: -3.188267, info: "Edinburgh, UK - Aug 8-9, 2014"},
    { lat: 51.508515, long: -0.125487, info: "London, UK - Aug 10-13, 2014"},
    { lat: 52.370216, long: 4.895168, info: "Amsterdam, Netherlands - Aug 14-16, 2014"},
    { lat: 48.583148, long: 7.747882, info: "Strasbourg, France - Aug 17-18, 2014"},
    { lat: 46.519962, long: 6.633597, info: "Lausanne, Switzerland - Aug 19-26, 2014"},
    { lat: 46.021073, long: 7.747937, info: "Zermatt, Switzerland - Aug 27-28, 2014"},
    { lat: 46.519962, long: 6.633597, info: "Lausanne, Switzerland - Aug 29-Sept 1, 2014"},
    { lat: 53.349805, long: -6.260310, info: "Dublin, Ireland - Sep 2-6, 2014"},
    { lat: 54.597285, long: -5.930120, info: "Belfast, Northern Ireland - Sep 7-8, 2014"},
    { lat: 53.349805, long: -6.260310, info: "Dublin, Ireland - Sep 9-15, 2014"},
    { lat: 47.368650, long: 8.539183, info: "Zurich, Switzerland - Sep 16-18, 2014"},
    { lat: 48.135125, long: 11.581981, info: "Munich, Germany - Sep 19-20, 2014"},
    { lat: 50.075538, long: 14.437800, info: "Prague, Czech Republic - Sep 21-30, 2014"},
    { lat: 51.050409, long: 13.737262, info: "Dresden, Germany - Oct 1-3, 2014"},
    { lat: 50.075538, long: 14.437800, info: "Prague, Czech Republic - Oct 4-10, 2014"},
    { lat: 42.650661, long: 18.094424, info: "Dubrovnik, Croatia - Oct 10-15, 2014"},
    { lat: 42.697708, long: 23.321868, info: "Sofia, Bulgaria - Oct 16-19, 2014"},
    { lat: 45.658928, long: 25.539608, info: "Brosov, Romania - Oct 20-31, 2014"},
    { lat: 41.005270, long: 28.976960, info: "Istanbul, Turkey - Nov 1-10, 2014"},
    { lat: 45.815011, long: 15.981919, info: "Zagreb, Croatia - Nov 11-14, 2014"},
    { lat: 41.005270, long: 28.976960, info: "Istanbul, Turkey - Nov 15-24, 2014"},
    { lat: 50.850000, long: 4.350000, info: "Brussels, Belgium - Nov 25-29, 2014"},
    { lat: 50.937531, long: 6.960279, info: "Cologne, Germany - Nov 30-Dec 3, 2014"},
    { lat: 48.208174, long: 16.373819, info: "Vienna, Austria - Dec 4-27, 2014"},
    { lat: 47.497912, long: 19.040235, info: "Budapest, Hungary - Dec 28,2014 - Jan 2, 2015"},
    { lat: 37.983716, long: 23.729310, info: "Athens, Greece - Jan 2-18, 2015"},
    { lat: -25.746111, long: 28.188056, info: "Pretoria, South Africa - Jan 19-31, 2015"},
    { lat: 43.771033, long: 11.248001, info: "Florence, Italy - Feb 1-8, 2015"},
    { lat: 45.440847, long: 12.315515, info: "Venice, Italy - Feb 9-12, 2015"},
    { lat: 43.771033, long: 11.248001, info: "Florence, Italy - Feb 13-16, 2015"},
    { lat: 41.872389, long: 12.480180, info: "Rome, Italy - Feb 17-Mar 3, 2015"},
    { lat: 28.632244, long: 77.220724, info: "New Delhi, India - Mar 4-9, 2015"},
    { lat: 27.700000, long: 85.333333, info: "Kathmandu, Nepal - Mar 10-Mar 13, 2015"},
    { lat: 28.632244, long: 77.220724, info: "New Delhi, India - Mar 11-20, 2015"},
    { lat: 22.1667, long: 113.5500, info: "Macau - Mar 21-23, 2015"},
    { lat: 22.396428, long: 114.109497, info: "Hong Kong - Mar 24-Apr 18, 2015"},
    { lat: 39.904030, long: 116.407526, info: "Beijing, China - Apr 19-23, 2015"},
    { lat: 22.396428, long: 114.109497, info: "Hong Kong - Apr 24-29, 2015"},
    { lat: 1.352083, long: 103.819836, info: "Singapore - Apr 30-May 6, 2015"},
    { lat: 3.139003, long: 101.686855, info: "Kuala Lumpor, Malaysia - May 7-23, 2015"},
    { lat: 13.727896, long: 100.524123, info: "Bangkok, Thailand - May 24-28, 2015"},
    { lat: 14.599512, long: 120.984219, info: "Manila, Philippines - May 29-31, 2015"},
    { lat: 13.727896, long: 100.524123, info: "Bangkok, Thailand - Jun 1-Jun 6, 2015"},
    { lat: 13.413227, long: 103.865991, info: "Ankor Wat, Cambodia - Jun 7-10, 2015"},
    { lat: 13.727896, long: 100.524123, info: "Bangkok, Thailand - Jun 11-16, 2015"},
    { lat: 37.566535, long: 126.977969, info: "Seoul, S. Korea - June 17-30, 2015"},
    { lat: 35.689487, long: 139.691706, info: "Toyko, Japan - July 1-31, 2015"},
    { lat: 47.606209, long: -122.332071, info: "Seattle, WA - Aug 1-3, 2015"},
    { lat: 49.282729, long: -123.120738, info: "Vancouver, BC Canada - Aug 4, 2015"},
    { lat: 47.606209, long: -122.332071, info: "Seattle, WA - Aug 5-7, 2015"},
    { lat: 45.523062, long: -122.676482, info: "Portland, OR - Aug 8-10, 2015"},
    { lat: 37.774929, long: -122.419416, info: "San Francisco, CA - Aug 11-15, 2015"},
    { lat: 33.448377, long: -112.074037, info: "Phoenix, AZ - Aug 16-19, 2015"},
    { lat: 39.739236, long: -104.990251, info: "Denver, CO - Aug 20-22, 2015"},
    { lat: 38.627003, long: -90.199404, info: "St. Louis, MO - Aug 23-24, 2015"},
    { lat: 41.878114, long: -87.629798, info: "Chicago, IL - Aug 25-30, 2015"},
    { lat: 43.653226, long: -79.383184, info: "Toronto, ON Canada - Aug 30-Sep 2, 2015"},
    { lat: 42.360082, long: -71.058880, info: "Boston, MA - Sep 3-8, 2015"},
    { lat: 41.355654, long: -72.099521, info: "New London, CT - Sep 9, 2015"},
    { lat: 40.712784, long: -74.005941, info: "New York, NY - Sep 10-14, 2015"},
    { lat: 39.952584, long: -75.165222, info: "Philadelphia, PA - Sep 15-16, 2015"},
    { lat: 38.907192, long: -77.036871, info: "Washington, DC - Sep 17-21, 2015"},
    { lat: 37.540725, long: -77.436048, info: "Richmond, VA - Sep 22-23, 2015"},
    { lat: 35.779590, long: -78.638179, info: "Raleigh, NC - Sep 24-25, 2015"},
    { lat: 35.227087, long: -80.843127, info: "Charlotte, SC - Sep 26-27, 2015"},
    { lat: 34.852618, long: -82.394010, info: "Greenville, SC - Sep 28-29, 2015"},
    { lat: 34.625584, long: -83.793334, info: "North Georgia Mountains, GA - Sept 30, 2015"},
    { lat: 33.748995, long: -84.387982, info: "Atlanta, GA - August 1, 2015"}
  ];

  it("travelMap default creation", function () {
    
    var map = travelMap.createMap({
      stops: stops,
      selector: "#map"
    });
    expect(map).toBeDefined();
    expect(map.map).toBeDefined();
    expect(map.settings).toBeDefined();
    expect(map.currentLocation).toBeDefined();
    
  });
});