import { Card, Skeleton } from "@nextui-org/react";

interface ListingsCardLoaderProps {
  no: number;
}

export function ListingsCardLoader({ no }: ListingsCardLoaderProps) {
  return (
    <div
      className="w-full flex items-center justify-center ">
      <div
        className="w-[90%] p-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3   gap-3 lg:gap-4 
    justify-center ">
        {[...Array(no)].map((_, i) => {
          return (
            <Card className="w-full h-[400px] space-y-5 p-4" radius="lg">
              <Skeleton className="rounded-lg">
                <div className="h-[250px] rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
