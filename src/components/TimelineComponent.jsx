function TimelineComponent({ job: { period, role, organization } }) {
    return (
        <div key={role + period} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="text-sm text-gray-500 w-40 shrink-0">
              {period}
            </span>
            <div>
              <h3 className="text-white font-medium">{role}</h3>
              <p className="text-gray-400 text-sm">{organization}</p>
            </div>
        </div>
    )
}

export default TimelineComponent