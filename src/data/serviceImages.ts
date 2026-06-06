import electricianImg1 from "../imports/ResidenteResultadoDeBusquedaCategorias/6c8699e3c8701a44c5c90888bc4145973ee56f7b.png";
import electricianImg2 from "../imports/ResidenteResultadoDeBusquedaCategorias/8fb8591a14411d96d1be4a756b2c91ffbb6dca69.png";
import electricianImg3 from "../imports/ResidenteResultadoDeBusquedaCategorias/6fae46ed63444816dcf723ab75d5019cf4b9a01b.png";
import providerAvatar from "../imports/ResidenteDetalleServicio/ba6a59c2b8300362d902469a74f672f0090965ac.png";
import reviewerAvatar1 from "../imports/ResidenteDetalleServicio/e14c27901ffe1c2d223fe0361236965d6668c715.png";
import reviewerAvatar2 from "../imports/ResidenteDetalleServicio/4dc5c5e28ab1baa90f57ae5df844e760846c6324.png";

export const LOCAL_IMAGES = {
  electricians: [electricianImg1, electricianImg2, electricianImg3],
  providers: [providerAvatar],
  reviewers: [reviewerAvatar1, reviewerAvatar2],
};

const UNSPLASH_BY_CATEGORY: Record<string, string[]> = {
  electricians: [
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80",
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  ],
  cleaning: [
    "https://images.unsplash.com/photo-1581578731544-c64695cc6952?w=800&q=80",
    "https://images.unsplash.com/photo-1527515637462-cff94eecc458?w=800&q=80",
    "https://images.unsplash.com/photo-1628177142898-93e36e4e3a56?w=800&q=80",
    "https://images.unsplash.com/photo-1563453392213-326e5d1fd51f?w=800&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  ],
  maintenance: [
    "https://images.unsplash.com/photo-1504149922370-1d3f517f1c00?w=800&q=80",
    "https://images.unsplash.com/photo-1581578731544-c64695cc6952?w=800&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  ],
  plumbing: [
    "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
    "https://images.unsplash.com/photo-1585704032915-c3400ca193f0?w=800&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    "https://images.unsplash.com/photo-1504149922370-1d3f517f1c00?w=800&q=80",
    "https://images.unsplash.com/photo-1628177142898-93e36e4e3a56?w=800&q=80",
  ],
  gardening: [
    "https://images.unsplash.com/photo-1592419044701-650b9bd90e57?w=800&q=80",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  ],
};

export function getImagesForCategory(categorySlug: string, index: number): string[] {
  const local = LOCAL_IMAGES.electricians;
  const remote = UNSPLASH_BY_CATEGORY[categorySlug] ?? UNSPLASH_BY_CATEGORY.maintenance;
  const primary =
    categorySlug === "electricians"
      ? local[index % local.length]
      : remote[index % remote.length];

  const secondary = remote[(index + 1) % remote.length];
  const tertiary = remote[(index + 2) % remote.length];

  return [primary, secondary, tertiary];
}

export function getProviderAvatar(index: number): string {
  return (
    LOCAL_IMAGES.providers[index % LOCAL_IMAGES.providers.length] ??
    `https://i.pravatar.cc/150?u=provider-${index}`
  );
}

export function getReviewerAvatar(index: number): string {
  return (
    LOCAL_IMAGES.reviewers[index % LOCAL_IMAGES.reviewers.length] ??
    `https://i.pravatar.cc/80?u=reviewer-${index}`
  );
}
