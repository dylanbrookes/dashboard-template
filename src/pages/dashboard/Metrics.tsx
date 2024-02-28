import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'

export interface Stat {
    id: number
    name: string
    stat: string
    icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string | undefined;
        titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>>
    change?: string
    changeType?: 'increase' | 'decrease'
}



function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Metrics({stats}: {stats: Stat[]}) {
  return (
    <div>
      {/* <h3 className="text-base font-semibold leading-6 text-gray-200">Last 30 days</h3> */}
      <dl className="mt-0 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {stats?.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-gray-900 px-4 pb-0 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-slate-700 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-300">{item.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-200">{item.stat}</p>
              {item.changeType && (<p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                ) : (
                  <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                )}
                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </p>)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
