export interface MovieDetails {
  short: Short;
  imdbId: string;
  top: Top;
  main: Main;
  fake: Fake;
  storyLine: StoryLine;
}

export interface Fake {
  "#TITLE": string;
  "#YEAR": number;
  "#IMDB_ID": string;
  "#RANK": number;
  "#ACTORS": string;
  "#AKA": string;
  "#IMDB_URL": string;
  "#IMDB_IV": string;
  "#IMG_POSTER": string;
  photo_width: number;
  photo_height: number;
}

export interface Main {
  id: string;
  wins: Companies;
  nominations: Companies;
  prestigiousAwardSummary: null;
  ratingsSummary: MainRatingsSummary;
  episodes: Episodes;
  videos: Companies;
  videoStrip: VideoStrip;
  titleMainImages: AlternateVersions;
  productionStatus: ProductionStatus;
  primaryImage: PrimaryImageElement;
  imageUploadLink: Link;
  titleType: MainTitleType;
  cast: Cast;
  creators: Creator[];
  directors: any[];
  writers: any[];
  isAdult: boolean;
  moreLikeThisTitles: MoreLikeThisTitles;
  triviaTotal: Companies;
  trivia: Trivia;
  goofsTotal: Companies;
  goofs: Akas;
  quotesTotal: Companies;
  quotes: Cast;
  crazyCredits: CrazyCredits;
  alternateVersions: AlternateVersions;
  connections: Connections;
  soundtrack: Connections;
  titleText: OriginalTitleText;
  originalTitleText: OriginalTitleText;
  releaseYear: Year;
  reviews: Companies;
  featuredReviews: MainFeaturedReviews;
  canRate: CanRate;
  iframeAddReviewLink: Link;
  topQuestions: AlternateVersions;
  faqs: AlternateVersions;
  releaseDate: ReleaseDate;
  countriesOfOrigin: MainCountriesOfOrigin;
  detailsExternalLinks: AlternateVersions;
  spokenLanguages: SpokenLanguages;
  akas: Akas;
  filmingLocations: AlternateVersions;
  production: Production;
  companies: Companies;
  productionBudget: null;
  lifetimeGross: null;
  openingWeekendGross: null;
  worldwideGross: null;
  technicalSpecifications: TechnicalSpecifications;
  runtime: null;
  series: null;
  canHaveEpisodes: boolean;
  contributionQuestions: ContributionQuestions;
  __typename: MainTypename;
}

export enum MainTypename {
  Title = "Title",
}

export interface Akas {
  edges: AkasEdge[];
  __typename: string;
}

export interface AkasEdge {
  node: OriginalTitleText;
  __typename: string;
}

export interface OriginalTitleText {
  text: string;
  __typename: OriginalTitleTextTypename;
}

export enum OriginalTitleTextTypename {
  Aka = "Aka",
  CompanyText = "CompanyText",
  CreditCategory = "CreditCategory",
  GenreItem = "GenreItem",
  LocalizedDisplayableCount = "LocalizedDisplayableCount",
  NameText = "NameText",
  TitleConnectionCategory = "TitleConnectionCategory",
  TitleKeyword = "TitleKeyword",
  TitleText = "TitleText",
}

export interface AlternateVersions {
  total: number;
  edges: AlternateVersionsEdge[];
  __typename: string;
}

export interface AlternateVersionsEdge {
  node: PurpleNode;
  __typename: PurpleTypename;
}

export enum PurpleTypename {
  AlexaQuestionEdge = "AlexaQuestionEdge",
  FilmingLocationEdge = "FilmingLocationEdge",
  ImageEdge = "ImageEdge",
  TaglineEdge = "TaglineEdge",
  TitleKeywordEdge = "TitleKeywordEdge",
}

export interface PurpleNode {
  text?: string;
  location?: string;
  attributes?: any[];
  __typename: FluffyTypename;
  id?: string;
  url?: string;
  caption?: PlotText;
  height?: number;
  width?: number;
  attributeId?: string;
  question?: PlotText;
  legacyId?: string;
  experimental_translatedText?: null;
}

export enum FluffyTypename {
  AlexaQuestion = "AlexaQuestion",
  FilmingLocation = "FilmingLocation",
  Image = "Image",
  Tagline = "Tagline",
  TitleKeyword = "TitleKeyword",
}

export interface PlotText {
  plainText: string;
  __typename: PlotTextTypename;
}

export enum PlotTextTypename {
  Markdown = "Markdown",
}

export interface CanRate {
  isRatable: boolean;
  __typename: CanRateTypename;
}

export enum CanRateTypename {
  CanRate = "CanRate",
}

export interface Cast {
  edges: CastEdge[];
  __typename: string;
}

export interface CastEdge {
  node: FluffyNode;
  __typename: TentacledTypename;
}

export enum TentacledTypename {
  CreditEdge = "CreditEdge",
}

export interface FluffyNode {
  name: Name;
  attributes: null;
  category: PrimaryImageElement;
  characters: Character[];
  episodeCredits: EpisodeCredits;
  __typename: StickyTypename;
}

export enum StickyTypename {
  Cast = "Cast",
}

export interface PrimaryImageElement {
  id: string;
  __typename: LanguageTypename;
}

export enum LanguageTypename {
  CountryOfOrigin = "CountryOfOrigin",
  CreditCategory = "CreditCategory",
  DisplayableLanguage = "DisplayableLanguage",
  Image = "Image",
}

export interface Character {
  name: string;
  __typename: CharacterTypename;
}

export enum CharacterTypename {
  Character = "Character",
}

export interface EpisodeCredits {
  total: number;
  yearRange: ReleaseYear;
  __typename: EpisodeCreditsTypename;
}

export enum EpisodeCreditsTypename {
  EpisodeCastConnection = "EpisodeCastConnection",
}

export interface ReleaseYear {
  year: number;
  endYear: number | null;
  __typename: ReleaseYearTypename;
}

export enum ReleaseYearTypename {
  YearRange = "YearRange",
}

export interface Name {
  id: string;
  nameText: OriginalTitleText;
  primaryImage?: ThumbnailClass;
  __typename: IndigoTypename;
}

export enum IndigoTypename {
  Name = "Name",
}

export interface ThumbnailClass {
  url: string;
  width: number;
  height: number;
  __typename: ThumbnailTypename;
  caption?: PlotText;
  id?: string;
}

export enum ThumbnailTypename {
  Image = "Image",
  Thumbnail = "Thumbnail",
}

export interface Companies {
  total: number;
  __typename: string;
}

export interface Connections {
  edges: ConnectionsEdge[];
  __typename: string;
}

export interface ConnectionsEdge {
  node: TentacledNode;
  __typename: string;
}

export interface TentacledNode {
  associatedTitle: Title;
  category: OriginalTitleText;
  __typename: string;
}

export interface Title {
  id: string;
  releaseYear: Year;
  titleText: OriginalTitleText;
  originalTitleText: OriginalTitleText;
  series?: AssociatedTitleSeries;
  __typename: MainTypename;
}

export interface Year {
  year: number;
  __typename: string;
}

export interface AssociatedTitleSeries {
  series: SeriesSeries;
  __typename: string;
}

export interface SeriesSeries {
  titleText: OriginalTitleText;
  originalTitleText: OriginalTitleText;
  __typename: MainTypename;
}

export interface ContributionQuestions {
  contributionLink: Link;
  edges: ContributionQuestionsEdge[];
  __typename: string;
}

export interface Link {
  url: string;
  __typename: string;
}

export interface ContributionQuestionsEdge {
  node: StickyNode;
  __typename: string;
}

export interface StickyNode {
  entity: Entity;
  questionId: string;
  questionText: PlotText;
  contributionLink: Link;
  __typename: string;
}

export interface Entity {
  primaryImage: ThumbnailClass;
  __typename: MainTypename;
}

export interface MainCountriesOfOrigin {
  countries: CurrentProductionStage[];
  __typename: string;
}

export interface CurrentProductionStage {
  id: string;
  text: string;
  __typename: string;
  attributes?: any[];
}

export interface CrazyCredits {
  edges: CrazyCreditsEdge[];
  __typename: string;
}

export interface CrazyCreditsEdge {
  node: IndigoNode;
  __typename: string;
}

export interface IndigoNode {
  text: PlotTextClass;
  __typename: string;
}

export interface PlotTextClass {
  plaidHtml: string;
  __typename: PlotTextTypename;
}

export interface Creator {
  totalCredits: number;
  category: OriginalTitleText;
  credits: Credit[];
  __typename: string;
}

export interface Credit {
  name: Name;
  attributes: null;
  __typename: string;
}

export interface Episodes {
  episodes: Companies;
  seasons: Season[];
  years: Year[];
  totalEpisodes: Companies;
  unknownSeasonEpisodes: Companies;
  topRated: TopRated;
  __typename: string;
}

export interface Season {
  number: number;
  __typename: string;
}

export interface TopRated {
  edges: TopRatedEdge[];
  __typename: string;
}

export interface TopRatedEdge {
  node: IndecentNode;
  __typename: string;
}

export interface IndecentNode {
  ratingsSummary: PurpleRatingsSummary;
  __typename: MainTypename;
}

export interface PurpleRatingsSummary {
  aggregateRating: number;
  __typename: RatingsSummaryTypename;
}

export enum RatingsSummaryTypename {
  RatingsSummary = "RatingsSummary",
}

export interface MainFeaturedReviews {
  edges: PurpleEdge[];
  __typename: string;
}

export interface PurpleEdge {
  node: HilariousNode;
  __typename: string;
}

export interface HilariousNode {
  id: string;
  author: PurpleAuthor;
  summary: Summary;
  text: PurpleText;
  authorRating: number;
  submissionDate: Date;
  helpfulness: Helpfulness;
  __typename: string;
}

export interface PurpleAuthor {
  nickName: string;
  userId: string;
  __typename: string;
}

export interface Helpfulness {
  upVotes: number;
  downVotes: number;
  __typename: string;
}

export interface Summary {
  originalText: string;
  __typename: string;
}

export interface PurpleText {
  originalText: PlotTextClass;
  __typename: string;
}

export interface MoreLikeThisTitles {
  edges: MoreLikeThisTitlesEdge[];
  __typename: string;
}

export interface MoreLikeThisTitlesEdge {
  node: AmbitiousNode;
  __typename: IndecentTypename;
}

export enum IndecentTypename {
  MoreLikeThisEdge = "MoreLikeThisEdge",
}

export interface AmbitiousNode {
  id: string;
  titleText: OriginalTitleText;
  titleType: NodeTitleType;
  originalTitleText: OriginalTitleText;
  primaryImage: ThumbnailClass;
  releaseYear: ReleaseYear;
  ratingsSummary: TopRatingsSummary;
  runtime: PurpleRuntime | null;
  certificate: NodeCertificate | null;
  canRate: CanRate;
  titleGenres: TitleGenres;
  canHaveEpisodes: boolean;
  __typename: MainTypename;
}

export interface NodeCertificate {
  rating: ContentRatingEnum;
  __typename: CertificateTypename;
}

export enum CertificateTypename {
  Certificate = "Certificate",
}

export enum ContentRatingEnum {
  R = "R",
  TvMa = "TV-MA",
}

export interface TopRatingsSummary {
  aggregateRating: number | null;
  voteCount: number;
  __typename: RatingsSummaryTypename;
}

export interface PurpleRuntime {
  seconds: number;
  __typename: string;
}

export interface TitleGenres {
  genres: Genre[];
  __typename: TitleGenresTypename;
}

export enum TitleGenresTypename {
  TitleGenres = "TitleGenres",
}

export interface Genre {
  genre: OriginalTitleText;
  __typename: HilariousTypename;
}

export enum HilariousTypename {
  TitleGenre = "TitleGenre",
}

export interface NodeTitleType {
  id: ID;
  text: TextEnum;
  canHaveEpisodes: boolean;
  displayableProperty: DisplayableProperty;
  __typename: TitleTypeTypename;
}

export enum TitleTypeTypename {
  TitleType = "TitleType",
}

export interface DisplayableProperty {
  value: PlotText;
  __typename: DisplayablePropertyTypename;
}

export enum DisplayablePropertyTypename {
  DisplayableTitleTypeProperty = "DisplayableTitleTypeProperty",
}

export enum ID {
  Movie = "movie",
  TvMiniSeries = "tvMiniSeries",
  TvSeries = "tvSeries",
}

export enum TextEnum {
  Movie = "Movie",
  TVMiniSeries = "TV Mini Series",
  TVSeries = "TV Series",
}

export interface Production {
  edges: ProductionEdge[];
  __typename: string;
}

export interface ProductionEdge {
  node: CunningNode;
  __typename: string;
}

export interface CunningNode {
  company: Company;
  __typename: string;
}

export interface Company {
  id: string;
  companyText: OriginalTitleText;
  __typename: string;
}

export interface ProductionStatus {
  currentProductionStage: CurrentProductionStage;
  productionStatusHistory: ProductionStatusHistory[];
  restriction: null;
  __typename: string;
}

export interface ProductionStatusHistory {
  status: CurrentProductionStage;
  __typename: ProductionStatusHistoryTypename;
}

export enum ProductionStatusHistoryTypename {
  ProductionStatusHistory = "ProductionStatusHistory",
}

export interface MainRatingsSummary {
  topRanking: TopRanking;
  __typename: RatingsSummaryTypename;
}

export interface TopRanking {
  id: string;
  text: TextElement;
  rank: number;
  __typename: string;
}

export interface TextElement {
  value: string;
  __typename: DisplayNameTypename;
}

export enum DisplayNameTypename {
  LocalizedString = "LocalizedString",
  TitleTypeCategory = "TitleTypeCategory",
}

export interface ReleaseDate {
  day: number;
  month: number;
  year: number;
  country?: CurrentProductionStage;
  __typename: string;
}

export interface SpokenLanguages {
  spokenLanguages: CurrentProductionStage[];
  __typename: string;
}

export interface TechnicalSpecifications {
  soundMixes: SoundMixes;
  aspectRatios: AspectRatios;
  colorations: Colorations;
  __typename: string;
}

export interface AspectRatios {
  items: AspectRatiosItem[];
  __typename: string;
}

export interface AspectRatiosItem {
  aspectRatio: string;
  attributes: any[];
  __typename: string;
}

export interface Colorations {
  items: ColorationsItem[];
  __typename: string;
}

export interface ColorationsItem {
  text: string;
  location?: string;
  attributes: any[];
  __typename: string;
  conceptId?: string;
}

export interface SoundMixes {
  items: CurrentProductionStage[];
  __typename: string;
}

export interface MainTitleType {
  id: ID;
  canHaveEpisodes: boolean;
  __typename: TitleTypeTypename;
}

export interface Trivia {
  edges: TriviaEdge[];
  __typename: string;
}

export interface TriviaEdge {
  node: MagentaNode;
  __typename: string;
}

export interface MagentaNode {
  text: PlotTextClass;
  trademark: null;
  relatedNames: null;
  __typename: string;
}

export interface VideoStrip {
  edges: VideoStripEdge[];
  __typename: string;
}

export interface VideoStripEdge {
  node: FriskyNode;
  __typename: AmbitiousTypename;
}

export enum AmbitiousTypename {
  VideoEdge = "VideoEdge",
}

export interface FriskyNode {
  id: string;
  contentType: PurpleContentType;
  name: TextElement;
  runtime: FluffyRuntime;
  thumbnail: ThumbnailClass;
  __typename: CunningTypename;
}

export enum CunningTypename {
  Video = "Video",
}

export interface PurpleContentType {
  displayName: TextElement;
  __typename: ContentTypeTypename;
}

export enum ContentTypeTypename {
  VideoContentType = "VideoContentType",
}

export interface FluffyRuntime {
  value: number;
  __typename: RuntimeTypename;
}

export enum RuntimeTypename {
  VideoRuntime = "VideoRuntime",
}

export interface Short {
  "@context": string;
  "@type": string;
  url: string;
  name: string;
  image: string;
  description: string;
  review: Review;
  aggregateRating: Rating;
  contentRating: ContentRatingEnum;
  genre: string[];
  datePublished: Date;
  keywords: string;
  actor: Tor[];
  creator: Tor[];
  trailer: Trailer;
}

export interface Tor {
  "@type": string;
  url: string;
  name?: string;
}

export interface Rating {
  "@type": string;
  ratingCount?: number;
  bestRating: number;
  worstRating: number;
  ratingValue: number;
}

export interface Review {
  "@type": string;
  itemReviewed: ItemReviewed;
  author: ReviewAuthor;
  dateCreated: Date;
  inLanguage: string;
  name: string;
  reviewBody: string;
  reviewRating: Rating;
}

export interface ReviewAuthor {
  "@type": string;
  name: string;
}

export interface ItemReviewed {
  "@type": string;
  url: string;
}

export interface Trailer {
  "@type": string;
  name: string;
  embedUrl: string;
  thumbnail: Thumbnail;
  thumbnailUrl: string;
  url: string;
  description: string;
  duration: string;
  uploadDate: Date;
}

export interface Thumbnail {
  "@type": string;
  contentUrl: string;
}

export interface StoryLine {
  id: string;
  summaries: Akas;
  outlines: Outlines;
  synopses: Akas;
  storylineKeywords: AlternateVersions;
  taglines: AlternateVersions;
  genres: Genres;
  certificate: StoryLineCertificate;
  parentsGuide: ParentsGuide;
  __typename: MainTypename;
}

export interface StoryLineCertificate {
  rating: ContentRatingEnum;
  ratingReason: null;
  ratingsBody: null;
  __typename: CertificateTypename;
}

export interface Genres {
  genres: CurrentProductionStage[];
  __typename: string;
}

export interface Outlines {
  edges: OutlinesEdge[];
  __typename: string;
}

export interface OutlinesEdge {
  node: MischievousNode;
  __typename: string;
}

export interface MischievousNode {
  plotText: PlotTextClass;
  experimental_translatedPlotText: null;
  __typename: string;
}

export interface ParentsGuide {
  guideItems: Companies;
  __typename: string;
}

export interface Top {
  id: string;
  productionStatus: ProductionStatus;
  canHaveEpisodes: boolean;
  series: null;
  titleText: OriginalTitleText;
  titleType: TopTitleType;
  originalTitleText: OriginalTitleText;
  certificate: NodeCertificate;
  releaseYear: ReleaseYear;
  releaseDate: ReleaseDate;
  runtime: null;
  canRate: CanRate;
  ratingsSummary: TopRatingsSummary;
  meterRanking: MeterRanking;
  primaryImage: ThumbnailClass;
  images: AlternateVersions;
  videos: Companies;
  primaryVideos: PrimaryVideos;
  externalLinks: Companies;
  metacritic: null;
  keywords: AlternateVersions;
  genres: Genres;
  plot: Plot;
  plotContributionLink: Link;
  credits: Companies;
  principalCredits: PrincipalCredit[];
  reviews: Companies;
  criticReviewsTotal: Companies;
  triviaTotal: Companies;
  engagementStatistics: EngagementStatistics;
  subNavCredits: Companies;
  subNavReviews: Companies;
  subNavTrivia: Companies;
  subNavFaqs: Companies;
  subNavTopQuestions: Companies;
  titleGenres: TitleGenres;
  meta: Meta;
  castPageTitle: CastPageTitle;
  creatorsPageTitle: CreatorsPageTitle[];
  directorsPageTitle: any[];
  countriesOfOrigin: TopCountriesOfOrigin;
  production: Production;
  featuredReviews: TopFeaturedReviews;
  __typename: MainTypename;
}

export interface CastPageTitle {
  edges: CastPageTitleEdge[];
  __typename: string;
}

export interface CastPageTitleEdge {
  node: NodeElement;
  __typename: TentacledTypename;
}

export interface NodeElement {
  name: Name;
  __typename: string;
}

export interface TopCountriesOfOrigin {
  countries: PrimaryImageElement[];
  __typename: string;
}

export interface CreatorsPageTitle {
  credits: NodeElement[];
  __typename: string;
}

export interface EngagementStatistics {
  watchlistStatistics: WatchlistStatistics;
  __typename: string;
}

export interface WatchlistStatistics {
  displayableCount: OriginalTitleText;
  __typename: string;
}

export interface TopFeaturedReviews {
  edges: FluffyEdge[];
  __typename: string;
}

export interface FluffyEdge {
  node: BraggadociousNode;
  __typename: string;
}

export interface BraggadociousNode {
  author: FluffyAuthor;
  summary: Summary;
  text: FluffyText;
  authorRating: number;
  submissionDate: Date;
  __typename: string;
}

export interface FluffyAuthor {
  nickName: string;
  __typename: string;
}

export interface FluffyText {
  originalText: PlotText;
  __typename: string;
}

export interface Meta {
  canonicalId: string;
  publicationStatus: string;
  __typename: string;
}

export interface MeterRanking {
  currentRank: number;
  rankChange: RankChange;
  __typename: string;
}

export interface RankChange {
  changeDirection: string;
  difference: number;
  __typename: string;
}

export interface Plot {
  plotText: PlotText;
  language: PrimaryImageElement;
  __typename: string;
}

export interface PrimaryVideos {
  edges: PrimaryVideosEdge[];
  __typename: string;
}

export interface PrimaryVideosEdge {
  node: Node1;
  __typename: AmbitiousTypename;
}

export interface Node1 {
  id: string;
  createdDate: Date;
  isMature: boolean;
  runtime: FluffyRuntime;
  name: Description;
  description: Description;
  timedTextTracks: any[];
  recommendedTimedTextTrack: null;
  thumbnail: ThumbnailClass;
  primaryTitle: Title;
  playbackURLs: URL[];
  contentType: FluffyContentType;
  previewURLs: URL[];
  __typename: CunningTypename;
}

export interface FluffyContentType {
  id: string;
  displayName: TextElement;
  __typename: ContentTypeTypename;
}

export interface Description {
  value: string;
  language: Language;
  __typename: DisplayNameTypename;
}

export enum Language {
  En = "en",
  EnUS = "en-US",
}

export interface URL {
  displayName: Description;
  videoMimeType: string;
  videoDefinition: string;
  url: string;
  __typename: string;
}

export interface PrincipalCredit {
  totalCredits: number;
  category: CurrentProductionStage;
  credits: Credit[];
  __typename: string;
}

export interface TopTitleType {
  displayableProperty: DisplayableProperty;
  text: TextEnum;
  id: ID;
  isSeries: boolean;
  isEpisode: boolean;
  categories: TextElement[];
  canHaveEpisodes: boolean;
  __typename: TitleTypeTypename;
}
