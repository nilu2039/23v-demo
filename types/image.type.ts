export type AllImage = {
  id: string;
  slug?: string;
  alternative_slugs?: AlternativeSlugs;
  created_at?: Date;
  updated_at?: Date;
  promoted_at?: null;
  width?: number;
  height?: number;
  color?: string;
  blur_hash?: string;
  description?: null;
  alt_description?: string;
  breadcrumbs?: any[];
  urls?: Urls;
  links?: AllImageLinks;
  likes?: number;
  liked_by_user?: boolean;
  current_user_collections?: any[];
  sponsorship?: Sponsorship;
  topic_submissions?: TopicSubmissions;
  asset_type?: string;
  user?: User;
};

export type AlternativeSlugs = {
  en?: string;
  es?: string;
  ja?: string;
  fr?: string;
  it?: string;
  ko?: string;
  de?: string;
  pt?: string;
};

export type AllImageLinks = {
  self?: string;
  html?: string;
  download?: string;
  download_location?: string;
};

export type Sponsorship = {
  impression_urls?: string[];
  tagline?: string;
  tagline_url?: string;
  sponsor?: User;
};

export type User = {
  id?: string;
  updated_at?: Date;
  username?: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  twitter_username?: string;
  portfolio_url?: string;
  bio?: string;
  location?: null;
  links?: UserLinks;
  profile_image?: ProfileImage;
  instagram_username?: string;
  total_collections?: number;
  total_likes?: number;
  total_photos?: number;
  total_promoted_photos?: number;
  total_illustrations?: number;
  total_promoted_illustrations?: number;
  accepted_tos?: boolean;
  for_hire?: boolean;
  social?: Social;
};

export type UserLinks = {
  self?: string;
  html?: string;
  photos?: string;
  likes?: string;
  portfolio?: string;
  following?: string;
  followers?: string;
};

export type ProfileImage = {
  small?: string;
  medium?: string;
  large?: string;
};

export type Social = {
  instagram_username?: string;
  portfolio_url?: string;
  twitter_username?: string;
  paypal_email?: null;
};

export type TopicSubmissions = {};

export type Urls = {
  raw?: string;
  full?: string;
  regular?: string;
  small?: string;
  thumb?: string;
  small_s3?: string;
};

export type ImageDetail = {
  id?: string;
  slug?: string;
  alternative_slugs?: AlternativeSlugs;
  created_at?: Date;
  updated_at?: Date;
  promoted_at?: null;
  width?: number;
  height?: number;
  color?: string;
  blur_hash?: string;
  description?: null;
  alt_description?: string;
  breadcrumbs?: any[];
  urls?: Urls;
  links?: SponsorshipClass;
  likes?: number;
  liked_by_user?: boolean;
  current_user_collections?: any[];
  sponsorship?: SponsorshipClass;
  topic_submissions?: SponsorshipClass;
  asset_type?: AssetType;
  user?: User;
  exif?: Exif;
  location?: Location;
  meta?: Meta;
  public_domain?: boolean;
  tags?: any[];
  tags_preview?: any[];
  views?: number;
  downloads?: number;
  topics?: any[];
  related_collections?: RelatedCollections;
};

export type AssetType = "photo";

export type Exif = {
  make?: string;
  model?: string;
  name?: string;
  exposure_time?: string;
  aperture?: string;
  focal_length?: string;
  iso?: number;
};

export type SponsorshipClass = {};

export type Location = {
  name?: null;
  city?: null;
  country?: null;
  position?: Position;
};

export type Position = {
  latitude?: number;
  longitude?: number;
};

export type Meta = {
  index?: boolean;
};

export type RelatedCollections = {
  total?: number;
  type?: string;
  results?: Result[];
};

export type Result = {
  id?: string;
  title?: string;
  description?: null;
  published_at?: Date;
  last_collected_at?: Date;
  updated_at?: Date;
  featured?: boolean;
  total_photos?: number;
  private?: boolean;
  share_key?: string;
  tags?: Tag[];
  links?: ResultLinks;
  user?: User;
  cover_photo?: ResultCoverPhoto;
  preview_photos?: PreviewPhoto[];
};

export type ResultCoverPhoto = {
  id?: string;
  slug?: string;
  alternative_slugs?: AlternativeSlugs;
  created_at?: Date;
  updated_at?: Date;
  promoted_at?: Date | null;
  width?: number;
  height?: number;
  color?: string;
  blur_hash?: string;
  description?: null | string;
  alt_description?: string;
  breadcrumbs?: Breadcrumb[];
  urls?: Urls;
  links?: CoverPhotoLinks;
  likes?: number;
  liked_by_user?: boolean;
  current_user_collections?: any[];
  sponsorship?: null;
  topic_submissions?: PurpleTopicSubmissions;
  asset_type?: AssetType;
  user?: User;
};

export type Breadcrumb = {
  slug?: string;
  title?: string;
  index?: number;
  type?: Type;
};

export type Type = "landing_page" | "search";

export type CoverPhotoLinks = {
  self?: string;
  html?: string;
  download?: string;
  download_location?: string;
};

export type PurpleTopicSubmissions = {
  "macro-moments"?: ColorOfWater;
  "textures-patterns"?: ColorOfWater;
  wallpapers?: ColorOfWater;
  "color-of-water"?: ColorOfWater;
  "street-photography"?: ColorOfWater;
};

export type ColorOfWater = {
  status?: Status;
  approved_on?: Date;
};

export type Status = "approved";

export type ResultLinks = {
  self?: string;
  html?: string;
  photos?: string;
  related?: string;
};

export type PreviewPhoto = {
  id?: string;
  slug?: string;
  created_at?: Date;
  updated_at?: Date;
  blur_hash?: string;
  asset_type?: AssetType;
  urls?: Urls;
};

export type Tag = {
  type?: Type;
  title?: string;
  source?: Source;
};

export type Source = {
  ancestry?: Ancestry;
  title?: string;
  subtitle?: string;
  description?: string;
  meta_title?: string;
  meta_description?: string;
  cover_photo?: SourceCoverPhoto;
  affiliate_search_query?: null;
};

export type Ancestry = {
  type?: Category;
  category?: Category;
  subcategory?: Category;
};

export type Category = {
  slug?: string;
  pretty_slug?: string;
};

export type SourceCoverPhoto = {
  id?: string;
  slug?: string;
  alternative_slugs?: AlternativeSlugs;
  created_at?: Date;
  updated_at?: Date;
  promoted_at?: Date | null;
  width?: number;
  height?: number;
  color?: string;
  blur_hash?: string;
  description?: string;
  alt_description?: string;
  breadcrumbs?: Breadcrumb[];
  urls?: Urls;
  links?: CoverPhotoLinks;
  likes?: number;
  liked_by_user?: boolean;
  current_user_collections?: any[];
  sponsorship?: null;
  topic_submissions?: FluffyTopicSubmissions;
  asset_type?: AssetType;
  premium?: boolean;
  plus?: boolean;
  user?: User;
};

export type FluffyTopicSubmissions = {
  animals?: ColorOfWater;
  "textures-patterns"?: ColorOfWater;
  "current-events"?: ColorOfWater;
  nature?: Nature;
  wallpapers?: Nature;
};

export type Nature = {
  status?: string;
};
