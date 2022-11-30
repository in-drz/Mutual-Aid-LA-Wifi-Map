'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/mapbox/light-v11',
  accessToken:
    'pk.eyJ1IjoiaW4tZHJ6IiwiYSI6ImNsYWZ3NzdkczBtcmMzb28xaG95NGY1NDEifQ.Tat9_7mZSMKUOx4dfm9GhA',
  CSV: 'https://docs.google.com/spreadsheets/d/1_EWFLf84aydZ4lkeFsRF0RLQoW6hpUGGIi_5MX3LGA8/gviz/tq?tqx=out:csv&sheet=public_hotspots',
  center: [-118.254643, 34.049157],
  zoom: 10,
  title: 'Public Wi-Fi Access Points',
  description:
    'With this tool, you can find public and commercial Wi-Fi hotspots to connect to the internet.',
  sideBarInfo: ['facility_name', 'street_address', 'url', 'outdoor_access'],
  popupInfo: ['facility_name'],
  filters: [
    {
      type: 'dropdown',
      title: 'Languages supported: ',
      columnHeader: 'Languages',
      listItems: [
        'Amharic',
        'ASL',
        'Cambodian',
        'Chinese',
        'Danish',
        'English',
        'French',
        'German',
        'Greek',
        'Hindi',
        'Italian',
        'Japanese',
        'Korean',
        'Language Line Services',
        'Norwegian',
        'Oriya',
        'Portuguese',
        'Punjabi',
        'Russian',
        'Somali',
        'Spanish',
        'Swedish',
        'Tagalog',
        'Thai',
        'Tigrinya',
        'Tongan',
        'Vietnamese',
        'Ukranian',
      ],
    },
    {
      type: 'checkbox',
      title: 'Devices available: ',
      columnHeader: 'Devices_available', // Case sensitive - must match spreadsheet entry
      listItems: ['Computer', 'Wi-Fi', 'Adaptive Laptops'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: 'dropdown',
      title: 'Clients: ',
      columnHeader: 'Clients',
      listItems: [
        'Adults',
      ],
    },
  ],
};
