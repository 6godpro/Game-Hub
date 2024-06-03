import { HStack, Skeleton, SkeletonCircle } from "@chakra-ui/react";

const GenreListSkeleton = () => (
  <HStack mb={2} paddingY="5px">
    <SkeletonCircle size="32px" borderRadius={8} />
    <Skeleton height="14px" width="150px" />
  </HStack>
);

export default GenreListSkeleton;
