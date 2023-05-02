import Container from "./components/Container";


export default function Home() {
  return (
    <Container>
      <div className="
        max-w-[1200px]
        mx-auto
        xl:px-20 
        md:px-10
        sm:px-2
        px-4
      ">
        <div className="pt-[4rem] mx-auto">
        <div className="grid grid-cols-[1fr,2fr,1fr]">
          <div className="p-10 hidden md:flex justify-center">
              <div className="sticky top-[5rem] h-[600px] w-[200px] border-black bg-blue-200 rounded-md">
                <div className="text-center">
                  <div>
                    <div className="text-2xl font-bold space-y-10">
                      <h1>Categories</h1>
                      <p className="cursor-pointer text-gray-400 text-sm">
                        programming
                      </p>
                      <p className="cursor-pointer text-gray-400 text-sm">
                        cooking
                      </p>
                      <p className="cursor-pointer text-gray-400 text-sm">
                        travelling
                      </p>
                      <p className="cursor-pointer text-gray-400 text-sm">
                        hating university
                      </p>
                      <div className="rounded-md h-[6rem] w-[7rem] bg-white mx-auto">
                      <div>
                        d
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="flex justify-center">
            <div className="p-10 flex flex-col space-y-10">
              <div className="h-[300px] w-[450px] border-black bg-blue-200 flex-col justify-center items-center rounded-md">
                <div className="text-center">
                  d
                </div>
              </div>
              <div className="h-[300px] w-[450px] border-black bg-blue-200 flex-col justify-center items-center rounded-md">
                <div className="text-center">
                  d
                </div>
              </div>
              <div className="h-[300px] w-[450px] border-black bg-blue-200 flex-col justify-center items-center rounded-md">
                <div className="text-center">
                  d
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 hidden lg:block text-center">
            <div className="sticky top-[5rem] h-[600px] w-[200px] border-black bg-blue-200 flex-col justify-center items-center rounded-md">
                <div className="text-center">
                  d
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
    </Container>
  )
}
