/**
 * Copyright (c) Microblink Ltd. All rights reserved.
 */
export interface ClassInfo
{
    /** The document country. */
    readonly country: Country;

    /** The document region. */
    readonly region: Region;

    /** The type of the scanned document. */
    readonly documentType: DocumentType;

    /** The ISO numeric code of the country that issued the scanned document. */
    readonly countryName?: string;

    /** The ISO numeric code of the country that issued the scanned document. */
    readonly isoNumericCountryCode?: string;

    /** The 2 letter ISO code of the country that issued the scanned document. */
    readonly isoAlpha2CountryCode?: string;

    /** The 3 letter ISO code of the country that issued the scanned document. */
    readonly isoAlpha3CountryCode?: string;
}

export enum Country
{
    NONE = 0,
    ALBANIA = 1,
    ALGERIA = 2,
    ARGENTINA = 3,
    AUSTRALIA = 4,
    AUSTRIA = 5,
    AZERBAIJAN = 6,
    BAHRAIN = 7,
    BANGLADESH = 8,
    BELGIUM = 9,
    BOSNIA_AND_HERZEGOVINA = 10,
    BRUNEI = 11,
    BULGARIA = 12,
    CAMBODIA = 13,
    CANADA = 14,
    CHILE = 15,
    COLOMBIA = 16,
    COSTA_RICA = 17,
    CROATIA = 18,
    CYPRUS = 19,
    CZECHIA = 20,
    DENMARK = 21,
    DOMINICAN_REPUBLIC = 22,
    EGYPT = 23,
    ESTONIA = 24,
    FINLAND = 25,
    FRANCE = 26,
    GEORGIA = 27,
    GERMANY = 28,
    GHANA = 29,
    GREECE = 30,
    GUATEMALA = 31,
    HONG_KONG = 32,
    HUNGARY = 33,
    INDIA = 34,
    INDONESIA = 35,
    IRELAND = 36,
    ISRAEL = 37,
    ITALY = 38,
    JORDAN = 39,
    KAZAKHSTAN = 40,
    KENYA = 41,
    KOSOVO = 42,
    KUWAIT = 43,
    LATVIA = 44,
    LITHUANIA = 45,
    MALAYSIA = 46,
    MALDIVES = 47,
    MALTA = 48,
    MAURITIUS = 49,
    MEXICO = 50,
    MOROCCO = 51,
    NETHERLANDS = 52,
    NEW_ZEALAND = 53,
    NIGERIA = 54,
    PAKISTAN = 55,
    PANAMA = 56,
    PARAGUAY = 57,
    PHILIPPINES = 58,
    POLAND = 59,
    PORTUGAL = 60,
    PUERTO_RICO = 61,
    QATAR = 62,
    ROMANIA = 63,
    RUSSIA = 64,
    SAUDI_ARABIA = 65,
    SERBIA = 66,
    SINGAPORE = 67,
    SLOVAKIA = 68,
    SLOVENIA = 69,
    SOUTH_AFRICA = 70,
    SPAIN = 71,
    SWEDEN = 72,
    SWITZERLAND = 73,
    TAIWAN = 74,
    THAILAND = 75,
    TUNISIA = 76,
    TURKEY = 77,
    UAE = 78,
    UGANDA = 79,
    UK = 80,
    UKRAINE = 81,
    USA = 82,
    VIETNAM = 83,
    BRAZIL = 84,
    NORWAY = 85,
    OMAN = 86,
    ECUADOR = 87,
    EL_SALVADOR = 88,
    SRI_LANKA = 89,
    PERU = 90,
    URUGUAY = 91,
    BAHAMAS = 92,
    BERMUDA = 93,
    BOLIVIA = 94,
    CHINA = 95,
    EUROPEAN_UNION = 96,
    HAITI = 97,
    HONDURAS = 98,
    ICELAND = 99,
    JAPAN = 100,
    LUXEMBOURG = 101,
    MONTENEGRO = 102,
    NICARAGUA = 103,
    SOUTH_KOREA = 104,
    VENEZUELA = 105,
    AFGHANISTAN = 106,
    ALAND_ISLANDS = 107,
    AMERICAN_SAMOA = 108,
    ANDORRA = 109,
    ANGOLA = 110,
    ANGUILLA = 111,
    ANTARCTICA = 112,
    ANTIGUA_AND_BARBUDA = 113,
    ARMENIA = 114,
    ARUBA = 115,
    BAILIWICK_OF_GUERNSEY = 116,
    BAILIWICK_OF_JERSEY = 117,
    BARBADOS = 118,
    BELARUS = 119,
    BELIZE = 120,
    BENIN = 121,
    BHUTAN = 122,
    BONAIRE_SAINT_EUSTATIUS_AND_SABA = 123,
    BOTSWANA = 124,
    BOUVET_ISLAND = 125,
    BRITISH_INDIAN_OCEAN_TERRITORY = 126,
    BURKINA_FASO = 127,
    BURUNDI = 128,
    CAMEROON = 129,
    CAPE_VERDE = 130,
    CARIBBEAN_NETHERLANDS = 131,
    CAYMAN_ISLANDS = 132,
    CENTRAL_AFRICAN_REPUBLIC = 133,
    CHAD = 134,
    CHRISTMAS_ISLAND = 135,
    COCOS_ISLANDS = 136,
    COMOROS = 137,
    CONGO = 138,
    COOK_ISLANDS = 139,
    CUBA = 140,
    CURACAO = 141,
    DEMOCRATIC_REPUBLIC_OF_THE_CONGO = 142,
    DJIBOUTI = 143,
    DOMINICA = 144,
    EAST_TIMOR = 145,
    EQUATORIAL_GUINEA = 146,
    ERITREA = 147,
    ETHIOPIA = 148,
    FALKLAND_ISLANDS = 149,
    FAROE_ISLANDS = 150,
    FEDERATED_STATES_OF_MICRONESIA = 151,
    FIJI = 152,
    FRENCH_GUIANA = 153,
    FRENCH_POLYNESIA = 154,
    FRENCH_SOUTHERN_TERRITORIES = 155,
    GABON = 156,
    GAMBIA = 157,
    GIBRALTAR = 158,
    GREENLAND = 159,
    GRENADA = 160,
    GUADELOUPE = 161,
    GUAM = 162,
    GUINEA = 163,
    GUINEA_BISSAU = 164,
    GUYANA = 165,
    HEARD_ISLAND_AND_MCDONALD_ISLANDS = 166,
    IRAN = 167,
    IRAQ = 168,
    ISLE_OF_MAN = 169,
    IVORY_COAST = 170,
    JAMAICA = 171,
    KIRIBATI = 172,
    KYRGYZSTAN = 173,
    LAOS = 174,
    LEBANON = 175,
    LESOTHO = 176,
    LIBERIA = 177,
    LIBYA = 178,
    LIECHTENSTEIN = 179,
    MACAU = 180,
    MADAGASCAR = 181,
    MALAWI = 182,
    MALI = 183,
    MARSHALL_ISLANDS = 184,
    MARTINIQUE = 185,
    MAURITANIA = 186,
    MAYOTTE = 187,
    MOLDOVA = 188,
    MONACO = 189,
    MONGOLIA = 190,
    MONTSERRAT = 191,
    MOZAMBIQUE = 192,
    MYANMAR = 193,
    NAMIBIA = 194,
    NAURU = 195,
    NEPAL = 196,
    NEW_CALEDONIA = 197,
    NIGER = 198,
    NIUE = 199,
    NORFOLK_ISLAND = 200,
    NORTHERN_CYPRUS = 201,
    NORTHERN_MARIANA_ISLANDS = 202,
    NORTH_KOREA = 203,
    NORTH_MACEDONIA = 204,
    PALAU = 205,
    PALESTINE = 206,
    PAPUA_NEW_GUINEA = 207,
    PITCAIRN = 208,
    REUNION = 209,
    RWANDA = 210,
    SAINT_BARTHELEMY = 211,
    SAINT_HELENA_ASCENSION_AND_TRISTIAN_DA_CUNHA = 212,
    SAINT_KITTS_AND_NEVIS = 213,
    SAINT_LUCIA = 214,
    SAINT_MARTIN = 215,
    SAINT_PIERRE_AND_MIQUELON = 216,
    SAINT_VINCENT_AND_THE_GRENADINES = 217,
    SAMOA = 218,
    SAN_MARINO = 219,
    SAO_TOME_AND_PRINCIPE = 220,
    SENEGAL = 221,
    SEYCHELLES = 222,
    SIERRA_LEONE = 223,
    SINT_MAARTEN = 224,
    SOLOMON_ISLANDS = 225,
    SOMALIA = 226,
    SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS = 227,
    SOUTH_SUDAN = 228,
    SUDAN = 229,
    SURINAME = 230,
    SVALBARD_AND_JAN_MAYEN = 231,
    ESWATINI = 232,
    SYRIA = 233,
    TAJIKISTAN = 234,
    TANZANIA = 235,
    TOGO = 236,
    TOKELAU = 237,
    TONGA = 238,
    TRINIDAD_AND_TOBAGO = 239,
    TURKMENISTAN = 240,
    TURKS_AND_CAICOS_ISLANDS = 241,
    TUVALU = 242,
    UNITED_STATES_MINOR_OUTLYING_ISLANDS = 243,
    UZBEKISTAN = 244,
    VANUATU = 245,
    VATICAN_CITY = 246,
    VIRGIN_ISLANDS_BRITISH = 247,
    VIRGIN_ISLANDS_US = 248,
    WALLIS_AND_FUTUNA = 249,
    WESTERN_SAHARA = 250,
    YEMEN = 251,
    YUGOSLAVIA = 252,
    ZAMBIA = 253,
    ZIMBABWE = 254,
    COUNT = 255,
}

export enum Region
{
    NONE = 0,
    ALABAMA = 1,
    ALASKA = 2,
    ALBERTA = 3,
    ARIZONA = 4,
    ARKANSAS = 5,
    AUSTRALIAN_CAPITAL_TERRITORY = 6,
    BRITISH_COLUMBIA = 7,
    CALIFORNIA = 8,
    COLORADO = 9,
    CONNECTICUT = 10,
    DELAWARE = 11,
    DISTRICT_OF_COLUMBIA = 12,
    FLORIDA = 13,
    GEORGIA = 14,
    HAWAII = 15,
    IDAHO = 16,
    ILLINOIS = 17,
    INDIANA = 18,
    IOWA = 19,
    KANSAS = 20,
    KENTUCKY = 21,
    LOUISIANA = 22,
    MAINE = 23,
    MANITOBA = 24,
    MARYLAND = 25,
    MASSACHUSETTS = 26,
    MICHIGAN = 27,
    MINNESOTA = 28,
    MISSISSIPPI = 29,
    MISSOURI = 30,
    MONTANA = 31,
    NEBRASKA = 32,
    NEVADA = 33,
    NEW_BRUNSWICK = 34,
    NEW_HAMPSHIRE = 35,
    NEW_JERSEY = 36,
    NEW_MEXICO = 37,
    NEW_SOUTH_WALES = 38,
    NEW_YORK = 39,
    NORTHERN_TERRITORY = 40,
    NORTH_CAROLINA = 41,
    NORTH_DAKOTA = 42,
    NOVA_SCOTIA = 43,
    OHIO = 44,
    OKLAHOMA = 45,
    ONTARIO = 46,
    OREGON = 47,
    PENNSYLVANIA = 48,
    QUEBEC = 49,
    QUEENSLAND = 50,
    RHODE_ISLAND = 51,
    SASKATCHEWAN = 52,
    SOUTH_AUSTRALIA = 53,
    SOUTH_CAROLINA = 54,
    SOUTH_DAKOTA = 55,
    TASMANIA = 56,
    TENNESSEE = 57,
    TEXAS = 58,
    UTAH = 59,
    VERMONT = 60,
    VICTORIA = 61,
    VIRGINIA = 62,
    WASHINGTON = 63,
    WESTERN_AUSTRALIA = 64,
    WEST_VIRGINIA = 65,
    WISCONSIN = 66,
    WYOMING = 67,
    YUKON = 68,
    CIUDAD_DE_MEXICO = 69,
    JALISCO = 70,
    NEWFOUNDLAND_AND_LABRADOR = 71,
    NUEVO_LEON = 72,
    BAJA_CALIFORNIA = 73,
    CHIHUAHUA = 74,
    GUANAJUATO = 75,
    GUERRERO = 76,
    MEXICO = 77,
    MICHOACAN = 78,
    NEW_YORK_CITY = 79,
    TAMAULIPAS = 80,
    VERACRUZ = 81,
    CHIAPAS = 82,
    COAHUILA = 83,
    DURANGO = 84,
    GUERRERO_COCULA = 85,
    GUERRERO_JUCHITAN = 86,
    GUERRERO_TEPECOACUILCO = 87,
    GUERRERO_TLACOAPA = 88,
    GUJARAT = 89,
    HIDALGO = 90,
    KARNATAKA = 91,
    KERALA = 92,
    KHYBER_PAKHTUNKHWA = 93,
    MADHYA_PRADESH = 94,
    MAHARASHTRA = 95,
    MORELOS = 96,
    NAYARIT = 97,
    OAXACA = 98,
    PUEBLA = 99,
    PUNJAB = 100,
    QUERETARO = 101,
    SAN_LUIS_POTOSI = 102,
    SINALOA = 103,
    SONORA = 104,
    TABASCO = 105,
    TAMIL_NADU = 106,
    YUCATAN = 107,
    ZACATECAS = 108,
    AGUASCALIENTES = 109,
    BAJA_CALIFORNIA_SUR = 110,
    CAMPECHE = 111,
    COLIMA = 112,
    QUINTANA_ROO_BENITO_JUAREZ = 113,
    COUNT = 114,
}

export enum DocumentType
{
    NONE = 0,
    CONSULAR_ID = 1,
    DL = 2,
    DL_PUBLIC_SERVICES_CARD = 3,
    EMPLOYMENT_PASS = 4,
    FIN_CARD = 5,
    ID = 6,
    MULTIPURPOSE_ID = 7,
    MyKad = 8,
    MyKid = 9,
    MyPR = 10,
    MyTentera = 11,
    PAN_CARD = 12,
    PROFESSIONAL_ID = 13,
    PUBLIC_SERVICES_CARD = 14,
    RESIDENCE_PERMIT = 15,
    RESIDENT_ID = 16,
    TEMPORARY_RESIDENCE_PERMIT = 17,
    VOTER_ID = 18,
    WORK_PERMIT = 19,
    iKAD = 20,
    MILITARY_ID = 21,
    MyKAS = 22,
    SOCIAL_SECURITY_CARD = 23,
    HEALTH_INSURANCE_CARD = 24,
    PASSPORT = 25,
    S_PASS = 26,
    ADDRESS_CARD = 27,
    ALIEN_ID = 28,
    ALIEN_PASSPORT = 29,
    GREEN_CARD = 30,
    MINORS_ID = 31,
    POSTAL_ID = 32,
    PROFESSIONAL_DL = 33,
    TAX_ID = 34,
    WEAPON_PERMIT = 35,
    VISA = 36,
    BORDER_CROSSING_CARD = 37,
    DRIVER_CARD = 38,
    GLOBAL_ENTRY_CARD = 39,
    MyPolis = 40,
    NEXUS_CARD = 41,
    PASSPORT_CARD = 42,
    PROOF_OF_AGE_CARD = 43,
    REFUGEE_ID = 44,
    TRIBAL_ID = 45,
    VETERAN_ID = 46,
    CITIZENSHIP_CERTIFICATE = 47,
    COUNT = 48,
}
