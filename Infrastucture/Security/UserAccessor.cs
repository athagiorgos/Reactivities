using System.Security.Claims;
using Application.Interfaces;
using Microsoft.AspNetCore.Http;

namespace Infrastucture.Security
{
    public class UserAccessor : IUserAccessor
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public UserAccessor(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public string GetUsername()
        {
            // getting user name from HttpContext with the use of _httpContextAccessor interface
            return _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Name);
        }
    }
}